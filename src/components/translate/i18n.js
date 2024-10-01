// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './langs/en.json';
import cnTranslations from './langs/cn.json';
import krTranslations from './langs/kr.json';
import jpTranslations from'./langs/jp.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  kr: {
    translation: krTranslations,
  },
  jp: {
    translation: jpTranslations,
  },
  cn: {
    translation: cnTranslations,
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('selectedLanguage') || 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      format: function (value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      },
    },
  });

export default i18n;
