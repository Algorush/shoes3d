import styled from 'styled-components';
import { isMobile } from '../../Hooks/checkOrientation';
isMobile

export const Container = styled.div`
  color: #1D1D1B;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position:relative;
  overflow:hidden;
`;

export const Left = styled.div`

  width: 100%;


  @media only screen and (min-width: 1025px) {
    width: 50%;
    margin-top: 70px;
  }

`;

const defaults={
  top:'1vh',
  width:'100px'
};

export const CenterImg =styled.div`
width:${(props) => props.$width || defaults.width};
height:auto;
margin:0 auto;
left: 50%; 
transform: translate(-50%, -50%);
position:absolute;
top: ${(props) => props.$top || defaults.top};
`

export const Center =styled.div`

width:${(props) => props.$width || defaults.width};
height:auto;
margin:0 auto;
display:flex;
flex-direction:column;

align-items:center;
position:absolute;
gap:10vh;
top: ${(props) => props.$top || defaults.top};
`

export const Title = styled.h1`
  font-weight:700;
  font-size:${isMobile?"42px":"42px"};
  text-align:center; 
  color: #404042;

`;

export const Desc = styled.p`

  font-size: clamp(1.25rem, 0.32vw + 1.05rem, 1.33rem);
 
 
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
 
  align-items: flex-start;

`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    margin-top: 30px;
  }

  @media only screen and (max-width: 1280px) {
    margin-top: 35px;
  }
`;

export const Phone = styled.span`
  color: #f0667d;
  font-weight: 700;
`;

export const ContactText = styled.span`
  color: gray;
  margin-top: 10px;
`;

export const Right = styled.div`

  position: relative;

  display: none;

  @media only screen and (min-width: 1025px) {
    display: block;
    width: 50%;
  }
`;

export const Image = styled.img`
  width: 125px;
  object-fit: cover;
`;
