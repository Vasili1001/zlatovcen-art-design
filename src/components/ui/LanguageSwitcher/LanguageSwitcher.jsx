import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './languageSwitcher.scss';

const LANGUAGES = [
    { code: 'en', label: 'EN' },
    { code: 'ro', label: 'RO' },
    { code: 'ru', label: 'RU' },
];

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);
    const menuId = useId();

    const activeLanguage = useMemo(() => {
        return LANGUAGES.find((item) => item.code === i18n.resolvedLanguage) || LANGUAGES[0];
    }, [i18n.resolvedLanguage]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (rootRef.current && !rootRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleChangeLanguage = async (code) => {
        if (code === i18n.resolvedLanguage) {
            setIsOpen(false);
            return;
        }

        await i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className={`language-switcher ${isOpen ? 'language-switcher--open' : ''}`} ref={rootRef}>
            <button
                type='button'
                className='language-switcher__trigger'
                aria-expanded={isOpen}
                aria-haspopup='listbox'
                aria-controls={menuId}
                aria-label={t('common.changeLanguage')}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className='language-switcher__value'>{activeLanguage.label}</span>
            </button>

            <div
                id={menuId}
                className='language-switcher__menu'
                role='listbox'
                aria-label={t('common.languageOptions')}
                aria-hidden={!isOpen}
            >
                {LANGUAGES.map((language) => {
                    const isActive = language.code === activeLanguage.code;

                    return (
                        <button
                            key={language.code}
                            type='button'
                            className={`language-switcher__option ${
                                isActive ? 'language-switcher__option--active' : ''
                            }`}
                            role='option'
                            aria-selected={isActive}
                            onClick={() => handleChangeLanguage(language.code)}
                        >
                            {language.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default LanguageSwitcher;