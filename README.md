# Aaditya Jain — Portfolio

Premium dark portfolio built with **Next.js 14 + Tailwind CSS + Framer Motion + Lucide**, statically exported for GitHub Pages (`www.aadityajain.me`).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Validate

```bash
npm run typecheck
npm run build    # static export → out/
```

## Structure

- `app/` — routes, layout, global CSS (`output: 'export'`)
- `components/` — sections + shadcn-style `ui/` primitives
- `lib/content.ts` — all Founder / Engineer mode copy in one place
- `public/` — resume PDF, images, CNAME, robots, sitemap
