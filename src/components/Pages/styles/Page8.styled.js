import { isMobile } from 'orientation-check';
import { isMobileOnly } from 'react-device-detect';
import styled from 'styled-components';
import { SwiperSlide } from "swiper/react";
import { isLandScape } from '../../Hooks/checkOrientation';



export const BlockContainer= styled.div`
position:absolute;
height:100vh;
width:100%;
user-select:none;
-webkit-user-drag:none;
user-drag: none;
pointer-events:none;
background:transparent;
`


export const GalleryContainer=styled.div`
border:solid 2px lightgray;
padding-bottom:2vh;
border-radius:5px;
background-color:white;
display:flex;
flex-direction:column;
position:fixed;
min-height: ${isMobile?"96vw":"470px;"}; 
width:${isMobile?"96vw":"22%"};
margin:${isMobile?"0vw 2vw 0vw 2vw":"0"};
height:fit-content;
pointer-events:all;
bottom:${(props) => props.$bottom || 0};
opacity:${(props) => props.$opacity || 1};
top:${(props) => props.$top || 'unset'};
left:${(props) => props.$left || 0};
min-width: 337px;
`

export const GalleryButton=styled.div
`display: flex;
flex-direction: row;
width:${(props) => props.$width || ""};
justify-content: center;
align-items: center;
margin:5% 2% 0% 2%;
font-family: 'DinRegular';
padding: 5%;
color:white;
background: #000000;
`

export const GalleryButtonWithIcon=styled.div
`display: flex;
flex-direction: column;
width:${(props) => props.$width || ""};
justify-content: center;
align-items: center;
color:black;
gap:10%;
margin:5% 2% 0% 2%;
padding: 1%;
background:white;
`

export const MobileButtonsContainer=styled.div`
border:solid 0px lightgray;
padding-bottom:2vh;
border-radius:5px;
background-color:transparent;
display:flex;
flex-direction:row;
position:fixed;
width:${isMobile?"96vw":"22%"};
margin:${isMobile?"0vw 2vw 0vw 2vw":"0"};
height:${isMobile?"auto":"60%"};
pointer-events:all;
opacity:${(props) => props.$opacity || 1};
top:${(props) => props.$top || 0};
left:${(props) => props.$left || 0};
`

export const GalleryImages = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  cursor: pointer;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  position: relative;
  transition: transform 0.25s;
`;


export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  // Style for the active slide
  &.swiper-slide-active ${Image} {
    transform: scale(1.1); // Scale up the active image
  }

  // Style for non-active slides
  &:not(.swiper-slide-active) ${Image} {
    transform: scale(0.75); // Scale down non-active images
    opacity: 0.8; // Optional: make non-active images slightly faded
  }
`;

export const Image_code = styled.img`
  width:50%;
  left:${(props) => props.$left || "0"};
  scale:${(props) => props.$scale || "1"};
  position:relative;
  margin:0 auto;
  transition:scale 0.5s ease-in-out,left 0.5s ease-in-out;
`;

export const GalleryNames=styled.div`
width:100%;
height:10%;
display:flex;
align-items:center;
font-size:90%;
font-family: 'DinRegular';
text-transform: uppercase;
padding:5%;
text-align:center;
justify-content:center;

`
export const GalleryDots=styled.div`
height:5%;
width:100%;
display:flex;
align-items:center;
justify-content:center;
${isMobileOnly&&isLandScape?"padding:10%":""}
`

export const GalleryDot=styled.div`
height: ${(props) => (props.$activeDot?"7px":"4px")};
width:${(props) => (props.$activeDot?"7px":"4px")};
margin:2px;
border-radius: 50%;
background-color: ${(props) => (props.$activeDot?"#000000":"#8B8B8B")};
position:relative;

`


export const GalleryCode=styled.div`
height:40%;
width:100%;
display:flex;
padding:5%;
align-items:center;
justify-content:center;

`

export const GalleryText=styled.div`
height:10%;
width:100%;
display:flex;
padding:0 5%;
align-items:center;
text-align:center;
justify-content:center;
font-family: 'DinPro-Regular';

`
export const Subtitle = styled.span`
  font-size:  clamp(1.56rem, 0.82vw + 1.04rem, 1.78rem);
  font-style: italic;
  color: #1c2541;
  margin-top: 30px;
`;

export const IntroButton=styled.p`
border-radius:3px;
font-size:1rem;
transform: translate(-50%, 0) !important;
top:${(props) => props.$top || 0};
left:${(props) => props.$left || 0};
position:fixed;
z-index: 10;
pointer-events: all;
`;

export const IntroTitle=styled.p`
transform: translate(-50%, 80px) !important;
top: 8vh;
left: 50%;
z-index: 2;
max-width: 200px;
width: 100%;
position: fixed;
text-align: center;
font-family: 'Times New Roman', Times, serif;
font-size: 24px;
line-height: 26.9px;
`;
