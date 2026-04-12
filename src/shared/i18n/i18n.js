import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../locales/en.json';
import ro from '../../locales/ro.json';
import ru from '../../locales/ru.json';

const STORAGE_KEY = 'za_language';
const FALLBACK_LANGUAGE = 'en';
const SUPPORTED_LANGUAGES = ['en', 'ro', 'ru'];

const getInitialLanguage = () => {
    if (typeof window === 'undefined') {
        return FALLBACK_LANGUAGE;
    }

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

    if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) {
        return storedLanguage;
    }

    const browserLanguage = window.navigator.language?.slice(0, 2)?.toLowerCase();

    if (browserLanguage && SUPPORTED_LANGUAGES.includes(browserLanguage)) {
        return browserLanguage;
    }

    return FALLBACK_LANGUAGE;
};

const initialLanguage = getInitialLanguage();

if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
        resources: {
            en: {
                translation: en,
            },
            ro: {
                translation: ro,
            },
            ru: {
                translation: ru,
            },
        },
        lng: initialLanguage,
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
    if (typeof window !== 'undefined' && SUPPORTED_LANGUAGES.includes(language)) {
        window.localStorage.setItem(STORAGE_KEY, language);
        document.documentElement.lang = language;
    }
});

if (typeof document !== 'undefined') {
    document.documentElement.lang = i18n.language || FALLBACK_LANGUAGE;
}

export default i18n;