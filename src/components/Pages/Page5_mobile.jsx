// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import {
    Image,
    Center,
    MobileContainer,
    SlideIndicator
} from './styles/Page5.styled';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image_1 from './images/Gallery/1.jpg'
import Image_2 from './images/Gallery/2.jpg'
import Image_3 from './images/Gallery/3.jpg'
import Image_4 from './images/Gallery/4.jpg'
import { useAppProvider } from '../../contexts/App';
import { Swiper, SwiperSlide } from 'swiper/react';
import { isMobile } from '../Hooks/checkOrientation';

export const Page_5_mobile = () => {

    const { setPageTwoScrollScroll, } = useAppProvider()

    const page_5_container = useRef()

    const [lowLevelTrigger, setLowLevelTrigger] = useState(false)

    const myOffset=isMobile? ["end end", "start start"]:["start start", "end end"]

    const { scrollYProgress } = useScroll({
        target: page_5_container,
        offset: myOffset
    });


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        //console.log('Scroll Progress:', latest); 
       /* if (latest == 1 && lowLevelTrigger) {
            alert("state 1")
            setPageTwoScrollScroll(latest)
            setLowLevelTrigger(false)
        */
        /*if (latest < 0.2 && !lowLevelTrigger) {
            alert("state 2")
            setLowLevelTrigger(true)
            setPageTwoScrollScroll(latest)
        }*/

            
            setLowLevelTrigger(true)
            setPageTwoScrollScroll(latest)

    })


    const [currentSlide, setCurrentSlide] = useState(1);
    const swiperRef = useRef(null);


    return (
        <MobileContainer>
            <Center ref={page_5_container} >
                <Swiper style={{ position: 'relative' }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
                >
                    <SwiperSlide>
                        <Image src={Image_1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Image_2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Image_3} />
                    </SwiperSlide> 
                    <SwiperSlide>
                        <Image src={Image_4} />
                    </SwiperSlide>                
                </Swiper>
                <SlideIndicator>
                    {currentSlide}/{swiperRef.current?.slides?.length || 4} 
                </SlideIndicator>
            
            </Center>

        </MobileContainer>
    )

};


