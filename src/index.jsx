import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { AppProvider} from './contexts/App';
import { App_2 } from './components/App_2';
import './index.module.css';
import ScrollToTop from './components/Hooks/ScrollToTop';

const Index = () => {

  let rootDiv = useRef();  

  return (
    <AppProvider>  
  
    <div ref={rootDiv} style={{ position: 'relative', height: '100%'}}>    
        <App root={rootDiv} />       
        <App_2 />
    </div>
    <ScrollToTop/>
    </AppProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Index />); 

// Listen to orientation changes
window.addEventListener("orientationchange",()=>{location.reload()});