import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useConfigurator } from './context/context';
import { isMobile } from 'orientation-check';
import * as THREE from 'three';  

export const RotatingCamera = forwardRef((props, modelRef) => {
    const { set } = useConfigurator()

const shoeGroup = modelRef.current?.shoeGroup.current || null;
const cameraRef = useRef();
const controlsRef = useRef();


  useEffect(() => {
    if (props.active) {  
   
      cameraRef.current.lookAt(0, 5, 0)
      set({ camera: cameraRef.current });
    }
  }, [props.active]);

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        fov={isMobile?50:30}
        position={isMobile ? [30, 30, 60] : [16.47, 30.416, 59.774]}
        rotation={[1.181, 0.091, -0.244]} 
      />
      <OrbitControls
          ref={controlsRef}
          camera={cameraRef.current}
          zoomSpeed={1.2}  // How fast you can zoom
          panSpeed={0.5} // How fast you can pan  
          target={[0, 8, 0]} // Y position of the camera
          enableZoom={true}  // Enable zoom
          enableRotate={true}  // Enable rotation
          enablePan={false} // Disable panning
          touches={{
            ONE: THREE.TOUCH.ROTATE,  // enable one-finger touch for rotation
            TWO: THREE.TOUCH.DOLLY_PAN,  // enable two-finger touch for dolly and pan
          }}
          enableDamping
          dampingFactor={0.1}
        />
    </>
  );
});
