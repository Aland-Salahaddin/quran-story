"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  delta: number;
  speed: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number>(0);
  const { theme } = useTheme();

  const makeStars = useCallback((w: number, h: number, count: number): Star[] =>
    Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random(),
      delta: (Math.random() * 0.004 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      speed: Math.random() * 0.05,
    })), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      starsRef.current = makeStars(canvas.width, canvas.height, 220);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const isLight = theme === "light";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of starsRef.current) {
        s.alpha += s.delta;
        if (s.alpha <= 0 || s.alpha >= 1) s.delta *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        
        const alpha = Math.max(0, Math.min(1, s.alpha));
        // Use subtle dark dots for light mode, bright white/yellow for dark mode
        ctx.fillStyle = isLight ? `rgba(0,0,0,${alpha * 0.15})` : `rgba(255,255,240,${alpha})`;
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [makeStars, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.6 }}
      aria-hidden="true"
    />
  );
}
