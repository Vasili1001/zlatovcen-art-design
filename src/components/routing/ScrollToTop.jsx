import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash, key } = useLocation();

    useLayoutEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useLayoutEffect(() => {
        if (hash) {
            return;
        }

        const scrollToPageTop = () => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        scrollToPageTop();

        const firstFrame = window.requestAnimationFrame(() => {
            scrollToPageTop();

            window.requestAnimationFrame(() => {
                scrollToPageTop();
            });
        });

        return () => {
            window.cancelAnimationFrame(firstFrame);
        };
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToTop;