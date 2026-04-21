import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';

const PageTransition = ({ children }) => {
    const location = useLocation();
    const shouldReduceMotion = useReducedMotion();

    return (
        <>
            <AnimatePresence mode='popLayout' initial={false}>
                <m.div
                    key={location.pathname}
                    className='za__page'
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.985 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                    {children}
                </m.div>
            </AnimatePresence>

            {!shouldReduceMotion ? (
                <AnimatePresence mode='wait' initial={false}>
                    <m.div
                        key={location.pathname}
                        className='za__route-veil'
                        initial={{ opacity: 0.16 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                        aria-hidden='true'
                    />
                </AnimatePresence>
            ) : null}
        </>
    );
};

export default PageTransition;