import { useState } from 'react';

const useSwipe = ({ onSwipeLeft, onSwipeRight, minDistance }) => {
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleTouchStart = e => {
    setEndX(0); // reset endX to prevent taps from triggering swipe
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = e => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = e => {
    e.preventDefault();

    if (!startX || !endX) return;
    const distance = endX - startX;
    if (Math.abs(distance) < minDistance) return;

    distance < 0 ? onSwipeRight() : onSwipeLeft();
  };

  return { handleTouchStart, handleTouchEnd, handleTouchMove };
};

export default useSwipe;
