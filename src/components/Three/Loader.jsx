import React, { useEffect, useState, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import imageLogo from '../Pages/images/logoBlack.png';

const Loader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

 /* useEffect(() => {

    const loader = new GLTFLoader();
    
    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const modelPath = isiOS ? './model/bag_1024.glb' : './model/bag.glb';
    
    loader.load(
      modelPath,
      (gltf) => {
        setTimeout(() => {
          setIsLoading(false);
        if (onLoadingComplete) {
          onLoadingComplete(); 
        }
      }, 100);
      
      },
      null,  // onProgress
      (error) => {
        setIsLoading(false);
        if (onLoadingComplete) {
          onLoadingComplete(); 
        }
      }
    );
  }, []);*/

  return (
    <>
      {isLoading ? (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          zIndex: 1000,
          background: '#00000008',
          padding: '20px',
          borderRadius: '10px',
          fontFamily: 'Din-Medium',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <img width={50} src={imageLogo} alt="Logo" />
          <h2 style={{
            padding: '10px 0',
            color: '#000',
            fontSize: '12px',
            fontFamily: 'DinRegular',
            fontWeight: 800,
            textTransform: 'uppercase',
            textAlign: 'center'
          }}>
            Loading<br />please wait
          </h2>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Loader;
