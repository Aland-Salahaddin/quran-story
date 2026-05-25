import StarField from "@/components/StarField";
import IntroNotice from "@/components/IntroNotice";
import EpisodeCard from "@/components/EpisodeCard";
import { getAllEpisodes } from "@/lib/episodes";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function HomePage() {
  const episodes = getAllEpisodes();

  return (
    <main className="relative min-h-screen">
      <StarField />

      {/* ── HERO ── */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeSwitcher />
      </div>
      <header className="relative z-10 pt-20 pb-12 text-center px-4">
        {/* Subtle top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(212,168,83,0.08) 0%, transparent 70%)" }}
        />

        {/* Crescent */}
        <div className="mb-6 anim-in">
          <span className="text-gold" style={{ fontSize: "1.8rem" }}>☽</span>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 heading-gradient anim-up d-1">
          زنجیرەی قورئان
        </h1>



        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mt-8 anim-up d-3">
          <div className="h-px w-16" style={{ background: "rgba(212,168,83,0.25)" }} />
          <span style={{ color: "rgba(212,168,83,0.4)" }}>✦</span>
          <div className="h-px w-16" style={{ background: "rgba(212,168,83,0.25)" }} />
        </div>
      </header>

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full px-4 md:px-12 lg:px-24 xl:px-32 pb-24 space-y-8">

        {/* Intro Notice */}
        <IntroNotice />

        {/* Section Label */}
        <div className="flex items-center gap-3 pt-2 anim-up d-4">
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          <p className="text-base tracking-widest" style={{ color: "var(--text-muted)" }}>
            ئەڵقەکان
          </p>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
        </div>

        {/* Episodes */}
        <div className="space-y-6">
          {episodes.map((ep, i) => (
            <EpisodeCard key={ep.id} episode={ep} index={i} />
          ))}
        </div>

        {/* Coming soon */}
        <div className="text-center py-4 anim-up">
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>ئەڵقەکانی تر بەم زووانە دێن</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 px-4" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-base" style={{ color: "var(--text-muted)" }}>زنجیرەی قورئان · کوردی سۆرانی</p>
      </footer>
    </main>
  );
}
