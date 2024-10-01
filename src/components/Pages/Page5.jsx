// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import {
    GridContainer,
    Left,
    Right,
    Image,
} from './styles/Page5.styled';
import {
    slideRightAnimation,
    slideLeftAnimation,
    contactAnimation
} from './Animation/Animation';
import { motion, useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';
import Image_1 from './images/Gallery/1.jpg'
import Image_2 from './images/Gallery/2.jpg'
import Image_3 from './images/Gallery/3.jpg'
import Image_4 from './images/Gallery/4.jpg'
import useVisibilityAnimation from '../Hooks/useVisibilityAnimation';
import { useAppProvider } from '../../contexts/App';


export const Page_5 = () => {

    const { setPageTwoScrollScroll} = useAppProvider()

    const { ref: image_1_Ref, controls: image_1_Controls } = useVisibilityAnimation();
    const { ref: image_2_Ref, controls: image_2_Controls } = useVisibilityAnimation();
    const { ref: image_3_Ref, controls: image_3_Controls } = useVisibilityAnimation();
    const { ref: image_4_Ref, controls: image_4_Controls } = useVisibilityAnimation();

    const page_5_container = useRef()

    const [lowLevelTrigger, setLowLevelTrigger] = useState(false)
    
    const { scrollYProgress } = useScroll({
        target: page_5_container,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
       
        if (latest == 1 && lowLevelTrigger) {
            setPageTwoScrollScroll(latest)
            setLowLevelTrigger(false)
        }
        if (latest < 0.2 && !lowLevelTrigger) {
            setLowLevelTrigger(true)
            setPageTwoScrollScroll(latest)
        }
    });

    /* Adobe analytics */

    return (
        <GridContainer
            ref={page_5_container}
        >
            <Left>       
            </Left>
            <Right>
                {<Image src={Image_1} as={motion.img} ref={image_1_Ref} initial="hidden" animate={image_1_Controls} variants={contactAnimation} />}           
            </Right>
            <Right style={{ transform: 'translateY(-500px)' }}>
                {<Image src={Image_2} as={motion.img} ref={image_2_Ref} initial="hidden" animate={image_2_Controls} variants={contactAnimation} />}
            </Right>
            <Left style={{ marginTop: "0vh" }}>
                {<Image src={Image_3} as={motion.img} ref={image_3_Ref} initial="hidden" animate={image_3_Controls} variants={contactAnimation} />}            
            </Left>       
            <Right style={{ transform: 'translateY(-500px)' }}>         
                {<Image src={Image_4} as={motion.img} ref={image_4_Ref} initial="hidden" animate={image_4_Controls} variants={contactAnimation} />} 
            </Right>
        </GridContainer>


    );
};


