import { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';

const useVisibilityAnimation = (threshold = 0.5) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('show');
        } else {
          controls.start('hide');
        }
      },
      { threshold } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, threshold]);

  return { ref, controls };
};

export default useVisibilityAnimation;
