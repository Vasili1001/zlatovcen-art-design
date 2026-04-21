import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const useTranslate = (prefix = '') => {
    const { t, i18n } = useTranslation();

    const translate = useCallback(
        (key, options) => {
            const normalizedKey = prefix ? `${prefix}.${key}` : key;
            return t(normalizedKey, options);
        },
        [prefix, t]
    );

    return {
        t: translate,
        i18n,
        language: i18n.resolvedLanguage || i18n.language,
    };
};

export default useTranslate;