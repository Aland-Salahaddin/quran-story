export default function IntroNotice() {
  return (
    <section className="glass p-8 md:p-10 space-y-7 anim-up d-2">

      {/* ── Header ── */}
      <div className="flex items-start gap-4">
        <span className="text-2xl mt-0.5 flex-shrink-0">📌</span>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gold leading-snug">
            پێشەکییەکی گرنگ پێش دەستپێکردنی زنجیرەکە
          </h2>
          <p className="mt-2 text-base leading-loose" style={{ color: "var(--text-sub)" }}>
            بۆ ئەوەی لە کاتی خوێندنەوەی مێژووی دابەزینی قورئاندا تووشی هیچ لێڵییەک نەبین، پێویستە ئەم چەند خاڵە وەک بنەمایەکی سەرەکی لە مێشکماندا بێت:
          </p>
        </div>
      </div>

      {/* ── Divider ── */}
      <hr style={{ borderColor: "var(--border)" }} />

      {/* ── Points ── */}
      <ol className="space-y-6">
        <Point
          n="١"
          title="ئایەتەکان هەمیشە بەیەکەوە دانەبەزیون"
          label="تێبینی سەرەکی:"
          body="کاتێک دەڵێین سورەتێک لەم قۆناغە یان لەم بەروارەدا هاتووەتە خوارەوە، مەرج نییە هەموو ئایەتەکانی ئەو سورەتە لە یەک کات و یەک ڕۆژدا دابەزیبن. زۆرجار چەند ئایەتێکی سەرەتای سورەتێک لەبەر ڕووداوێک دابەزیون، و ئایەتەکانی تری کۆتایی سورەتەکە دوای چەند مانگێک یان تەنانەت چەند ساڵێک دواتر هاتوونەتە خوارەوە."
        />
        <Point
          n="٢"
          title="جیاوازی نێوان «کاتی دابەزین» و «شوێنی نووسین»"
          body="قورئان لە ڕووی مێژووییەوە (ئایەت ئایەت) بەپێی ڕووداوەکان دابەزیوە، بەڵام پاشان بە فەرمانی خوایی و ڕێنوێنی جبرائیل، ئایەتەکان لەناو سورەتەکاندا ڕیزکراون بۆ ئەوەی ماناکەیان تەواو بێت. بۆیە لەم زنجیرەیەدا، ئێمە تەنها باسی ئەو بەشانە دەکەین کە لەو کاتە مێژووییەدا دابەزیون، و بەشەکانی تر جێدەهێڵین بۆ کاتی خۆیان."
        />

        {/* Point 3 — two sub-items */}
        <li className="flex gap-4">
          <span
            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{ background: "rgba(212,168,83,0.12)", color: "var(--gold)" }}
          >
            ٣
          </span>
          <div className="flex-1 space-y-2">
            <p className="font-semibold" style={{ color: "var(--text-body)" }}>
              چەمکی «مەككی» و «مەدینی»
            </p>
            <p className="text-base leading-loose" style={{ color: "var(--text-sub)" }}>
              <span className="font-semibold" style={{ color: "var(--text-body)" }}>سورەتە مەككییەکان: </span>
              ئەو سورەتانەن کە پێش کۆچکردنی پێغەمبەر (د.خ) بۆ مەدینە دابەزیون (گرنگی بە بیروباوەڕ، ناخی مرۆڤ، و ناسینی خوا دەدەن).
            </p>
            <p className="text-base leading-loose" style={{ color: "var(--text-sub)" }}>
              <span className="font-semibold" style={{ color: "var(--text-body)" }}>سورەتە مەدینییەکان: </span>
              ئەو سورەتانەن کە دوای کۆچکردن دابەزیون (گرنگی بە یاسا، کۆمەڵگە، و ڕێکخستنی دەوڵەت دەدەن).
            </p>
          </div>
        </li>

        <Point
          n="٤"
          title="گرنگیی «هۆکاری دابەزین» (أسباب النزول)"
          body="قورئان پەرتووکێکی تیۆریی وشک نییە؛ بەڵکو وەڵامدەرەوەی واقیعی ژیانی خەڵک بووە. هەر بۆیە زۆربەی ئایەتەکان کاتێک دابەزیون کە کێشەیەک، پرسیارێک، یان ڕووداوێکی ڕاستەقینە لە مێشک یان ژیانی هاوەڵاندا ڕوویداوە."
        />
      </ol>

      {/* ── CRITICAL ALERT — 610 AD ── */}
      <div
        className="rounded-xl p-5 md:p-6 space-y-3"
        style={{
          background: "rgba(234,88,12,0.1)",
          border: "1px solid rgba(234,88,12,0.3)",
        }}
      >
        {/* Alert label */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"
            style={{ color: "#FB923C" }}>
            <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold tracking-wide" style={{ color: "#FB923C" }}>
            تێبینی مێژوویی
          </span>
        </div>

        {/* Body text */}
        <p className="text-base leading-loose" style={{ color: "#E2E8F0" }}>
          بەم شێوازە، ئێمە لەمەودوا ڕێک لەگەڵ هێڵی کاتیدا دەڕۆین. لە ئەڵقەی یەکەمدا تەنها{" "}
          <strong style={{ color: "#FED7AA", fontWeight: 700 }}>٥ ئایەتەکەی سەرەتای سورەتی عەلەق</strong>{" "}
          باس دەکەین، چونکە{" "}
          <strong style={{ color: "#FED7AA", fontWeight: 700 }}>تەنها ئەو پێنج ئایەتە لە ساڵی ٦١٠ زایینیدا بوونیان هەبوو</strong>.
        </p>
      </div>
    </section>
  );
}

function Point({
  n, title, label, body,
}: {
  n: string; title: string; label?: string; body: string;
}) {
  return (
    <li className="flex gap-4">
      <span
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
        style={{ background: "rgba(212,168,83,0.12)", color: "var(--gold)" }}
      >
        {n}
      </span>
      <div className="flex-1">
        <p className="font-semibold mb-1" style={{ color: "var(--text-body)" }}>{title}</p>
        <p className="text-base leading-loose" style={{ color: "var(--text-sub)" }}>
          {label && <span className="font-semibold" style={{ color: "var(--text-body)" }}>{label} </span>}
          {body}
        </p>
      </div>
    </li>
  );
}
