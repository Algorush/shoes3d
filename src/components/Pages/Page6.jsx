// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import {
    BlockContainer,
    TextContainer,
    Title,
    Subtitle,
    Desc,
    IntroButton,
    TapContainer
} from './styles/Page6.styled';

import { motion } from 'framer-motion';
import { useAppProvider } from '../../contexts/App';
import tapHotspot from './images/Page_8/tapHotspot.png'
import { imageScaleAnimation, slideLeftAnimation, slideRightAnimation, fadeUpAnimation } from './Animation/Animation';
import { isMobile } from 'orientation-check';
import useVisibilityAnimation from '../Hooks/useVisibilityAnimation';

function TextInstances({ marker }) {
    const { ref: image_1_Ref, controls: image_1_Controls } = useVisibilityAnimation();
    function getTitle() {
        if (marker.name == "logo") {
            return `V Logo`
        }
        if (marker.name == "tongue") {
            return `shoulder strap`
        }
        if (marker.name == "sole") {
            return `Ultralight rubber sole customized`
        }
        if (marker.name == "heel") {
            return `Reinforced heel `
        }
        return ""
    }

    function getSubtitle() {
        if (marker.name == "logo") {
            return `Antique brass`
        }
        if (marker.name == "tongue") {
            return `Adjustable leather`
        }
        if (marker.name == "sole") {
            return `with Valentino Garavani logo`
        }
        if (marker.name == "heel") {
            return `and fabric pull-tab, on rear`
        }
        return (<IntroButton></IntroButton>, 
            <TapContainer>
                <img className='tap-explore' width="176" src={tapHotspot} alt="Tap on a hotspot to explore" />
            </TapContainer>
        )
    }

    return (
        <>
            <Title>
                {getTitle()}
            </Title>
            <Desc>
                {getSubtitle()}
            </Desc>
        </>
    );
}

export const Page_6 = () => {

    const { pageTwoScrollProgress, pageThreeScrollProgress, canvas } = useAppProvider()

    const { activeMarker } = useAppProvider()

    const [top, setTop] = useState("85vh")

    const [left, setLeft] = useState("45vw")

    const [opacity, setOpacity] = useState(0)

    const page_6_container = useRef()

    useEffect(() => {
        setOpacity(0)

        if (activeMarker.name == "logo") { setTop('70vh'); setLeft('10vh') }

        if (activeMarker.name == "heel") {
            if (isMobile) { setTop('20vh'); setLeft('5vh'); return }
            setTop('30vh'); setLeft('30vh')
        }

        if (activeMarker.name == "tongue") {
            if (isMobile) { setTop('85vh'); setLeft('5vh'); return }
            setTop('20vh'); setLeft('30vh')
        }

        if (activeMarker.name == "sole") {
            if (isMobile) { setTop('70vh'); setLeft('20vw'); return }
            setTop('30vh'); setLeft('30vh')
        }



    }, [activeMarker])

    useEffect(() => {
        if (!activeMarker.name || !page_6_container.current) return;  // check Ref
    
        let height = page_6_container.current.getBoundingClientRect().top + window.scrollY;
        
        if (!height || height === 0) return;
    
        window.scrollTo({ behavior: 'smooth', top: height });
    }, [activeMarker]);

    if (pageTwoScrollProgress > 0.8 && pageThreeScrollProgress > 0.3) {
        return (
            <BlockContainer ref={page_6_container}>
                <TextContainer $opacity={opacity} $top={top} $left={left} as={motion.div} initial="hidden" animate="show" variants={imageScaleAnimation}>
                    <TextInstances marker={activeMarker} />
                </TextContainer>
            </BlockContainer>
        );
    }
}

