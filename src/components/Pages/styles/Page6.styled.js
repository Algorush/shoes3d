import styled from 'styled-components';
import { isMobile } from '../../Hooks/checkOrientation';

export const BlockContainer = styled.div`
position:relative;
display:flex;
height:100%;
width:100%;
justify-content:center;
margin:0 auto;
overflow:hidden;
color: #1D1D1B;
backfround: #e8e2d6;
`

export const TextContainer=styled.div`
position:fixed;
max-width:${isMobile?"50vw":"20vw"};
transition:opacity 0.5s,top 0.5s,left 0.5s;
opacity:${(props) => props.$opacity || 0};
top:${(props) => props.$top || 0};
left:${(props) => props.$left || 0};
`

export const Title = styled.div`
  font-size: clamp(1.5rem, 3.44vw + 0.21rem, 2.5rem);
`;

export const Subtitle = styled.span`
  font-size:  clamp(1.56rem, 0.82vw + 1.04rem, 1.78rem);
  font-style: italic;
  color: #1c2541;
  margin-top: 30px;
`;

export const Desc = styled.div`
  font-size: clamp(1.25rem, 0.32vw + 1.05rem, 1.33rem);
  color: #1D1D1B;
  margin-top: 30px;
  position: fixed;
`;

export const IntroButton=styled.p`
text-align:center;
`

export const TapContainer = styled.div`
  position: fixed;
  width: 96vw;
  margin: 0vw 2vw 0vw 2vw;
  height: auto;
  pointer-events: all;
  opacity: 1;
  top: 90vh;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const Center =styled.div`
z-Index:1;
position:absolute;
`

export const MobileContainer = styled.div`
  width:100%;
  height:150vh;
  position:relative;
  overflow:hidden;
  background-color:white;
  background-size: 300%;
  background-repeat: repeat-x;
  background-position: center;
  color: #1D1D1B;
  background-attachment: fixed;
  display: flex;
  justify-content:center;
  backfround: #e9e3d8;
  align-items:center;
`;
