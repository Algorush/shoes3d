
import RenderModel from './Render';

import { MakeEnvironment } from "./Environment";

import React, { useState } from 'react';
import { useAppProvider } from '../../contexts/App';
import { useScroll } from 'framer-motion';
import { ThreeSceneMaterials } from './Materials';
import { useEffect } from 'react';

export const Scene = () => { 

  const [loadingMats,startedLoading]=useState(false)

  useEffect(()=>{

    if (!loadingMats) {
      ThreeSceneMaterials()
      startedLoading(true)
    }

  },[])

  
  const { scrolledContainer} = useAppProvider()

  const { scrollYProgress } = useScroll({ target: scrolledContainer })

return (
    <>
      <RenderModel progress={scrollYProgress}/>
      <MakeEnvironment/> 
    </>
  );
};
