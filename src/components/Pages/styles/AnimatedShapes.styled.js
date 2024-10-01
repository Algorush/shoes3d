import styled from 'styled-components'

export const Square = styled.div`
width: 60px;
height: 60px;
background-color: #4e6bff;
opacity: 0.7;
position:relative;
z-index: -2;

animation: square 25s linear alternate infinite;
@keyframes square {
    to {
        transform: translate(100vw, 100vh);
    }
}
`


export const Circle = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #ff97af ;
position:relative;
z-index: -2;

animation: circle 25s linear alternate infinite;
@keyframes circle {
    to {
        transform: translate(100vw, -100vh);
    }
}
`

export const Rect = styled.div`
width: 50px;
height: 100px;
background-color: #669966 ;
opacity: 0.5;
position:relative;
z-index: -2;

animation: rect 25s linear alternate infinite;
@keyframes rect {
    to {
        transform: translate(100vw, -50vh);
    }
}
`

export const ShapesContainer=styled.div`
position:absolute;
height:100%;
width:100%;
overflow:hidden;
z-Index:-10;
`