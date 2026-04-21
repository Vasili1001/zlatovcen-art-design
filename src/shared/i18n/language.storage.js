const STORAGE_KEY = 'za_language';
const FALLBACK_LANGUAGE = 'en';
const SUPPORTED_LANGUAGES = ['en', 'ro', 'ru'];

export const isSupportedLanguage = (language) => {
    return SUPPORTED_LANGUAGES.includes(language);
};

export const getStoredLanguage = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    const language = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedLanguage(language) ? language : null;
};

export const getBrowserLanguage = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    const language = window.navigator.language?.slice(0, 2)?.toLowerCase();
    return isSupportedLanguage(language) ? language : null;
};

export const getInitialLanguage = () => {
    return getStoredLanguage() || getBrowserLanguage() || FALLBACK_LANGUAGE;
};

export const persistLanguage = (language) => {
    if (typeof window === 'undefined' || !isSupportedLanguage(language)) {
        return;
    }

    window.localStorage.setItem(STORAGE_KEY, language);
};

export const applyDocumentLanguage = (language) => {
    if (typeof document === 'undefined') {
        return;
    }

    document.documentElement.lang = isSupportedLanguage(language) ? language : FALLBACK_LANGUAGE;
};

export { STORAGE_KEY, FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES };