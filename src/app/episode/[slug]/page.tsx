import { getEpisodeBySlug, getAllEpisodes, ContentBlock } from "@/lib/episodes";
import { notFound } from "next/navigation";
import Link from "next/link";
import StarField from "@/components/StarField";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEpisodes().map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ep = getEpisodeBySlug(slug);
  if (!ep) return { title: "نەدۆزرایەوە" };
  return { title: `${ep.titleKu} | زنجیرەی قورئان`, description: ep.subtitleKu };
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode || !episode.published) notFound();

  const all = getAllEpisodes().filter(e => e.published);
  const idx = all.findIndex(e => e.id === episode.id);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <div className="relative min-h-screen" style={{ background: "var(--bg)" }}>
      <StarField />

      {/* ── TOP BAR ── */}
      <nav
        className="sticky top-0 z-40 flex items-center justify-between px-4 md:px-12 lg:px-24 xl:px-32 py-4 w-full"
        style={{ direction: "rtl" }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-xl font-bold px-6 py-3 rounded-full transition-all duration-200 group hover:bg-[rgba(212,168,83,0.1)] border border-transparent hover:border-[rgba(212,168,83,0.3)]"
          style={{ color: "var(--text-body)" }}
        >
          <svg className="w-6 h-6 group-hover:translate-x-1.5 transition-transform text-gold" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="group-hover:text-gold transition-colors">گەڕانەوە</span>
        </Link>
      </nav>

      {/* ── HEADER ── */}
      <header className="relative z-10 w-full px-4 md:px-12 lg:px-24 xl:px-32 pt-6 pb-10">
        {/* Meta pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            episode.surah,
            episode.year
          ].map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 text-lg px-8 py-3 rounded-full font-bold shadow-sm"
              style={{
                background: "rgba(212,168,83,0.06)",
                color: "var(--text-body)",
                border: "1px solid rgba(212,168,83,0.2)",
              }}
            >
              <span>{text}</span>
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold leading-snug mb-3 heading-gradient anim-up"
        >
          {episode.titleKu}
        </h1>

        {/* Subtitle */}
        <p className="text-lg leading-relaxed anim-up d-1" style={{ color: "var(--text-sub)" }}>
          {episode.subtitleKu}
        </p>

        {/* Divider */}
        <div className="mt-8 h-px" style={{ background: "var(--border)" }} />
      </header>

      {/* ── STORY BODY ── */}
      <article className="relative z-10 w-full px-4 md:px-12 lg:px-24 xl:px-32 pb-24">

        {episode.content.length === 0 ? (
          /* ── Placeholder shell ── */
          <div className="space-y-10 anim-up d-2">
            {/* Placeholder paragraphs */}
            {[
              "لۆرێم ئیپسوم دۆلۆر سیت ئەمێت، کۆنسێکتێتوور ئەدیپیسسینگ ئێلیت. سێد دو ئێیوسمۆد تێمپۆر ئینسیدیدونت ئوت لابۆرێ ئێت دۆلۆرێ مەگنا ئەلیقوا. ئوت ئێنیم ئەد مینیم ڤێنیام، قوییس نۆسترود ئێکسێرسیتاسیۆن ئوللامکۆ لابۆریس نیسی ئوت ئەلیقویپ ئێکس ئێا کۆممۆدۆ کۆنسێقواتریم.",
              "دوییس ئاوتێ ئیرورێ دۆلۆر ئین رێپرێهێندێریت ئین ڤۆلوپتاتێ ڤێلیت ئێسسێ سیللوم دۆلۆرێ ئێو فوگیات نوللا پاریاتور. ئێکسسێپتێور سینت ئۆككاێكات كوپیداتات نۆن پرۆیدێنت، سونت ئین كولپا قوی ئۆففیسیا دێسێرونت مۆللیت ئەنیم ئید ئێست لابۆروم.",
            ].map((t, i) => (
              <p key={i} className="story-paragraph text-2xl md:text-3xl leading-loose" style={{ color: "var(--text-body)", paddingRight: "20px" }}>{t}</p>
            ))}

            {/* Placeholder verse */}
            <PlaceholderVerse
              arabic="اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ"
              kurdish="بخوێنەرەوە بە ناوی پەروەردگارت، ئەوەی کە دەیافرێنێ"
            />

            <p className="story-paragraph text-2xl md:text-3xl leading-loose" style={{ color: "var(--text-body)", paddingRight: "20px" }}>
              ئوت ئێنیم ئەد مینیم ڤێنیام، قوییس نۆسترود ئێکسێرسیتاسیۆن. لۆرێم ئیپسوم دۆلۆر سیت ئەمێت، کۆنسێکتێتوور ئەدیپیسسینگ ئێلیت، سێد دو ئێیوسمۆد تێمپۆر ئینسیدیدونت ئوت لابۆرێ ئێت دۆلۆرێ مەگنا ئەلیقوا.
            </p>

            <PlaceholderVerse
              arabic="خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ"
              kurdish="مرۆڤی دروستکرد لە خوێنەکەمە"
            />

            <p className="story-paragraph text-2xl md:text-3xl leading-loose" style={{ color: "var(--text-body)", paddingRight: "20px" }}>
              سێد دو ئێیوسمۆد تێمپۆر ئینسیدیدونت ئوت لابۆرێ ئێت دۆلۆرێ مەگنا ئەلیقوا. ئوت ئێنیم ئەد مینیم ڤێنیام، قوییس نۆسترود ئێکسێرسیتاسیۆن ئوللامکۆ لابۆریس نیسی ئوت.
            </p>
          </div>
        ) : (
          /* ── Real content ── */
          <div className="space-y-10 anim-up d-2">
            {episode.content.map((block: ContentBlock, i: number) => (
              <Block key={i} block={block} />
            ))}
          </div>
        )}

        {/* ── Episode navigation ── */}
        {(prev || next) && (
          <div
            className="mt-16 pt-8 grid grid-cols-2 gap-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {prev ? (
              <Link
                href={`/episode/${prev.slug}`}
                className="surface rounded-xl p-4 transition-all duration-200 hover:border-[rgba(212,168,83,0.3)] group"
              >
                <p className="text-xs mb-1 flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                  <svg className="w-3 h-3 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  پێشتر
                </p>
                <p className="text-sm font-medium line-clamp-1 group-hover:text-gold transition-colors" style={{ color: "var(--text-body)" }}>
                  {prev.titleKu}
                </p>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                href={`/episode/${next.slug}`}
                className="surface rounded-xl p-4 text-left transition-all duration-200 hover:border-[rgba(212,168,83,0.3)] group"
              >
                <p className="text-xs mb-1 flex items-center justify-end gap-1" style={{ color: "var(--text-muted)" }}>
                  دواتر
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </p>
                <p className="text-sm font-medium line-clamp-1 text-right group-hover:text-gold transition-colors" style={{ color: "var(--text-body)" }}>
                  {next.titleKu}
                </p>
              </Link>
            ) : <div />}
          </div>
        )}
      </article>

    </div>
  );
}

