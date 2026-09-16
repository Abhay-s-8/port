import React, { useRef, useState, useEffect, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  disabled?: boolean;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
  disabled = false,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (disabled || !elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const isInside =
        Math.abs(deltaX) <= rect.width / 2 + padding &&
        Math.abs(deltaY) <= rect.height / 2 + padding;

      if (isInside) {
        setIsActive(true);
        setPosition({
          x: deltaX / strength,
          y: deltaY / strength,
        });
      } else {
        if (isActive) {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    },
    [padding, strength, disabled, isActive]
  );

  const handleMouseLeave = useCallback(() => {
    setIsActive(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (disabled) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, disabled]);

  return (
    <div
      ref={elementRef}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;

