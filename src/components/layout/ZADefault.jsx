import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import ScrollToTop from '../routing/ScrollToTop.jsx';
import PageTransition from '../routing/PageTransition.jsx';

const ZADefault = ({ children }) => {
    return (
        <div className='za'>
            <ScrollToTop />
            <Header />

            <main className='za__main'>
                <PageTransition>{children}</PageTransition>
            </main>

            <Footer />
        </div>
    );
};

export default ZADefault;