/* ── Content renderers ── */
function Block({ block }: { block: ContentBlock }) {
  if (block.type === "paragraph") {
    return (
      <p className="story-paragraph text-2xl md:text-3xl leading-loose" style={{ color: "var(--text-body)", paddingRight: "20px", marginBottom: "1.5rem" }}>
        {block.text}
      </p>
    );
  }
  if (block.type === "heading") {
    return (
      <h2 className="text-2xl font-bold mt-12 mb-6 text-gold" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>
        {block.text}
      </h2>
    );
  }
  if (block.type === "info") {
    return (
      <div className="info-panel flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 text-xl md:text-2xl py-6 px-8 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] mb-2">
        <span className="font-bold text-gold min-w-[60px] md:min-w-[70px] flex-shrink-0">{block.label}:</span>
        <span style={{ color: "var(--text-body)" }}>{block.text}</span>
      </div>
    );
  }
  if (block.type === "verse") {
    return <PlaceholderVerse arabic={block.arabic} kurdish={block.kurdish} />;
  }
  return null;
}

function PlaceholderVerse({ arabic, kurdish }: { arabic: string; kurdish: string }) {
  return (
    <div className="verse-block">
      <p
        className="text-2xl md:text-3xl leading-loose mb-3"
        style={{ color: "var(--gold)", fontFamily: "'Vazirmatn', serif", letterSpacing: "0.02em" }}
      >
        {arabic}
      </p>
      <p
        className="text-2xl leading-relaxed"
        style={{
          color: "var(--text-sub)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "0.75rem",
        }}
      >
        {kurdish}
      </p>
    </div>
  );
}
