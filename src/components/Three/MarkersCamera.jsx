import React, { useRef, useEffect, forwardRef, useState } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { PerspectiveCamera } from '@react-three/drei';
import { useConfigurator } from './context/context';
import { isMobile } from 'orientation-check';

const Markers_Camera = forwardRef((props, modelRef) => {
  const {gl}=useThree()
  const cameraRef = useRef();
  const shoeGroup = modelRef.current?.shoeGroup.current || null;
  const lastUpdateRef = useRef(null);
  const startTimeRef = useRef(null);

  const [targetPosition, setTargetPosition] = useState([0, 0, 150])
  const [targetFov, setTargetFov] = useState(isMobile?30:20)
  const [CurrentPosition, setCurrentPosition] = useState([0, 0, 150])
  const [CurrentFov, setCurrentFov] = useState(isMobile?30:20)

  const { clickedMesh,set } = useConfigurator()

  const compareVectors = (v1, v2) => {
    
    const tolerance = 0.1;
    let vector1 = new THREE.Vector3().fromArray(v1)
    let vector2 = new THREE.Vector3().fromArray(v2)

    const distance = vector1.distanceTo(vector2);
    const isApproximatelyEqual = distance < tolerance;

    return isApproximatelyEqual
  }

  let animSpeed=2

  useFrame((state, delta) => {    
    const currentTime = state.clock.getElapsedTime();

    if (props.active && !compareVectors(cameraRef.current.position, targetPosition) &&lastUpdateRef.current == null) {
     
      if (!startTimeRef.current) {
   
        startTimeRef.current = currentTime;
      }
      const elapsed = (currentTime - startTimeRef.current)*animSpeed;  
      const lerpFactor = THREE.MathUtils.smoothstep(elapsed, 0, 1);

      const currentPos = new THREE.Vector3().fromArray(CurrentPosition);
      const targetPos = new THREE.Vector3().fromArray(targetPosition);
      const lerpedVector = currentPos.lerp(targetPos, lerpFactor);

      const CurrentFovValue = THREE.MathUtils.lerp(CurrentFov, targetFov, lerpFactor);

      cameraRef.current.position.copy(lerpedVector)
 
      cameraRef.current.fov=CurrentFovValue
      cameraRef.current.lookAt(0, 5, 0)
      cameraRef.current.updateProjectionMatrix()

      if (lerpFactor >= 1) {
        startTimeRef.current = null;      
        setCurrentPosition(targetPos.toArray()) 
        setCurrentFov(targetFov) 
        lastUpdateRef.current = currentTime;
      }

    }
  });


  useEffect(() => {
    if (props.active) {  
      
      cameraRef.current.position.copy(new THREE.Vector3().fromArray(CurrentPosition))
      cameraRef.current.fov=CurrentFov
      cameraRef.current.lookAt(0, 5, 0)
      shoeGroup.position.set(0,0,0)
      set({ camera: cameraRef.current });
      if (clickedMesh.mesh&&clickedMesh.mesh.name=="sole") {  
        gl.domElement.style.transform="rotate(90deg)"
      }     
    }
  }, [props.active]);


  useEffect(() => {
    if (clickedMesh.mesh) {
      let posArray = clickedMesh.pos
      if (posArray.length > 0) {
        setTargetPosition(posArray)
        setCurrentPosition(cameraRef.current.position.toArray())
        setTargetFov(clickedMesh.fov)
        setCurrentFov(cameraRef.current.fov)
        startTimeRef.current = null
        lastUpdateRef.current=null  
      }
  
      if (clickedMesh.mesh.name=="sole") {  
        gl.domElement.style.transform="rotate(90deg)"
      } else {
        gl.domElement.style.transform="rotate(0deg)"
      }
    }
  }, [clickedMesh])

  return (
    <PerspectiveCamera
      ref={cameraRef}     
    />
    )
})


export default React.memo(Markers_Camera)