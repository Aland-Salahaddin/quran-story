# 📁 Audio Files Directory

Drop your `.mp3` or `.wav` narration files here.

## Naming Convention

Each audio file must match the `audioSrc` field in `data/episodes.json`.

| Episode | Filename          | JSON field                   |
|---------|-------------------|------------------------------|
| Ep. 01  | `episode-01.mp3`  | `"audioSrc": "/audio/episode-01.mp3"` |
| Ep. 02  | `episode-02.mp3`  | `"audioSrc": "/audio/episode-02.mp3"` |
| Ep. 03  | `episode-03.mp3`  | `"audioSrc": "/audio/episode-03.mp3"` |

## Steps to add new audio daily

1. Copy your `.mp3` file into this folder as `episode-XX.mp3`
2. Open `data/episodes.json`
3. Find the matching episode object and confirm `audioSrc` matches your filename
4. Set `"published": true` for that episode
5. Run `npm run dev` (or the server will hot-reload automatically)

## Supported Formats
- `.mp3` — recommended (universal browser support)
- `.wav` — larger file size, uncompressed
- `.ogg` — good compression, not supported in Safari without polyfill

## Notes
- The audio player uses the HTML5 `<audio>` element with `Accept-Ranges: bytes`
  so seeking works correctly even for large files.
- Files are served statically from `/public/audio/` by Next.js.
