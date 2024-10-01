// @ts-nocheck
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { slideRightAnimation, titleAnimation } from './Animation/Animation';
import {
    BlockContainer,
    GalleryContainer,
    GalleryCode,
    GalleryImages,
    GalleryNames,
    GalleryDots,
    GalleryText,
    Image,
    Image_code,
    GalleryDot,
    StyledSwiperSlide,
    IntroButton
} from './styles/Page8.styled';
import selection_1 from "./images/Page_8/selection_1.png"
import selection_2 from './images/Page_8/selection_2.png'
import selection_3 from './images/Page_8/selection_3.png'
import scrollDown from './images/Page_8/Scrolldown.png'
import qrcode from './images/Page_8/Canvas.png'
import qrcode_2 from './images/Page_8/GoldenCuir.png'
import qrcode_3 from './images/Page_8/Black.png'
import useVisibilityAnimation from '../Hooks/useVisibilityAnimation';
import { useAppProvider } from '../../contexts/App';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { isMobile } from 'orientation-check';
import { isMobileOnly } from 'react-device-detect';

export const Page_8 = () => {

    const visibility = isMobile ? 0.3 : 0.65
 
    const { ref: galleryRef, controls: galleryControls } = useVisibilityAnimation(visibility);

    const { setShoeColor } = useAppProvider()

    const [currentSlide, setCurrentSlide] = useState(1);
    const [activeIndex, setActiveIndex] = useState(currentSlide);

    const swiperRef = useRef(null);

    const scrollDownButton = () => {
        window.scrollTo({
            top: document.body.scrollHeight - 0,
            behavior: 'smooth'
        });
    };
    
    const getDesc = () => {
      const names = {
        1:"CANVAS",
        2:"GOLDEN CUIR",
        3:"BLACK"
      }
      return names[currentSlide]
    } 
    
    /*
    const handleSlideChange = () => {
        if (swiperRef.current) {
            const swiper = swiperRef.current;
            const nextIndex = (swiper.activeIndex + 1) % swiper.slides.length;
            swiper.slideTo(nextIndex);
        }
    };
    */

    const getQR = () => {
        let codeArr = [qrcode, qrcode_2, qrcode_3]
        return codeArr[currentSlide - 1]
    }

    useEffect(() => {
        setActiveIndex(currentSlide - 1);
        setShoeColor(currentSlide)
    }, [currentSlide]);

    return (
        <BlockContainer ref={galleryRef}
        >
            <GalleryContainer $top='20%' $left="15%" as={motion.div} initial="hidden" animate={galleryControls} variants={slideRightAnimation}>
                <GalleryImages>
                <Swiper
                    modules={[Mousewheel]}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slideActiveClass="swiper-slide-active"
                    mousewheel={{
                        forceToAxis: true, 
                        releaseOnEdges: true, 
                        sensitivity: 10,  
                    }}
                >
                    <StyledSwiperSlide onClick={() => swiperRef.current.slideTo(0)}>
                        <Image src={selection_1} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide onClick={() => swiperRef.current.slideTo(1)}>
                        <Image src={selection_2} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide onClick={() => swiperRef.current.slideTo(2)}>
                        <Image src={selection_3} />
                    </StyledSwiperSlide>
                </Swiper>

                </GalleryImages>
                <GalleryNames>{getDesc()}</GalleryNames>
                <GalleryDots>
                    {[0, 1, 2].map((dotIndex) => (
                        <GalleryDot
                            key={dotIndex}
                            $activeDot={activeIndex === dotIndex}
                            onClick={() => {
                                swiperRef.current.slideTo(dotIndex); // Переключение на нужный слайд
                                setCurrentSlide(dotIndex + 1);  // Обновление текущего слайда
                            }}
                            style={{ cursor: 'pointer' }}  // Добавляем стили для указателя
                        />
                    ))}
                </GalleryDots>
                {!isMobileOnly && <GalleryCode>
                    <Image_code src={getQR()} $scale="0.9"
                    />
                </GalleryCode>}
                {!isMobileOnly && <GalleryText>Scan the QR with your phone<br />
                    to try them on</GalleryText>}

            </GalleryContainer>
        </BlockContainer>
    );
};

