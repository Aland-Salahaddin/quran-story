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
      style={{ 
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 50,
        display: "flex", 
        alignItems: "center", 
        gap: "8px", 
        background: "var(--surface)", 
        border: "1px solid rgba(212,168,83,0.4)", 
        padding: "4px", 
        borderRadius: "9999px", 
        direction: "ltr",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
    >
      <button 
        onClick={decrease}
        disabled={scale <= 1}
        className="hover:bg-[rgba(212,168,83,0.1)] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        style={{ 
          width: "40px", 
          height: "40px", 
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px", 
          fontWeight: 500,
          color: "var(--gold)", 
          lineHeight: "1",
          background: "transparent",
          border: "none",
          cursor: "pointer"
        }}
        aria-label="Decrease text size"
      >
        −
      </button>
      <span 
        style={{ 
          fontSize: "14px", 
          fontWeight: 700, 
          width: "48px", 
          textAlign: "center",
          color: "var(--text-body)" 
        }}
      >
        {toKurdishDigits(scale * 100)}٪
      </span>
      <button 
        onClick={increase}
        disabled={scale >= 2}
        className="hover:bg-[rgba(212,168,83,0.1)] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        style={{ 
          width: "40px", 
          height: "40px", 
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px", 
          fontWeight: 500,
          color: "var(--gold)", 
          lineHeight: "1",
          background: "transparent",
          border: "none",
          cursor: "pointer"
        }}
        aria-label="Increase text size"
      >
        +
      </button>
    </div>
  );
}
