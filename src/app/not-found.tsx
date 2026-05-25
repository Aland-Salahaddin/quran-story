import Link from "next/link";
import StarField from "@/components/StarField";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center" style={{ background: "var(--navy-deep)" }}>
      <StarField />
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <div
          className="text-8xl font-bold mb-4"
          style={{
            background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "Inter, sans-serif",
            direction: "ltr",
          }}
        >
          404
        </div>
        <h1 className="text-2xl font-bold mb-2" style={{ color: "#F0E6D3" }}>
          ئەم لاپەڕەیە نەدۆزرایەوە
        </h1>
        <p className="mb-8" style={{ color: "#6B7280" }}>
          لەوانەیە ئەم ئەڵقەیە هێشتا نەهاتبێتەوە
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                     transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]
                     hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
            color: "#0A0F1E",
          }}
        >
          گەڕانەوە بۆ سەرەکی
        </Link>
      </div>
    </div>
  );
}
