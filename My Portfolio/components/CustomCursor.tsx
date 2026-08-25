'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const supportsCustomCursor = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!supportsCustomCursor.matches) return undefined;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frameId: number;
    let hasPointer = false;

    const render = () => {
      if (hasPointer) {
        const easing = reduceMotion ? 1 : 0.32;
        current.x += (target.x - current.x) * easing;
        current.y += (target.y - current.y) * easing;
        cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }
      frameId = requestAnimationFrame(render);
    };

    const moveCursor = ({ clientX, clientY }: PointerEvent) => {
      target.x = clientX;
      target.y = clientY;
      if (!hasPointer) {
        current.x = clientX;
        current.y = clientY;
        hasPointer = true;
        cursor.classList.add('is-visible');
      }
    };

    const hideCursor = () => cursor.classList.remove('is-visible');
    const showCursor = () => hasPointer && cursor.classList.add('is-visible');

    window.addEventListener('pointermove', moveCursor, { passive: true });
    document.documentElement.addEventListener('pointerleave', hideCursor);
    document.documentElement.addEventListener('pointerenter', showCursor);
    window.addEventListener('blur', hideCursor);
    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', moveCursor);
      document.documentElement.removeEventListener('pointerleave', hideCursor);
      document.documentElement.removeEventListener('pointerenter', showCursor);
      window.removeEventListener('blur', hideCursor);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <span ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
