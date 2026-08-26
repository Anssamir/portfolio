'use client';

import { useEffect, useRef } from 'react';

const COLS = 24;
const ROWS = 14;
const CELL = 48;
const FILL_INTERVAL = 1000;
const FADE_SPEED = 0.04;

interface Cell {
  opacity: number;
  target: number;
}

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = COLS * CELL;
    const h = ROWS * CELL;
    canvas.width = w;
    canvas.height = h;

    const cells: Cell[][] = [];
    for (let r = 0; r < ROWS; r++) {
      cells[r] = [];
      for (let c = 0; c < COLS; c++) {
        cells[r][c] = { opacity: 0, target: 0 };
      }
    }

    const fillRandom = () => {
      const count = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * ROWS);
        const c = Math.floor(Math.random() * COLS);
        cells[r][c].target = 0.18 + Math.random() * 0.22;
      }
    };

    fillRandom();
    const interval = setInterval(fillRandom, FILL_INTERVAL);

    let frameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(200, 200, 196, 0.5)';
      ctx.lineWidth = 2;

      for (let r = 0; r <= ROWS; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * CELL);
        ctx.lineTo(w, r * CELL);
        ctx.stroke();
      }
      for (let c = 0; c <= COLS; c++) {
        ctx.beginPath();
        ctx.moveTo(c * CELL, 0);
        ctx.lineTo(c * CELL, h);
        ctx.stroke();
      }

      // Draw filled cells
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const cell = cells[r][c];
          cell.opacity += (cell.target - cell.opacity) * FADE_SPEED;

          if (cell.opacity > 0.01) {
            ctx.fillStyle = `rgba(180, 185, 178, ${cell.opacity})`;
            ctx.fillRect(c * CELL + 1, r * CELL + 1, CELL - 2, CELL - 2);
          }

          // Fade out
          if (cell.target > 0) {
            cell.target -= 0.0008;
            if (cell.target < 0) cell.target = 0;
          }
        }
      }

      frameId = requestAnimationFrame(draw);
    };

    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="grid-canvas"
      aria-hidden="true"
    />
  );
}
