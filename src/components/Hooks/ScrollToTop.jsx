import { useEffect } from "react";

const ScrollToTop = () => {

  useEffect(() => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
          });
    }, 100);
 
  }, []); 

  return null  
  
};

export default ScrollToTop;
