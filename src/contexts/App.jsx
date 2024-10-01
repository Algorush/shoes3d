import { createContext, useContext, useState } from 'react';

const ConfiguratorContext = createContext();

export const AppProvider = ({ children }) => {

  const [firstLoad, setFirstLoad] = useState(false)
  const [scrolledContainer, setScrolledContainer] = useState(null)
  const [intro, setIntro] = useState(false)
  const [root, setRoot] = useState(null)
  const [canvasParent,setCanvasParent]=useState(null)
  const [canvas,setCanvas]=useState(null)
  const [markersPage, setMarkersPage] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})
  const [pageTwoScrollProgress, setPageTwoScrollScroll] = useState(0)
  const [pageThreeScrollProgress, setPageThreeScrollProgress] = useState(1)
  const [shoeColor,setShoeColor]=useState(1);

  return (
    <ConfiguratorContext.Provider
      value={{
        firstLoad, setFirstLoad,
        scrolledContainer, setScrolledContainer,
        intro, setIntro,
        root, setRoot,
        canvasParent,setCanvasParent,
        canvas,setCanvas,
        markersPage, setMarkersPage,
        pageTwoScrollProgress, setPageTwoScrollScroll,
        activeMarker, setActiveMarker,
        pageThreeScrollProgress, setPageThreeScrollProgress,
        shoeColor,setShoeColor
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useAppProvider = () => {
  return useContext(ConfiguratorContext);
};
