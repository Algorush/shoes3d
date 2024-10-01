import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useTranslation } from 'react-i18next';
import logo from '../images/logo.svg';
import styles from './Header.module.css';
import { FaAngleDown } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
// Set the app element to handle accessibility (this attaches the modal to a specific DOM node)
ReactModal.setAppElement('#root');

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  //const {scrollYProgress}=useScroll()
  const { scrollY } = useScroll();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //const opacity = useTransform(scrollYProgress, [1, 1], [0, 1]);
  const opacity = useTransform(scrollY, [500, 600], [0, 1]);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('selectedLanguage', language);
    closeModal(); // Optionally close the modal after selecting a language
  };

  return (
    <div>
      <header className={styles.header}>
      <motion.a 
          href="/" 
          className={styles.logo}
          style={{ opacity,left:'50%',transform:'translate(-50%,0)',position:'relative' }}
          /*onClick={(e) => {
            e.preventDefault(); 
            window.scrollTo({
              top: 0, 
              behavior: 'smooth' 
            });
          }}*/
        >
           <img src={logo} alt="Logo" />
        </motion.a>
       {/*  <button className={styles.openModalButton} onClick={openModal}>
          <FaAngleDown style={{width:"30px",height:"20px"}}/> {currentLanguage}
        </button>*/}
      </header>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <button className={styles.closeButton} onClick={closeModal}>
          &times;
        </button>
        <h2>{t('SELECT_LANGUAGE_MODAL_TITLE')}</h2>
        <div className={styles.languageOptions}>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('kr')}>Korean</button>
          <button onClick={() => changeLanguage('jp')}>Japanese</button>
          <button onClick={() => changeLanguage('cn')}>Chinese</button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Header;
