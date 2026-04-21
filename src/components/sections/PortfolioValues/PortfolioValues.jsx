import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../ui/Container/Container.jsx';
import './portfolioValues.scss';

const PortfolioValues = () => {
    const { t } = useTranslation();

    const values = useMemo(
        () => [
            {
                id: 'exclusive',
                title: t('portfolio.values.items.0.title'),
                description: t('portfolio.values.items.0.description'),
            },
            {
                id: 'opulent',
                title: t('portfolio.values.items.1.title'),
                description: t('portfolio.values.items.1.description'),
            },
            {
                id: 'innovative',
                title: t('portfolio.values.items.2.title'),
                description: t('portfolio.values.items.2.description'),
            },
        ],
        [t]
    );

    return (
        <section className='portfolio-values' aria-labelledby='portfolio-values-title'>
            <Container>
                <div className='portfolio-values__inner'>
                    <h2 className='portfolio-values__sr-only' id='portfolio-values-title'>
                        {t('portfolio.values.accessibility.title')}
                    </h2>

                    <div className='portfolio-values__grid'>
                        {values.map((item) => (
                            <article key={item.id} className='portfolio-values__item'>
                                <h3 className='portfolio-values__item-title'>{item.title}</h3>

                                <div className='portfolio-values__item-body'>
                                    <p className='portfolio-values__item-text'>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PortfolioValues;