import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import bgImage from "../images/page_5_bg.svg"
import { isLandScape } from '../../Hooks/checkOrientation';

export const MobileContainer = styled.div`
  width:100%;
  height:150vh;
  position:relative;
  overflow:hidden;
  // background-image:url(${bgImage});
  background-color:white;
  background-size: 300%;
  background-repeat: repeat-x;
  background-position: center;
  color: #1D1D1B;
  background-attachment: fixed;
  display: flex;
  justify-content:center;
  align-items:center;
`;


export const GridContainer = styled.div`
  display: grid;
  position:relative;
  overflow:hidden;
  width:100vw;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr 1fr;
  // background-image:url(${bgImage});
  background-color:white;
`;

export const Center =styled.div`
z-Index:1;
position:absolute;
`

export const Container = styled.div`
  display: flex;
  width:100vw;
  position:absolute;
  transform:translateY('-200px')

  @media only screen and (min-width: 768px) {
    /* padding: 100px 0; */
   
  }

`;

export const SlideIndicator = styled.div`
  font-family: 'DinRegular';
  text-align: center;
  margin-top: 7vh;
  font-size: 18px;
  color: #333;
  letter-spacing: 6px;
  font-size: 12px;
  color: #000;
`;

export const SlideText = styled.div`
  text-align: left;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top: 10vh;
  color: #333;
`;

export const Left = styled.div`

  width: 100%;
  position:relative;

`;

export const Image = styled.img`
  width: ${isMobile&&isLandScape?"25%":"100%"};
  height: auto;
  position:relative;
  ${isMobile&&isLandScape?"transform:translate(50%,0);left:25%":""};
  padding:${isMobile?0:" 50px 10px"};
`;

export const Right = styled.div`
width: 100%;
margin: auto;
position:relative; 
`;

export const Title = styled.span`
  font-size: 34px;
  line-height: 1.2;
  >p {
    font-size:34px;
    padding:20px 0 20px 0;
  }
`;

export const Subtitle = styled.span`
  font-size:  clamp(1.56rem, 0.82vw + 1.04rem, 1.78rem);
  font-style: italic;
  color: #1c2541;
  margin-top: 30px;
`;

export const Desc = styled.p`


font-family:DinRegular;
  font-size: ${isMobile?"12px":"16px"};
  color: #1D1D1B;
  margin-top: 30px;
`;
