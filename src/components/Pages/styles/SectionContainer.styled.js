import styled from "styled-components";
const defaults={
    top:'0',
    height:'100vh'
  };
  
export const SectionContainer = styled.div`
height: ${(props) => props.$height || defaults.height};
position:relative;
display:flex;
align-items:center;
padding-bottom: env(safe-area-inset-bottom);
padding-top:env(safe-area-inset-top);
justify-content: center;
width:100vw;
z-Index:2;
top: ${(props) => props.$top || defaults.top};
`