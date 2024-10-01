// @ts-nocheck
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { fadeInAnimation } from './Animation/Animation';
import {
  BlockContainer,
  Center,
  Image,
  Title,
  ScrollingContainer,
  ScrollingText,
  scrollAnimation,
  OverflowWrapper
} from './styles/Page7.styled';
import Page_7_img from './images/page7.jpg'
import useVisibilityAnimation from '../Hooks/useVisibilityAnimation';
import { useAppProvider } from '../../contexts/App';
import { isMobile } from 'orientation-check';

export const Page_7 = () => {
  const { setPageThreeScrollProgress, canvas } = useAppProvider()

  const page_7_container = useRef()
  const { ref: titleRef, controls: titleControls } = useVisibilityAnimation();
  const [lowLevelTrigger, setLowLevelTrigger] = useState(false)

  const { scrollYProgress } = useScroll({
    target: page_7_container,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stickyTextElement = document.querySelector('.sticky-text');
    const stickyTapElement = document.querySelector('.tap-explore');

    if (latest > 0.1) {
      if (stickyTextElement) {
        stickyTextElement.style.visibility = 'visible';
      }
      if (stickyTapElement) {
        stickyTapElement.style.visibility = 'visible';
      }
      
      if (lowLevelTrigger) {
        setPageThreeScrollProgress(latest)
        setLowLevelTrigger(false)
        canvas.style.left = "0"

      }
    }
    if (latest < 0.5) {
      if (stickyTextElement) {
        stickyTextElement.style.visibility = 'hidden';
      }
      if (stickyTapElement) {
        stickyTapElement.style.visibility = 'hidden';
      }
      if (!lowLevelTrigger) {
        setLowLevelTrigger(true)
        setPageThreeScrollProgress(latest)
        if (!isMobile) {
        canvas.style.left = "20vw"}
      }
    }

  })


  return (
    <BlockContainer>

      <Center ref={page_7_container} $top='62.5vh' $width='100%'>

        <ScrollingContainer as={motion.div}
          ref={titleRef} initial="hidden" animate={titleControls} variants={fadeInAnimation}>

          <ScrollingText {...scrollAnimation}>
            <Title>
              ALL - DAY - ROUND - ALL - DAY - ROUND - ALL - DAY - ROUND -
            </Title>
          </ScrollingText>
          <ScrollingText {...scrollAnimation}>
            <Title>
              ALL - DAY - ROUND - ALL - DAY - ROUND - ALL - DAY - ROUND -
            </Title>
          </ScrollingText>
        </ScrollingContainer>

      </Center>
      <OverflowWrapper>
        <div style={{height:'100vh',display:'flex',alignItems:'center'}}>
        <Image src={Page_7_img} />
        </div>
      </OverflowWrapper>
    </BlockContainer>
  );
};


