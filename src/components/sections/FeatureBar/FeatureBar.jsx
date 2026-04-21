import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import './featureBar.scss';

const FeatureBar = ({ items, className = '' }) => {
    const { t } = useTranslation();

    const localizedItems = useMemo(
        () => [
            {
                desktop: t('common.featureBar.items.0.desktop'),
                mobile: t('common.featureBar.items.0.mobile'),
            },
            {
                desktop: t('common.featureBar.items.1.desktop'),
                mobile: t('common.featureBar.items.1.mobile'),
            },
            {
                desktop: t('common.featureBar.items.2.desktop'),
                mobile: t('common.featureBar.items.2.mobile'),
            },
            {
                desktop: t('common.featureBar.items.3.desktop'),
                mobile: t('common.featureBar.items.3.mobile'),
            },
            {
                desktop: t('common.featureBar.items.4.desktop'),
                mobile: t('common.featureBar.items.4.mobile'),
            },
        ],
        [t]
    );

    const resolvedItems = items?.length ? items : localizedItems;

    return (
        <section
            className={`feature-bar feature-bar--animated ${className}`.trim()}
            aria-label={t('common.featureBar.accessibility.label')}
        >
            <div className='feature-bar__background' />

            <Container>
                <div className='feature-bar__inner'>
                    <div className='feature-bar__scroll'>
                        <ul className='feature-bar__list'>
                            {resolvedItems.map((item, index) => (
                                <li
                                    key={`${item.desktop}-${index}`}
                                    className='feature-bar__item'
                                    style={{ '--feature-bar-delay': `${index * 80}ms` }}
                                >
                                    <span className='feature-bar__text feature-bar__text--desktop'>
                                        {item.desktop}
                                    </span>

                                    <span className='feature-bar__text feature-bar__text--mobile'>
                                        {item.mobile}
                                    </span>

                                    {index !== resolvedItems.length - 1 && (
                                        <span className='feature-bar__divider' aria-hidden='true' />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeatureBar;