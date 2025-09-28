"use client" // Jika menggunakan Next.js App Router

import { useEffect, useState } from 'react';

// (Interface Particle tetap sama)
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

// Helper untuk membuat string box-shadow (tetap digunakan)
const createBoxShadow = (coords: number[][], color: string, pixelSize: number) => {
  return coords
    .map(p => `${p[0] * pixelSize}px ${p[1] * pixelSize}px 0 0 ${color}`)
    .join(', ');
};

// =================================================================
// KURSOR BARU: Panah Pixel Sederhana (Untuk State Default)
// =================================================================
const SimplePixelArrowCursor = () => {
  const PIXEL_SIZE = 2;

  // Koordinat untuk bentuk panah yang lebih simpel dan solid
  const pixelCoords = [
    [0,0],
    [0,1],[1,1],
    [0,2],[1,2],[2,2],
    [0,3],[1,3],[2,3],[3,3],
    [0,4],[1,4],[2,4],
    [0,5],[1,5],
    [0,6],
  ];

  const style = {
    width: `${PIXEL_SIZE}px`,
    height: `${PIXEL_SIZE}px`,
    backgroundColor: 'transparent',
    boxShadow: createBoxShadow(pixelCoords, '#000', PIXEL_SIZE), // Hanya satu warna
    position: 'absolute' as const,
    top: 0,
    left: 0,
  };

  return <div style={style}></div>;
};

// =================================================================
// KURSOR HOVER: Tangan Pixel (Tetap Sama)
// =================================================================
const PixelHandCursor = () => {
  const PIXEL_SIZE = 2;
  const blackPixelsCoords = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[6,1],[8,1],[9,1],[0,2],[5,2],[8,2],[10,2],[0,3],[4,3],[8,3],[11,3],[0,4],[3,4],[8,4],[12,4],[1,5],[2,5],[8,5],[12,5],[2,6],[8,6],[12,6],[3,7],[7,7],[8,7],[12,7],[4,8],[5,8],[6,8],[9,8],[10,8],[11,8],[12,8],[4,9],[6,9],[4,10],[6,10],[4,11],[6,11],[4,12],[5,12],[6,12]];
  const whitePixelsCoords = [[1,1],[2,1],[3,1],[4,1],[5,1],[1,2],[2,2],[3,2],[4,2],[1,3],[2,3],[3,3],[1,4],[2,4],[9,2],[9,3],[9,4],[10,4],[10,3],[11,4],[10,5],[11,5],[9,5],[9,6],[10,6],[11,6],[9,7],[10,7],[11,7]];
  const styleBlack = { width: `${PIXEL_SIZE}px`, height: `${PIXEL_SIZE}px`, backgroundColor: 'transparent', boxShadow: createBoxShadow(blackPixelsCoords, '#000', PIXEL_SIZE), position: 'absolute' as const, top: 0, left: 0 };
  const styleWhite = { ...styleBlack, boxShadow: createBoxShadow(whitePixelsCoords, '#FFF', PIXEL_SIZE) };
  return (<div style={{ position: 'relative' }}><div style={styleBlack}></div><div style={styleWhite}></div></div>);
};


// =================================================================
// Komponen Utama
// =================================================================
const MouseEffects = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  // useEffect untuk mouse events dan animasi partikel tetap sama...
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => { setMousePos({ x: e.clientX, y: e.clientY }); if (Math.random() > 0.7) { const newParticle: Particle = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2, life: 50 }; setParticles(prev => [...prev, newParticle]); } };
    const handleMouseEnter = () => setIsHovering(true); const handleMouseLeave = () => setIsHovering(false);
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => { el.addEventListener('mouseenter', handleMouseEnter); el.addEventListener('mouseleave', handleMouseLeave); });
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Animasi partikel
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
        {/* PERUBAHAN DI SINI: Menggunakan kursor yang lebih simpel */}
        {isHovering ? <PixelHandCursor /> : <SimplePixelArrowCursor />}
      </div>
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'fixed',
            left: particle.x,
            top: particle.y,
            width: '2px',
            height: '2px',
            backgroundColor: 'rgba(255,255,255,0.5)',
            pointerEvents: 'none',
            zIndex: 9998,
          }}
        />
      ))}
    </>
  );
};

export default MouseEffects;