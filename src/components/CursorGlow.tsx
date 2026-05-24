import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is a mobile or touch device
    const checkIsTouchDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch);
    };

    checkIsTouchDevice();

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (opacity === 0) setOpacity(0.4);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    const handleMouseEnter = () => {
      setOpacity(0.4);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile, opacity]);

  if (isMobile) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        opacity,
        background: `radial-gradient(600px cubic-bezier(0.16, 1, 0.3, 1) at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.05) 50%, transparent 100%)`,
      }}
      id="cursor-glow-spotlight"
    />
  );
}
