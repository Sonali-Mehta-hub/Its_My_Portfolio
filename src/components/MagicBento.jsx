import { useEffect, useMemo, useRef } from 'react';
import './MagicBento.css';

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function MagicBento({ particleCount = 14, enableStars = true, enableSpotlight = true }) {
  const overlayRef = useRef(null);

  const stars = useMemo(
    () =>
      new Array(particleCount).fill(null).map((_, index) => ({
        id: index,
        left: `${randomBetween(5, 95)}%`,
        top: `${randomBetween(10, 92)}%`,
        size: `${randomBetween(4, 8)}px`,
        delay: `${(Math.random() * 2).toFixed(2)}s`,
        duration: `${(2 + Math.random() * 1.5).toFixed(2)}s`,
      })),
    [particleCount],
  );

  useEffect(() => {
    const moveHandler = (event) => {
      if (!overlayRef.current) return;
      overlayRef.current.style.setProperty('--magic-x', `${event.clientX}px`);
      overlayRef.current.style.setProperty('--magic-y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <div ref={overlayRef} className="magic-bento-layer">
      {enableSpotlight && <div className="magic-bento-spotlight" />}
      {enableStars && (
        <div className="magic-bento-stars">
          {stars.map((star) => (
            <span
              key={star.id}
              className="magic-bento-star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
