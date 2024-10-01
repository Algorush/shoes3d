import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React from 'react';
import { imageScaleAnimation } from './Animation/Animation';
import {
    BlockContainer,
    Center,
    Image,
    Title,
    Buttons,
    Button,
    OverflowWrapper,
    ImageWrapper,
    IntroImage
} from './styles/Page9.styled';
import Page_9_img from './images/page9_bag.png'
import useVisibilityAnimation from '../Hooks/useVisibilityAnimation';
import Logo_Intro_Text from './images/logo_text.svg'

export const Page_9 = () => { 
    const { ref: imgRef, controls: imgControls } = useVisibilityAnimation();

    return (
   
            <BlockContainer>
                    <Center $top='15vh' $width="100%"
                >
                    {/* <Title>             
                    <p style={{fontSize:"1.5rem" }}>VALENTINO</p>
                    <p style={{fontFamily: 'DinRegular',fontSize:"0.9rem"}}>GARAVANI</p>
                    </Title> */}
                <IntroImage src={Logo_Intro_Text} as={motion.img} initial="hidden" animate="show" variants={imageScaleAnimation}/>
                </Center>
                <Center $top='25vh' $width="100%"
                >
                    <Title>             
                        <p>9TO5 BAG</p>
                    </Title>
                </Center>
             
                <Buttons>                              
                    <Button onClick={() => { 
                            window.open('https://myvexperience.valentino.com/');
                            
                            /* Adobe analytics */
                            window._satellite.track('univ_int', {
                                'event': 'cta_click',
                                'event_category': 'find_your_store'
                               });
                            console.log("CTA track activated", "try_it_on");
                        }} 
                        $bg='black' 
                        $color='white'>FIND YOUR STORE</Button>
                </Buttons>

                <OverflowWrapper>
            
        <ImageWrapper>
                    <Image src={Page_9_img} as={motion.img} ref={imgRef} initial="hidden" animate={imgControls} variants={imageScaleAnimation} />
                    </ImageWrapper>
                </OverflowWrapper>       

            </BlockContainer>       


    );
};


