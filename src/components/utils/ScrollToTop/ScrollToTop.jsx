import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const container = document.querySelector('.content');
        container.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
