import React, {useEffect} from 'react';

const SetStartFunc = () => {

    const adjustAppHeight = () => {
        const appElement = document.querySelector('.App');
        const windowHeight = window.innerHeight;
        const contentHeight = appElement.scrollHeight;

        if (contentHeight <= windowHeight) {
            appElement.style.height = '100vh';
        } else {
            appElement.style.height = contentHeight + 'px';
        }
    }

    useEffect(() => {
        adjustAppHeight()
        window.addEventListener('resize', adjustAppHeight);
        window.addEventListener('scroll', adjustAppHeight);
        return () => {
            window.removeEventListener('resize', adjustAppHeight);
            window.removeEventListener('scroll', adjustAppHeight);
        };
    }, []);

    return (
        <div/>
    );
};

export default SetStartFunc;