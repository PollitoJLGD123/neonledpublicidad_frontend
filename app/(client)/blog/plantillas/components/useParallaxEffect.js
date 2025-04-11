'use client';

import { useRef } from 'react';

export const useParallaxEffect = (intensity = 20) => {
  const containerRef = useRef(null);

  const onMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;
    
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    
    container.style.backgroundPosition = `
      ${50 + (x * intensity)}% 
      ${50 + (y * intensity)}%
    `;
  };

  const onMouseLeave = () => {
    const container = containerRef.current;
    if (!container) return;
    
    container.style.backgroundPosition = "center center";
    container.style.transition = "background-position 0.5s ease";
  };

  return {
    ref: containerRef,
    onMouseMove,
    onMouseLeave
  };
};