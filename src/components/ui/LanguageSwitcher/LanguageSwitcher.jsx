import React, { useEffect, useMemo, useRef, useState } from 'react';
import i18n from '../../../shared/i18n/i18n.js';
import './languageSwitcher.scss';

const LANGUAGES = [
    { code: 'en', label: 'EN' },
    { code: 'ro', label: 'RO' },
    { code: 'ru', label: 'RU' },
];

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);

    const activeLanguage = useMemo(() => {
        return LANGUAGES.find((item) => item.code === i18n.language) || LANGUAGES[0];
    }, [i18n.language]);

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
        if (code === i18n.language) {
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
                aria-label='Change language'
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className='language-switcher__value'>{activeLanguage.label}</span>
            </button>

            <div className='language-switcher__menu' role='listbox' aria-label='Language options'>
                {LANGUAGES.map((language) => (
                    <button
                        key={language.code}
                        type='button'
                        className={`language-switcher__option ${
                            language.code === activeLanguage.code ? 'language-switcher__option--active' : ''
                        }`}
                        role='option'
                        aria-selected={language.code === activeLanguage.code}
                        onClick={() => handleChangeLanguage(language.code)}
                    >
                        {language.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;