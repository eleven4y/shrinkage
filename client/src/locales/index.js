import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './en/translate.json';
import translationRu from './ru/translate.json';

const resources = {
  en: { translation: translationEn },
  ru: { translation: translationRu },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
  });

export default i18next;