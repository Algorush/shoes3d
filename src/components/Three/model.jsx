import React, { useRef, useEffect, forwardRef, useState } from "react";
import { useGLTF, PerspectiveCamera, useAnimations, useProgress } from "@react-three/drei";
import { useThree } from '@react-three/fiber';
import { state } from './store/index.js';

import { useImperativeHandle } from "react";

import { useConfigurator } from "./context/context.jsx";
import { isMobile } from "orientation-check"

const Model = forwardRef(function (props, modelRef) {

  const group = useRef();
  const boxRef = useRef()
  const shoeGroup=useRef()
  const camRef = useRef()
  const camPositions = useRef()
  const markers = useRef() 
  const groupmaterials = useRef()


  const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  //const modelPath = './model/bag_1024.glb';

  const modelPath = './model/bag.glb';

  const { nodes, materials, animations } = useGLTF(modelPath);

  const { actions, mixer } = useAnimations(animations, group)

  const {
    g_actions, setActions, g_mixer, setMixer, g_animations, setAnimations
  } = useConfigurator()

  const { gl } = useThree(); // get WebGL render

  useEffect(() => {
    if (gl && gl.getExtension) {
      const extension = gl.getExtension('WEBGL_polygon_mode');
      if (extension) {
        //console.log('WEBGL_polygon_mode extension is supported.');
        extension.polygonMode(gl.FRONT_AND_BACK, gl.FILL);
        //console.log('Polygon mode set to FILL to disable polygon mode features.');
      } else {
        //console.log('WEBGL_polygon_mode extension is not supported.');
      }
    } else {
    }
  }, [gl]);
  

  useImperativeHandle(modelRef,
    function () {
      return {
        group, boxRef, camRef, camPositions, markers, groupmaterials,shoeGroup
      }
    }, [])
    
  // DISABLE ALL HEAVY PARAMS
  useEffect(() => {
    if (isMobile) {
      group.current.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = false;
          obj.receiveShadow = false;
        }
      });
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      const lights = ['light_left', 'light_right', 'light_back', 'light_top_back'];
      lights.forEach((lightName) => {
        const light = group.current.getObjectByName(lightName);
        if (light) {
          light.castShadow = false; 
        }
      });
    }
   
  }, []);
 

   // DISABLE ALL HEAVY PARAMS END

  useEffect(() => {
    group.current.visible = false   

    groupmaterials.current = materials

    if (shoeGroup) {     
      if (isMobile) {
        camRef.current.fov=40,
        //shoeGroup.current.position.y += 10
        shoeGroup.current.translateY(-10)   
      }
    }
    
    if (!g_actions) {
      setActions(actions)
    }
    if (!g_mixer) {
      setMixer(mixer)
    }
    if (!g_animations) {
      setAnimations(animations)
    }

    state.modelReady = true
  }, [actions])


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
      <group ref={shoeGroup} name="BagGroup" scale={0.9} > 
          <mesh
            name="Bag"
            receiveShadow
            geometry={nodes.Bag.geometry}
            material={materials.Canvas}
          />
          <mesh
            name="Metal"
            receiveShadow
            geometry={nodes.Metal.geometry}
            material={materials.Metals}
          />       
        </group>
        {/* Move lights outside of the model's group */}
        <directionalLight
  name="light_left"
  intensity={3.5}
  decay={2}
  position={[-10, 15.923, 0]} // Fixed position on the left side of the model
  shadow-mapSize-width={1024}
  shadow-mapSize-height={1024}
/>

<directionalLight
  name="light_right"
  intensity={3.5}
  decay={2}
  position={[10, 15.923, 0]} // Fixed position on the right side of the model
  shadow-mapSize-width={1024}
  shadow-mapSize-height={1024}
/>

<directionalLight
  name="light_back"
  intensity={5.0} 
  decay={2}
  position={[0, 15.923, -30]} // Fixed position behind the model
  shadow-mapSize-width={1024}
  shadow-mapSize-height={1024}
/>

<directionalLight
  name="light_top_back"
  intensity={4.0}
  decay={2}
  position={[0, 25, -20]} // Fixed position slightly above and behind the model
  shadow-mapSize-width={1024}
  shadow-mapSize-height={1024}
/>


        <group name="Cam_parent" rotation={[0.242, -0.3, 0]}>
          <PerspectiveCamera
            ref={camRef}
            name="Camera"
            makeDefault={true}
            far={1000}
            near={0.1}
            fov={22.895}
            position={[26.096, 47.149, 39.739]}
            rotation={[-0.79, 0.395, 0.355]}
          />
        </group>
        <group ref={camPositions} name="Camera_Positions">
        <mesh
            name="Cam_Pos_1_1"
            geometry={nodes.Cam_Pos_1_1.geometry}
            material={nodes.Cam_Pos_1_1.material}
            position={[44.339, 113.979, 31.536]}
            rotation={[-2.421, -0.825, 0.572]}
            scale={-1}
          />
          <mesh
            name="Cam_pos_logo"
            geometry={nodes.Cam_pos_logo.geometry}
            material={nodes.Cam_pos_logo.material}
            position={[-16.47, 30.416, 59.774]}
            rotation={[-1.961, 0.091, -0.244]}
            scale={-1}
          />
          <mesh
            name="Cam_pos_tongue"
            geometry={nodes.Cam_pos_tongue.geometry}
            material={nodes.Cam_pos_tongue.material}
            position={[-46.52, 84.57, -10.422]}
            rotation={[-1.265, 1.006, -1.937]}
            scale={-1}
          />
        </group>
        <group ref={markers}
          name="Markers">
         <mesh
            name="marker_logo"
            geometry={nodes.marker_logo.geometry}
            material={materials.marker_mat}
            position={[0.27, 7.623, 4.543]}
            rotation={[0, 0, -Math.PI]}
            scale={-1.25}
          />
          <mesh
            name="marker_tongue"
            geometry={nodes.marker_tongue.geometry}
            material={materials.marker_mat}
            position={[-12.001, 1.693, -8.974]}
            rotation={[0, 0, -Math.PI]}
            scale={-1.25}
          />
        </group>  
      </group>
    </group>
  );
}

)


export { Model }