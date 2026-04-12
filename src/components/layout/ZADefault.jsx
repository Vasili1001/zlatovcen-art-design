import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import ScrollToTop from '../routing/ScrollToTop.jsx';

const ZADefault = ({ children }) => {
    return (
        <div className='za'>
            <ScrollToTop />
            <Header />
            <main className='za__main'>{children}</main>
            <Footer />
        </div>
    );
};

export default ZADefault;