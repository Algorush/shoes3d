import styled from 'styled-components';
import { isMobile } from '../../Hooks/checkOrientation';

export const Container = styled.div`
  display: flex;
  color: #1D1D1B;
  position:relative;
  width:100vw;
  height:100vh;
  ${isMobile?"justify-content:center;":""}

`;

export const Left = styled.div`
  height:100vh;
  width: ${isMobile?"80%":"35%"};
  position:relative;
  left:${isMobile?"0":"10vw"};
  bottom:${isMobile?"20vh":"30vh"};
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
`;

export const Title = styled.span`
  font-size: ${isMobile?"28px":"30px"};
  line-height: 1.2;
  max-width:${isMobile?"280px":"unset"};
  > h1 {
    font-size: ${isMobile?"16px":"12px"};
    margin-bottom:5%;
    font-family:'DinRegular';
    font-weight:800;
  }
`;

export const Subtitle = styled.span`
  font-size:  clamp(1.56rem, 0.82vw + 1.04rem, 1.78rem);
  font-style: italic;
  color: #1c2541;
  margin-top: 30px;
`;

export const Desc = styled.p`
font-size: ${isMobile?"16px":"16px"};
width: ${isMobile?"100%":"85%"};
color: #1D1D1B;
margin-top: 24px;
max-width: ${isMobile?"275px":"auto"}; ;
`;


