// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import {
  Container,
  Left,
  Title,
  Desc
} from './styles/Page3.styled';
import {
  titleAnimation
} from './Animation/Animation';
import { motion } from 'framer-motion';
import useVisibilityAnimation from '../Hooks/useVisibilityAnimation';

export const Page_3 = () => {
  const { ref: titleRef, controls: titleControls } = useVisibilityAnimation();

  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 100, 
    },
    show: {
      opacity: 1,
      y: 0, 
      transition: {
        duration: 0.8,  
        ease: 'easeInOut', 
      },
    }
  };
  
  return (
    <Container 
    >
      <Left>
        <Title as={motion.div} ref={titleRef} initial="hidden" animate={titleControls} variants={fadeInUpAnimation}>
          <h1>NEW ARRIVAL</h1>         
          Valentino Garavani 9TO5 bag          
        </Title>
        <Desc as={motion.div} ref={titleRef} initial="hidden" animate={titleControls} variants={fadeInUpAnimation}>
        The quintessential representation of a universal language, the new 9TO5 bag can be worn all-day-round.
        </Desc> 
      </Left>
    </Container>
  );
};


