"use-client";

import { useEffect, useState } from 'react';

// Tipe untuk posisi mouse
interface MousePosition {
  x: number;
  y: number;
}

const SquareTrailCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [prevMousePos, setPrevMousePos] = useState<MousePosition>({ x: -100, y: -100 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    const checkDevice = () => setIsMobile(mediaQuery.matches);
    checkDevice();
    mediaQuery.addEventListener('change', checkDevice);
    return () => mediaQuery.removeEventListener('change', checkDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      const currentPos = { x: e.clientX, y: e.clientY };
      setMousePos(currentPos);
      setTimeout(() => setPrevMousePos(currentPos), 50);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = 'auto';
      return;
    }
    document.body.style.cursor = 'none';
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      document.body.style.cursor = 'auto';
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  const deltaX = mousePos.x - prevMousePos.x;
  const deltaY = mousePos.y - prevMousePos.y;
  const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;

  const followerStyle: React.CSSProperties = {
    position: 'fixed',
    top: `${mousePos.y}px`,
    left: `${mousePos.x}px`,
    width: '30px',
    height: '30px',
    border: '2px solid #36302b',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: `
      translate(-50%, -50%) 
      scale(${isHovering ? 1.5 : 1}) 
      rotate(${isHovering ? 0 : angle}deg)
    `, // <-- NILAI DIUBAH DI SINI
    transition: 'transform 0.15s ease-out',
  };

  const dotStyle: React.CSSProperties = {
    position: 'fixed',
    top: `${mousePos.y}px`,
    left: `${mousePos.x}px`,
    width: '6px',
    height: '6px',
    backgroundColor: '#36302b',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    opacity: isHovering ? 0 : 1,
    transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
  };

  const crossHorizontal: React.CSSProperties = {
    position: 'fixed',
    top: `${mousePos.y}px`,
    left: `${mousePos.x}px`,
    width: '25px',
    height: '2px',
    backgroundColor: '#36302b',
    transform: 'translate(-50%, -50%)',
    zIndex: 10000,
    opacity: isHovering ? 1 : 0,
    transition: 'opacity 0.2s ease-in-out',
    pointerEvents: 'none',
  };

  const crossVertical: React.CSSProperties = {
    ...crossHorizontal,
    width: '2px',
    height: '25px',
  };

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div style={followerStyle} />
      <div style={dotStyle} />
      <div style={crossHorizontal} />
      <div style={crossVertical} />
    </>
  );
};

export default SquareTrailCursor;