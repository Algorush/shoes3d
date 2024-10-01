import { Model } from "./model";
import React, { useState } from "react";
import { useConfigurator } from "./context/context";
import { useEffect } from "react";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useAppProvider } from "../../contexts/App";
import Markers_Camera from "./MarkersCamera";
import Markers from "./Markers";
import { RotatingCamera } from "./RotatingCamera"
import { subscribeKey } from "valtio/utils";
import { state } from "./store";
import { isMobile } from "orientation-check";
import * as THREE from 'three';

function RenderModel(props) {

    const { scene, gl } = useThree()
    const { g_actions, set } = useConfigurator()

    const { pageTwoScrollProgress, pageThreeScrollProgress, intro, setIntro, shoeColor, setShoeColor } = useAppProvider()

    const scrollYProgress = props.progress

    const modelRef = useRef()
    const group = modelRef.current?.group.current || null;
    const animCam = modelRef.current?.camRef.current || null;
    const shoeGroup = modelRef.current?.shoeGroup.current || null;
    const group_materials = modelRef.current?.groupmaterials.current || null;
    const extra_materials = useRef(null)

    const animationDuration = useRef(null)
    const elapsedTime = useRef(0)

    const [useMarkersCamera, setuseMarkersCamera] = useState(false);
    const [useRotatingCamera, setuseRotatingCamera] = useState(false);

    const resetCanvasOrientation = () => {
        if (gl.domElement.style.transform == "rotate(90deg)") {
            gl.domElement.style.transform = "rotate(0deg)"
        }
    }

    const meshRefs = {
        sole: useRef(),
        inner: useRef(),
        outer: useRef(),
        Bag:useRef()
    };

    const materialRefs = {
        sole: { primary: useRef(), secondary: useRef() },
        inner: { primary: useRef(), secondary: useRef() },
        outer: { primary: useRef(), secondary: useRef() },
        Bag:{1: useRef(), 2: useRef() ,3:useRef()}
    };

    // Function to assign mesh and material references
    function materialThings(meshGroup) {
        meshGroup.traverse((mesh) => {

            if (mesh.name in meshRefs) {
                meshRefs[mesh.name].current = mesh;
                        
            }

            if (!mesh.material) return;

            const materialMapping = {
                sole: ['inner_1003', 'inner_1003_secondary'],
                outer: ['inner_1001', 'inner_1001_secondary'],
                inner: ['inner_1002', 'inner_1002_secondary'],
                Bag:['Canvas','Golden','Black']
            };

            Object.entries(materialMapping).forEach(([key, names]) => {
                if (mesh.material.name === names[0]) {
                    materialRefs[key][1].current = mesh.material;
                    materialRefs[key][2].current = extra_materials.current[names[1]];
                    materialRefs[key][3].current = extra_materials.current[names[2]];
                }
            });

        });
    }

    // useEffect to update material based on shoeColor
    useEffect(() => {    
        Object.entries(meshRefs).forEach(([key, ref]) => {
            if (ref.current) {               
                ref.current.material = materialRefs[key][shoeColor].current
            }
        });
    }, [shoeColor]);

    // Use the progress of the 5th page to switch cameras/scenes, as the scene with markers follows it
    useEffect(() => {
        if (pageTwoScrollProgress == 1 && !useMarkersCamera) {
            setuseMarkersCamera(true)
        }
        if (pageTwoScrollProgress < 0.25 && useMarkersCamera) {
            setuseMarkersCamera(false)
            resetCanvasOrientation()
            set({ camera: animCam })
        }
    }, [pageTwoScrollProgress])

    // Use the progress of the 7th page to switch cameras/scenes, as the scene with markers follows it
    useEffect(() => {
        if (pageThreeScrollProgress < 0.5 && !useRotatingCamera) {
            setuseMarkersCamera(false)
            resetCanvasOrientation()
            setuseRotatingCamera(true)
        }
      
        if (pageThreeScrollProgress > 0.5 && useRotatingCamera) {
            setuseMarkersCamera(true)
            setuseRotatingCamera(false)
            set({ camera: animCam })
        }
    }, [pageThreeScrollProgress])


    function adjustLights(scene) {
        scene.traverse(obj => {
            const regex = /\b\w*Light\b/;
            if (regex.test(obj.type)) {
                obj.intensity = 0.7
            }
        })
    }

    useEffect(() => {
        if (g_actions && g_actions.Cam_parentAction && group) {
            for (const name in g_actions) {
                let action = g_actions[name];
                action.reset().play().paused = true;
                group.visible = true;
            }
    
            animationDuration.current = g_actions.Cam_parentAction.getClip().duration;
            if (isMobile) {
               
                group.parent.traverse((obj) => {
                    if (obj.isLight) {
                    obj.intensity = 0.7;
                    }
                });
            }
        }
    
        if (shoeGroup) {
            adjustLights(group.parent);
            subscribeKey(state, 'materialSet', (v) => {
                if (!extra_materials.current) {
                    extra_materials.current = v;
                    materialThings(shoeGroup);
                }
            });
        }
    }, [g_actions, set]);


    useFrame((state, delta) => {
        if (!animationDuration || !g_actions || !g_actions.Cam_parentAction) {
            return;
        }
    
        if (!intro && scrollYProgress.current === 0) {
            elapsedTime.current += delta / 1;
            const currentTime = Math.min(elapsedTime.current, 1);
    
            g_actions.Cam_parentAction.time = currentTime;
            g_actions.CameraAction.time = currentTime;
    
            g_actions.Cam_parentAction.getMixer().update(delta);
    
            if (elapsedTime.current >= 1) {
                setIntro(true);
                elapsedTime.current = 1;
            }
        } else {
            if (!intro && scrollYProgress.current !== 0) {
                setIntro(true);
            }
            if (scrollYProgress.current === 1) return;
    
            const scrollTime = 1 + 3 * scrollYProgress.current;
    
            if (isMobile && shoeGroup) { // initial model position 
                const targetPositionY = -10 + scrollYProgress.current * 20 + 10;

                shoeGroup.position.y = THREE.MathUtils.lerp(shoeGroup.position.y, targetPositionY, delta * 3); // 5 - speed anim model when loaded
            }
    
            g_actions.Cam_parentAction.time = scrollTime;
            g_actions.CameraAction.time = scrollTime;
            g_actions.Cam_parentAction.getMixer().update(delta);
        }
    });
    
    

    return (
        <>
            <Model ref={modelRef} />
            <Markers_Camera ref={modelRef} active={useMarkersCamera} />
            <Markers ref={modelRef} visibility={useMarkersCamera} />
            <RotatingCamera ref={modelRef} active={useRotatingCamera} />
        </>

    )

}

export default React.memo(RenderModel)