
import React, { useEffect, useState } from 'react';

import styles from './footer.module.css'
import CookiesEn from './cookies/cookiesEn';
import CookiesJp from './cookies/cookiesJp';
import CookiesKr from './cookies/cookiesKr';
import CookiesCn from './cookies/cookiesCn';
import { useTranslation } from 'react-i18next';
import ReactModal from 'react-modal';
import { isMobile } from 'orientation-check';

export const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        // Disable body scroll when modal is open
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Clean up to restore scroll on unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    return (
        <div className={styles.buttonWrapper}>
            <button onClick={openModal}>
                <p style={{
                    position: isMobile ? 'relative' : 'static',
                    top: isMobile ? '-8px' : '0',
                    fontFamily: "DinPro-Medium, sans-serif",
                    fontSize: '12px',
                    color: '#404042',
                    textDecoration: 'underline'
                }}
                >
                    Cookie policy
                </p>
            </button>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className={`${styles.modalContent} ${styles.policyText}`}
                overlayClassName={styles.modalOverlay}
            >

                <button className={styles.closeButton} onClick={closeModal}>
                    &times;
                </button>
                <div className={styles.modal} id="cookie" aria-hidden="true">
                <div className={styles.modalPage}>
                <h2>{t('COOKIE_POLICY_LABEL')}</h2>
                {currentLanguage === 'en' && <div><CookiesEn/></div>}
                {currentLanguage === 'cn' && <div><CookiesCn/></div>}
                {currentLanguage === 'jp' && <div><CookiesJp/></div>}
                {currentLanguage === 'kr' && <div><CookiesKr/></div>}
                </div>
            </div>
            </ReactModal>
        </div>

    );
};


