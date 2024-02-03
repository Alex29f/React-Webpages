import { useCallback } from 'react';

const useScrollTo = () => {
    const scrollToElement = useCallback((elementId: string, duration = 1000) => {
        const targetElement = document.getElementById(elementId);
        if (!targetElement) return;

        const targetRect = targetElement.getBoundingClientRect();
        const targetPosition = targetRect.top + window.pageYOffset // Adjusted to get position relative to document
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime: null | number = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const nextScrollY = easeInOutQuad(timeElapsed, startPosition, distance, duration);

            window.scrollTo(0, nextScrollY);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    }, []);

    const easeInOutQuad = (time: number, start: number, change: number, duration: number) => {
        time /= duration / 2;
        if (time < 1) return change / 2 * time * time + start;
        time--;
        return -change / 2 * (time * (time - 2) - 1) + start;
    };

    return scrollToElement;
};

export default useScrollTo;
