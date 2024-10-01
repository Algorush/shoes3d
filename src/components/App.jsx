import React, { Suspense, useRef } from 'react';
import { ThreeComponent } from './Three';
import Header from './Pages/shared/header';
import { initReactI18next } from 'react-i18next';  // Import initReactI18next
import i18n from './translate/i18n';
// Initialize react-i18next
i18n.use(initReactI18next).init();
import { SectionContainer } from './Pages/styles/SectionContainer.styled';
import { Page_1 } from "./Pages/Page1"
import { Page_2 } from "./Pages/Page2"
import { Page_3 } from "./Pages/Page3"
import { Page_5 } from "./Pages/Page5"
import { useAppProvider } from '../contexts/App';
useAppProvider
import { disableScroll,enableScroll } from './Hooks/disableScroll';
import { useEffect } from 'react';

const appStyles={
  position:'relative',
  width:'100vw',
  background:'#e9e3d8'
  }
  
export const App = (props) => {

  const app=useRef()
  const { firstLoad,setScrolledContainer,setRoot,intro } = useAppProvider()

  useEffect(()=>{     
    setRoot(props.root.current)
    setScrolledContainer(app)
    if (!intro) {
    disableScroll()}
  },
  [app])

  useEffect(()=>{
    if (intro) {     
      document.documentElement.style.setProperty('--scroll-alpha',"0.5")
      enableScroll()      
    }
  },[intro])

  return (
 
    <div ref={app} style={appStyles}>
      <Header />
      <SectionContainer>
        <Page_1/>
      </SectionContainer>
      <SectionContainer>      
        {/* This container is needed for 3D animation */}
      </SectionContainer>
      <SectionContainer>
        <Page_3 />
      </SectionContainer>
      <SectionContainer>
        {/* This container is needed to give the scroll extra time to finish the 3D animation */}
      </SectionContainer>
      {firstLoad && <ThreeComponent/>}     
    </div>
  );
};

