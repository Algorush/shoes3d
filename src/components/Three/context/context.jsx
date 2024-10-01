import { useThree } from '@react-three/fiber';
import { createContext, useContext, useState } from 'react';
const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [g_animations,setAnimations]=useState(null)
  const [g_mixer,setMixer]=useState(null)
  const [g_actions,setActions]=useState(null)
  const [clickedMesh,setClickedMesh]=useState({}) 
  const [introAnimTime,setIntroAnimTime]=useState(0)
  const {set} = useThree(); 
  return (
    <ConfiguratorContext.Provider
      value={{
        g_animations,
        g_mixer,
        g_actions,
        setAnimations,
        setActions,
        setMixer,
        clickedMesh,
        setClickedMesh,
        introAnimTime,
        setIntroAnimTime,  
        set
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
