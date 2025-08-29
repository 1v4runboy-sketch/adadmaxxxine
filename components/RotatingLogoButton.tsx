'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
  onClick?: () => void;
  size?: number;
};

export default function RotatingLogoButton({ onClick, size = 42 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const speedRef = useRef(360/6); // deg per second (6s/turn)
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const speed = hover ? 360/2 : 360/6; // 2s/turn on hover
      speedRef.current = speed;
      angleRef.current = (angleRef.current + speed * dt) % 360;
      if (ref.current) {
        ref.current.style.transform = `rotateY(${angleRef.current}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hover]);

  return (
    <button
      aria-label="Abrir menu"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative inline-flex items-center justify-center rounded-full ring-1 ring-white/10 hover:ring-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-weg"
      style={{ width: size, height: size, perspective: 800 }}
    >
      <div
        ref={ref}
        className="transition-transform [transform-style:preserve-3d]"
        style={{ width: size-2, height: size-2 }}
      >
        {/* Frente */}
        <Image
          src="/loading-logo.png"
          alt="Polus Logo"
          width={size-2}
          height={size-2}
          className="rounded-full [backface-visibility:hidden]"
          priority
        />
        {/* Verso idêntico (sem espelhar) */}
        <Image
          src="/loading-logo.png"
          alt="Polus Logo"
          width={size-2}
          height={size-2}
          className="rounded-full [backface-visibility:hidden] absolute inset-0 [transform:rotateY(180deg)]"
          priority
        />
      </div>
    </button>
  );
}
