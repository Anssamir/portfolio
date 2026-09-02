'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export function CustomHoverCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    setVisible(false);
    hasMoved.current = false;
    document.documentElement.classList.remove('hover-active');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frameId: number;

    const render = () => {
      const easing = reduceMotion ? 1 : 0.12;
      current.current.x += (target.current.x - current.current.x) * easing;
      current.current.y += (target.current.y - current.current.y) * easing;
      cursor.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      frameId = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!hasMoved.current) {
        current.current.x = e.clientX;
        current.current.y = e.clientY;
        hasMoved.current = true;
      }
    };

    const onEnter = (e: Event) => {
      const el = e.target as HTMLElement;
      if (el?.closest?.('.project-card')) {
        setVisible(true);
        document.documentElement.classList.add('hover-active');
      }
    };

    const onLeave = (e: Event) => {
      const el = e.target as HTMLElement;
      if (el?.closest?.('.project-card')) {
        setVisible(false);
        document.documentElement.classList.remove('hover-active');
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseenter', onEnter, true);
    document.addEventListener('mouseleave', onLeave, true);
    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseenter', onEnter, true);
      document.removeEventListener('mouseleave', onLeave, true);
      cancelAnimationFrame(frameId);
      document.documentElement.classList.remove('hover-active');
    };
  }, [pathname]);

  if (!isHome) return null;

  return (
    <div
      ref={cursorRef}
      className={`hover-cursor ${visible ? 'is-visible' : ''}`}
      aria-hidden="true"
    >
      <div className="hover-cursor-inner">
        <svg viewBox="0 0 140 140" width="140" height="140" className="hover-cursor-ring">
          <defs>
            <path
              id="hoverTextCircle"
              d="M 70, 70 m -56, 0 a 56,56 0 1,1 112,0 a 56,56 0 1,1 -112,0"
            />
          </defs>
          <circle cx="70" cy="70" r="68" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <circle cx="70" cy="70" r="56" fill="rgba(255,255,255,0.05)" />
          <text fill="rgba(255,255,255,0.95)" fontSize="8.5" fontWeight="700" letterSpacing="4.5" fontFamily="Manrope, sans-serif">
            <textPath href="#hoverTextCircle" startOffset="0%">
              CLICK TO OPEN &#x2666; VIEW PROJECT &#x2666; ANAS &#x2666;
            </textPath>
          </text>
        </svg>
        <div className="hover-cursor-center">
          <Image src="/eye icon.svg" alt="" width={40} height={40} className="hover-cursor-eye" />
        </div>
      </div>
    </div>
  );
}
