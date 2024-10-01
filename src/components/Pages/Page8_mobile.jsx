
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { titleAnimation } from './Animation/Animation';
import {
    BlockContainer,
    GalleryContainer,
    GalleryImages,
    GalleryNames,
    GalleryDots,
    Image,
    GalleryDot,
    StyledSwiperSlide,
    GalleryButton,
    MobileButtonsContainer,
    GalleryButtonWithIcon,
    IntroButton,
    IntroTitle
} from './styles/Page8.styled';
import selection_1 from "./images/Page_8/selection_1.png"
import selection_2 from './images/Page_8/selection_2.png'
import selection_3 from './images/Page_8/selection_3.png'
import scrollDown from './images/Page_8/Scrolldown.png'
import tryIcon from './images/Page_8/tryicon.svg'
import closeIconModal from './images/Page_8/tryicon.svg'
import useVisibilityAnimation from '../Hooks/useVisibilityAnimation';
import { useAppProvider } from '../../contexts/App';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { isMobile } from 'orientation-check';
import { VscSymbolColor } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";
import ReactModal from 'react-modal';
import styles from './page8.module.css';

export const Page_8_mobile = () => {
    const { setShoeColor } = useAppProvider()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [iframeSrc, setIframeSrc] = useState('');

    const [currentSlide, setCurrentSlide] = useState(1);
    const [activeIndex, setActiveIndex] = useState(currentSlide);

    const scrollDownButton = () => {
        window.scrollTo({
            top: document.body.scrollHeight - 0,
            behavior: 'smooth'
        });
    }

    const openModal = () => {
        // Use the current slide from the state
        const selectedModelId = modelIds[currentSlide] || modelIds[1];  // Default to Canvas model if not found
        const allModelIds = Object.values(modelIds).join(','); 
        // Debugging message to check the current slide and selected model ID
        console.log("Current Slide:", currentSlide);  // Output the current slide
        console.log("Selected Model ID:", selectedModelId);  // Output the corresponding model ID
    
        // Build the iframe URL with the selected model ID
        const iframeUrl = `https://valentino-garavani-9to5.ar.wanna.fashion/?modelid=${allModelIds}&startwithid=${selectedModelId}`;
        // Another debug message to verify the URL
        console.log("iframeUrl:", iframeUrl);
    
        // Open the URL in a new tab or window
        window.open(iframeUrl, '_blank');  // '_blank' opens in a new tab
        setIframeSrc(iframeUrl);  // Update the iframeSrc state with the new URL
        // Optionally open the modal
        // setIsModalOpen(true); // Open the modal if needed

        /* Adobe analytics */
        window._satellite.track('univ_int', {
            'event': 'cta_click',
            'event_category': 'try_it_on'
        });
        console.log("marker track activated", "try_it_on");
    };
    
    
    
    // Object containing model IDs for each slide
    const modelIds = {
        1: "6W2B0R15CJPREK", // Canvas (first)
        2: "6W2B0R15UHFWU4", // Golden Cuir (middle)
        3: "6W2B0R15UHF0NO"  // Black
    };
    
    // Function to return the description of the current slide
    const getDesc = () => {
        const names = {
            1: "CANVAS",
            2: "GOLDEN CUIR",
            3: "BLACK"
        };
        return names[currentSlide];
    };
    

    const closeModal = () => setIsModalOpen(false);

    const visibility = isMobile ? 0.3 : 0.65

    const { ref: galleryRef, controls: galleryControls } = useVisibilityAnimation(visibility);


    const { ref: introButtonRef, controls: introButtonControls } = useVisibilityAnimation(0.3);


    const swiperRef = useRef(null);

    const MobileGalleryRef = useRef(null)

    const MobileButtonsRef = useRef(null)


    const selectImage = () => {       
        MobileGalleryRef.current.style.display = "none";
        MobileButtonsRef.current.style.display = 'flex';
        setShoeColor(currentSlide);
        localStorage.setItem('currentSlide', currentSlide);
    
        let eventLabel = '';
    
        switch (currentSlide) {
            case 1:
                eventLabel = 'canvas';
                break;
            case 2:
                eventLabel = 'golden_cuir';
                break;
            case 3:
                eventLabel = 'black';
                break;
            default:
                eventLabel = ''; 
        }
    
        /* Adobe analytics */
        window._satellite.track('univ_int', {
            'event': 'cta_click',
            'event_category': 'let_me_see_this',
            'event_label': eventLabel
        });
    
        console.log("event_label track activated", eventLabel);
    };
    

    /*
    const handleSlideChange = () => {
        if (swiperRef.current) {
            const swiper = swiperRef.current;
            const nextIndex = (swiper.activeIndex + 1) % swiper.slides.length;
            swiper.slideTo(nextIndex);
        }
    };
    */

    useEffect(() => {
        setActiveIndex(currentSlide - 1);
        setShoeColor(currentSlide)
    }, [currentSlide]);

    useEffect(() => {
        MobileGalleryRef.current.style.display = "none"
    }, [])

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    return (
        <BlockContainer ref={galleryRef}>

            <IntroButton onClick={scrollDownButton} $top='10vh' $left="50%" ref={introButtonRef} as={motion.div} initial="hidden" animate={galleryControls} variants={titleAnimation}><img src={scrollDown} width="162" alt="Scroll down" /></IntroButton>
            
            <IntroTitle $top='10vh' $left="50%" ref={introButtonRef} as={motion.div} initial="hidden" animate={galleryControls} variants={titleAnimation}>
                Explore all colors and try it on
            </IntroTitle>

            <MobileButtonsContainer ref={MobileButtonsRef} $top='85%' $left="0" as={motion.div} initial="hidden" animate={galleryControls} variants={titleAnimation} onAnimationComplete={() => {
                MobileGalleryRef.current.style.display = "none"
            }}>
            <GalleryButtonWithIcon style={{ backgroundColor: 'white', color: 'black' }}
                $width="20%"
                onClick={() => {
                    // Show the gallery with a slide-up effect
                    MobileGalleryRef.current.style.display = "flex";  // Make gallery visible
                    MobileGalleryRef.current.style.transform = "translateY(100%)";  // Start from below (hidden)
                    MobileGalleryRef.current.style.transition = "transform 0.5s ease";  // Smooth slide-up animation

                    setTimeout(() => {
                        MobileGalleryRef.current.style.transform = "translateY(0)";  // Slide to the visible position
                    }, 10);  // Small delay to ensure the transition applies

                    // Hide the buttons
                    setTimeout(() => {
                        MobileButtonsRef.current.style.display = 'none';  // Hide buttons after animation
                    }, 500);  // Delay equal to the transition duration (0.5s)

                    /* Adobe analytics */
                    window._satellite.track('univ_int', {
                        'event': 'cta_click',
                        'event_category': 'change_color'
                        });
                    console.log("marker track activated", "change-color");
                }}>
                <VscSymbolColor size={22} style={{
                    transform: 'scaleX(-1)'
                }} />
                <p style={{ fontSize: '0.75rem', fontWeight: '600', fontFamily: 'DinRegular' }}>COLORS</p>
            </GalleryButtonWithIcon>    


                <GalleryButton onClick={openModal} $width="75%">
                <img style={{paddingRight:"10px"}} src={tryIcon} alt="Try it on" /> TRY IT ON
                </GalleryButton>
            </MobileButtonsContainer>

            <GalleryContainer ref={MobileGalleryRef} $bottom='1vh' $left="0">
    <div style={{ width: '100%' }} >
        <IoCloseOutline onClick={() => {
            // Start slide-down effect for closing the gallery
            MobileGalleryRef.current.style.transform = "translateY(100%)";  // Slide down (off-screen)
            MobileGalleryRef.current.style.transition = "transform 0.5s ease";  // Smooth slide-down animation

            // After the animation completes, hide the gallery with display: none
            setTimeout(() => {
                MobileGalleryRef.current.style.display = "none";  // Hide the gallery after animation completes
                MobileButtonsRef.current.style.display = 'flex';  // Show buttons after the gallery is closed
            }, 500);  // Delay equal to the transition duration (0.5s)
        }} style={{ float: 'right', margin: '3%' }} size={20} />
    </div>

    <div style={{ textAlign: 'center', fontFamily: 'DinRegular' }}>Choose your preferred color</div>
    <GalleryImages>

        <Swiper centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={10}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slideActiveClass="swiper-slide-active">
            <StyledSwiperSlide>
                <Image src={selection_1} />
            </StyledSwiperSlide>
            <StyledSwiperSlide>
                <Image src={selection_2} />
            </StyledSwiperSlide>
            <StyledSwiperSlide>
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
            />
        ))}
    </GalleryDots>
    <GalleryButton onClick={() => selectImage()}>LET ME SEE THIS</GalleryButton>
</GalleryContainer>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                className={styles.modalContent}
                overlayClassName={styles.modalOverlay}
            >

                    <IoCloseOutline onClick={() => {
                        closeModal();
                    }} style={{ 
                        float: 'right', 
                        position: 'absolute',
                        top: '-30px',
                        right: '0',
                        color: '#FFF',
                        transform: 'scale(1.5)',
                        }} size={20} />


                  <iframe
                    src={iframeSrc}
                    title="Valentino Garavani AR"
                    width="100%"
                    height="100%"
                    allow="camera; microphone; gyroscope; accelerometer; web-share;" 
                    style={{ border: 'none' }}
                />

            </ReactModal>
        </BlockContainer>
    );


};

