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

  // Convert English numbers to Kurdish
  const toKurdishDigits = (num: number) => {
    const kurdishNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return String(num).replace(/[0-9]/g, (d) => kurdishNumbers[parseInt(d)]);
  };

  return (
    <div 
      className="fixed bottom-[24px] left-[24px] z-50 flex items-center gap-[8px] bg-[var(--surface)] border border-[rgba(212,168,83,0.4)] p-[4px] rounded-full shadow-2xl" 
      style={{ direction: "ltr" }}
    >
      <button 
        onClick={decrease}
        disabled={scale <= 1}
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-[24px] font-medium hover:bg-[rgba(212,168,83,0.1)] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        style={{ color: "var(--gold)", lineHeight: "1" }}
        aria-label="Decrease text size"
      >
        −
      </button>
      <span className="text-[14px] font-bold w-[48px] text-center" style={{ color: "var(--text-body)" }}>
        {toKurdishDigits(scale * 100)}٪
      </span>
      <button 
        onClick={increase}
        disabled={scale >= 2}
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-[24px] font-medium hover:bg-[rgba(212,168,83,0.1)] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        style={{ color: "var(--gold)", lineHeight: "1" }}
        aria-label="Increase text size"
      >
        +
      </button>
    </div>
  );
}
