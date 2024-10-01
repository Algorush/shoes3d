import styled from 'styled-components';
import { motion } from 'framer-motion';
import { isMobile } from 'orientation-check';
import bgImage from '../images/page9_bg.jpg'
import { isLandScape } from '../../Hooks/checkOrientation';
import { isMobileOnly } from 'react-device-detect';
export const OverflowWrapper=styled.div`
overflow:hidden
`

export const BlockContainer=styled.div`
position:relative;
display:flex;
height:100%;
color: #1D1D1B;
width:100%;
justify-content:center;
margin:0 auto;
background-image:url(${bgImage});
background-color:white;
background-size: cover;
background-position: center;
background-attachment: fixed;
`

export const ImageWrapper=styled.div`
height:100vh;
width:100vw;
display:flex;
align-items:center;
justify-content:center
`
export const IntroImage = styled.img`
  width: ${isMobileOnly&&isLandScape?"100px":"125px"};
  object-fit: cover;
`;

export const Image = styled.img`
  height:${isMobile?'30%':'40%'};
  position:relative; 
  z-index:0;
  margin:0 auto;
  margin-top:${isMobile?'15vh':'10vh'};
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
  font-size:50px;
  text-align:center; 
`;

export const Buttons=styled.div`
display: flex;
flex-direction: ${isMobile?'column':'row'};
align-items: center;
justify-content:center;
padding: 0px;
gap: 20px;
position: absolute;
z-index:2;
width: 100%;
height: 20%;
top: ${isMobile?'78%':'75%'};
`

export const Button=styled.div`

box-sizing: border-box;
cursor:pointer;
font-family:DinRegular;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 16px;
white-space: nowrap;
gap: 10px;
font-weight:400;
font-size:1rem;
text-align:center;
width: ${isMobile?"90%":"20%"};
height: ${isMobile?"60px":"60px;"};
${isMobileOnly&&isLandScape?"width:200px":""};
background-color: ${(props) => props.$bg ||"transparent"};
color:${(props) => props.$color ||"black"};
border: 1px solid #000000;
min-width: 337px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
`
