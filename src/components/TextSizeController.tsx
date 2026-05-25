"use client";

import { useState, useEffect } from "react";

export default function TextSizeController() {
  const [scale, setScale] = useState(1); // 1 to 2

  useEffect(() => {
    // Scale the root font size, which scales all Tailwind rem values (text, padding, margins, etc.)
    document.documentElement.style.fontSize = `${16 * scale}px`;
  }, [scale]);

  const increase = () => setScale(s => Math.min(s + 0.25, 2));
  const decrease = () => setScale(s => Math.max(s - 0.25, 1));

  // Hide entirely if we are on server, to avoid hydration mismatch, or just render it
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div 
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#0d1117] border border-[rgba(212,168,83,0.4)] p-1 rounded-full shadow-2xl" 
      style={{ direction: "ltr" }}
    >
      <button 
        onClick={decrease}
        disabled={scale <= 1}
        className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-medium hover:bg-[rgba(212,168,83,0.1)] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        style={{ color: "var(--gold)" }}
        aria-label="Decrease text size"
      >
        −
      </button>
      <span className="text-sm font-bold w-12 text-center" style={{ color: "var(--text-body)" }}>
        {scale * 100}%
      </span>
      <button 
        onClick={increase}
        disabled={scale >= 2}
        className="w-10 h-10 rounded-full flex items-center justify-center text-2xl font-medium hover:bg-[rgba(212,168,83,0.1)] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        style={{ color: "var(--gold)" }}
        aria-label="Increase text size"
      >
        +
      </button>
    </div>
  );
}
