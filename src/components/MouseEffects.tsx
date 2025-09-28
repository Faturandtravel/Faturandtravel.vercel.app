"use client" 

import { useEffect, useState } from 'react';

interface Particle {
  id: number; x: number; y: number; vx: number; vy: number; life: number;
}
const createBoxShadow = (coords: number[][], color: string, pixelSize: number) => {
  return coords.map(p => `${p[0] * pixelSize}px ${p[1] * pixelSize}px 0 0 ${color}`).join(', ');
};

const SimplePixelArrowCursor = () => {
  const PIXEL_SIZE = 2;
  const pixelCoords = [
    [0,0], [0,1],[1,1], [0,2],[1,2],[2,2], [0,3],[1,3],[2,3],[3,3],
    [0,4],[1,4],[2,4], [0,5],[1,5], [0,6],
  ];
  const style = {
    width: `${PIXEL_SIZE}px`, height: `${PIXEL_SIZE}px`, backgroundColor: 'transparent',
    boxShadow: createBoxShadow(pixelCoords, '#000', PIXEL_SIZE),
    position: 'absolute' as const, top: 0, left: 0,
  };
  return <div style={style}></div>;
};

const SimplePixelHandCursor = () => {
    const PIXEL_SIZE = 2;
    const pixelCoords = [
        [0,0], [1,0], [2,0], [3,0], [4,0], [0,1], [5,1], [0,2], [5,2],
        [0,3], [1,3], [2,3], [3,3], [4,3], [1,4], [2,4], [3,4],
    ];
    const style = {
        width: `${PIXEL_SIZE}px`, height: `${PIXEL_SIZE}px`, backgroundColor: 'transparent',
        boxShadow: createBoxShadow(pixelCoords, '#000', PIXEL_SIZE),
        position: 'absolute' as const, top: 0, left: 0,
    };
    return <div style={style}></div>;
};

const MouseEffects = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => { setMousePos({ x: e.clientX, y: e.clientY }); if (Math.random() > 0.7) { const newParticle: Particle = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2, life: 50 }; setParticles(prev => [...prev, newParticle]); } };
    const handleMouseEnter = () => setIsHovering(true); const handleMouseLeave = () => setIsHovering(false);
    
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => { el.addEventListener('mouseenter', handleMouseEnter); el.addEventListener('mouseleave', handleMouseLeave); });
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setParticles(prev => prev.map(p => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, life: p.life - 1 })).filter(p => p.life > 0));
    };
    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: mousePos.x,
          top: mousePos.y,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        {isHovering ? <SimplePixelHandCursor /> : <SimplePixelArrowCursor />}
      </div>
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'fixed', left: particle.x, top: particle.y,
            width: '2px', height: '2px',
            backgroundColor: 'rgba(255,255,255,0.5)',
            pointerEvents: 'none', zIndex: 9998,
          }}
        />
      ))}
    </>
  );
};

export default MouseEffects;