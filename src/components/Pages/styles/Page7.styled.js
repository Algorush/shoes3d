import styled from 'styled-components';
import { motion } from 'framer-motion';
import { isMobile } from 'orientation-check';

export const BlockContainer = styled.div`
position:relative;
display:flex;
height:100%;
width:100%;
justify-content:center;
margin:0 auto;
overflow:hidden;
color: #1D1D1B;
`
export const OverflowWrapper=styled.div`
overflow:hidden;
display:flex;
align-items:center;
`

export const Image = styled.img`
  height:${isMobile?'auto':'125vh'};
  position:relative; 
  z-index:0;
  margin:0 auto;
  object-fit: cover;
`;

const defaults={
    top:'1vh',
    width:'100px'
  };
  
export const Center =styled.div`

width:${(props) => props.$width || defaults.width};
height:auto;
margin:0 auto;
display:flex;
z-Index:2;
justify-content:center;
position:absolute;
top: ${(props) => props.$top || defaults.top};
`

export const Title = styled.h1`
  // font-size: clamp(3.05rem, 4.44vw + 0.21rem, 4.21rem);
  font-weight:200;
  font-size:34px;
  text-align:center; 
  color: #1D1D1B;
  letter-spacing: 12px;
  line-height: 120%;

`;

// Styled components for the container and text
export const ScrollingContainer = styled.div` 
  white-space: nowrap;
  position: absolute;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;  
  z-index:1;
`;

export const ScrollingText = styled(motion.div)`
position:relative;
  display: inline-block;
  max-width:${isMobile?'550%':'300%'};
  white-space: nowrap;
`;

export const scrollAnimation = {
    animate: {
      x: ['0', '-100%'], // Start at the beginning and scroll to the end
    },
    transition: {
      repeat: Infinity, // Keeps the animation running forever
      duration: 20, // Adjust speed here
      ease: 'linear', // Smooth transition
    },
  };