import React from 'react';
import Container from '../../ui/Container/Container.jsx';
import './portfolioValues.scss';

const values = [
    {
        id: 'exclusive',
        title: 'Exclusive',
        description:
            'We create exclusive interiors tailored to the unique tastes and needs of our discerning clients.',
    },
    {
        id: 'opulent',
        title: 'Opulent',
        description:
            'We specialize in crafting opulent environments where luxury is felt in every corner of the space.',
    },
    {
        id: 'innovative',
        title: 'Innovative',
        description:
            'Each project combines innovative design with cutting-edge materials to push creative boundaries.',
    },
];

const PortfolioValues = () => {
    return (
        <section className='portfolio-values' aria-labelledby='portfolio-values-title'>
            <Container>
                <div className='portfolio-values__inner'>
                    <h2 className='portfolio-values__sr-only' id='portfolio-values-title'>
                        Portfolio values
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