import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../locales/en.json';
import ro from '../../locales/ro.json';
import ru from '../../locales/ru.json';

import {
    FALLBACK_LANGUAGE,
    SUPPORTED_LANGUAGES,
    getInitialLanguage,
    persistLanguage,
    applyDocumentLanguage,
} from './language.storage.js';

if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
        resources: {
            en: { translation: en },
            ro: { translation: ro },
            ru: { translation: ru },
        },
        lng: getInitialLanguage(),
        fallbackLng: FALLBACK_LANGUAGE,
        supportedLngs: SUPPORTED_LANGUAGES,
        interpolation: {
            escapeValue: false,
        },
        returnNull: false,
        react: {
            useSuspense: false,
        },
    });
}

i18n.on('languageChanged', (language) => {
    persistLanguage(language);
    applyDocumentLanguage(language);
});

applyDocumentLanguage(i18n.resolvedLanguage || i18n.language || FALLBACK_LANGUAGE);

export default i18n;