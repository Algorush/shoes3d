import {
  Container,
  Image,
  Center,
  Title,
} from './styles/Page1.styled';
import Loader from '../Three/Loader';
import Logo_Intro_Text from './images/logo_text.svg';
import { motion } from 'framer-motion';
import { homePageContent } from './Animation/Animation';
import { useAppProvider } from '../../contexts/App';
import useVisibilityAnimation from '../Hooks/useVisibilityAnimation';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Image_1 from './images/Gallery/1.jpg';

export const Page_1 = () => {
  const { t } = useTranslation();
  const { firstLoad, setFirstLoad, intro } = useAppProvider();
  const { ref: titleRef, controls: titleControls } = useVisibilityAnimation();
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    if (intro) { 
      const img = document.createElement('img');
      img.src = Image_1;
    }
  }, [intro]);
 
  /* Adobe analytics */
  useEffect(() => {
    window.tc_vars = {
      'country_code': 'it',
      'page_template':'V:9to5experience:homepage',
      'page_type': 'homepage',
      'site_language_code':'en',
      'pagename': 'V:it:9to5experience:homepage',
      'product_variant': 'beige',
      '404':false
    };

    window._satellite.track("virtual_page_view" , tc_vars);
    console.log("tc_vars", window.tc_vars);
    console.log("virtual_page_view", "activated");
       
  }, []);

  return (
    <>
      {/*{isLoading && <Loader onLoadingComplete={handleLoadingComplete} />} 
      {!isLoading && (*/}
        <Container id='home'>
          <Center $top='20vh' $width='100%' as={motion.div}
            ref={titleRef} initial="hidden" animate="show" variants={homePageContent}>
            <Image src={Logo_Intro_Text} as={motion.img} initial="hidden" animate="show" variants={homePageContent} onAnimationComplete={() => {
              setFirstLoad(true)
            }} />
            <Title>
              <p className='HomeTitle'>{t('INTRO_TEXT')}</p>
            </Title>
          </Center>
        </Container>
      {/*)}*/}
    </>
  );
};
