import { Scene } from "./Scene";
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { state } from "./store";
import { ConfiguratorProvider } from "./context/context";
import { isWebGL2Available, useGLTF } from "@react-three/drei";
import { useAppProvider } from "../../contexts/App";
import Loader from './Loader'; 

const backgroundStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 1,
};


const webglFail = {
  fontSize: "50px",
  top: "50%",
  width: "50vw",
  left: "50%",
  height: "fit-content",
  padding: "2%",
  background: 'white',
  border: "solid 2px red",
  borderRadius: "10px",
  transform: "translate(-50%, -50%)",
};

const ThreeComponent = () => {
  const { setCanvasParent, setCanvas } = useAppProvider();
  const canvasParent = useRef();
  const canvas = useRef();

  if (!isWebGL2Available()) {
    return <div style={Object.assign(backgroundStyle, webglFail)}>Your browser does not support WebGL2, which is required to view this content.</div>;
  }

  useEffect(() => {
    setCanvasParent(canvasParent.current);
    setCanvas(canvas.current);
    canvas.current.addEventListener('wheel', (event) => {
      event.stopPropagation();
    }, { passive: false });
  }, [canvasParent.current]);


  const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  //const modelPath = './model/bag_1024.glb';
  const modelPath = './model/bag.glb';
  useGLTF.preload(modelPath);

  return (
    <div ref={canvasParent} style={backgroundStyle}>
      {/*<Suspense>
      <Loader />*/}
      <Suspense>
        <Canvas ref={canvas}>   
          <ConfiguratorProvider>
            <Scene />      
          </ConfiguratorProvider>
        </Canvas>
      </Suspense>     
    </div>
  );
};

export { ThreeComponent };
