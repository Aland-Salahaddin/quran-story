import { Episode } from "@/lib/episodes";
import Link from "next/link";

export default function EpisodeCard({ episode, index }: { episode: Episode; index: number }) {
  if (!episode.published) return <LockedCard episode={episode} />;
  return (
    <div className="anim-up" style={{ animationDelay: `${index * 0.07}s` }}>
      <Link href={`/episode/${episode.slug}`} className="block group">
        <div
          className="surface rounded-xl px-6 py-6 flex items-center gap-5 transition-all duration-300
                     group-hover:border-[rgba(212,168,83,0.35)] group-hover:bg-[var(--surface-2)]"
        >
          {/* Number */}
          <span
            className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold"
            style={{ background: "rgba(212,168,83,0.1)", color: "var(--gold)" }}
          >
            {String(episode.id).padStart(2, "0")}
          </span>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p
              className="font-semibold text-2xl leading-relaxed transition-colors duration-200 group-hover:text-gold"
              style={{ color: "var(--text-body)" }}
            >
              {episode.titleKu}
            </p>
            <p className="text-lg mt-0.5 truncate" style={{ color: "var(--text-muted)" }}>
              {episode.subtitleKu}
            </p>
          </div>

          {/* Meta */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0 text-base" style={{ color: "var(--text-muted)", fontFamily: "system-ui", direction: "ltr" }}>
            <span
              className="px-3 py-1 rounded-full"
              style={{ background: "rgba(212,168,83,0.08)", color: "var(--gold)" }}
            >
              {episode.surah}
            </span>
          </div>

          {/* Arrow */}
          <svg
            className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-x-0.5"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            style={{ color: "var(--gold)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </Link>
    </div>
  );
}

function LockedCard({ episode }: { episode: Episode }) {
  return (
    <div
      className="surface rounded-xl px-6 py-6 flex items-center gap-5 opacity-40 cursor-not-allowed select-none"
    >
      <span
        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: "var(--text-muted)" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-2xl leading-relaxed" style={{ color: "var(--text-sub)" }}>{episode.titleKu}</p>
        <p className="text-lg mt-0.5" style={{ color: "var(--text-muted)" }}>بەم زووانە دێت…</p>
      </div>
    </div>
  );
}
