# aadi-noctis

> Built after midnight.

Personal portfolio of Muhammad Adeel (Aadi). Dark by design — every theme is a flavor of night.

## Stack

- Next.js (App Router, static export) + React 19
- Tailwind CSS v4 (CSS-first `@theme` tokens)
- shadcn/ui + Framer Motion
- Fonts: Clash Display (display), Satoshi (body), JetBrains Mono (code), Noto Nastaliq Urdu (accent)

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build   # static export to out/
```

Deployed on Cloudflare Pages. Either connect the GitHub repo in the Cloudflare dashboard (build command `npm run build`, output directory `out`) or deploy directly:

```bash
npx wrangler pages deploy
```
