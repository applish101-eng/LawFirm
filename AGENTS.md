# Liberty Legal Service & Research Center

## Stack

- React 19, Vite 8, Tailwind CSS v4, react-router v7, GSAP 3, Lenis 1, lucide-react, react-helmet-async
- Plain JSX (no TypeScript)
- Tailwind v4 via `@tailwindcss/vite` plugin — **no** `tailwind.config.js` or `postcss.config.js`
- Vite 8 default bundler (Rolldown)

## Commands

```sh
npm run dev      # Vite dev server
npm run build    # Production build
npm run lint     # ESLint (js.configs.recommended + react-hooks + react-refresh)
npm run preview  # Preview production build
```

No test framework.

## Domain

Custom domain `libertylegal.com.np` is unavailable. Site lives at **`https://libertylegal.vercel.app`** — all canonical URLs, OG image, sitemap, schema.org data, and SEO component `SITE_URL` use this domain.

## Tailwind v4 specifics

- Config via `@theme inline` in `src/index.css` — no config file
- Theme tokens: `--font-primary`, `--font-secondary`, `--color-primary-{500,600,700}`, `--ease-fluid`, `--ease-snappy`, `--container-8xl: 90rem`, `--breakpoint-3xl: 120rem`
- `max-w-8xl` requires `--container-8xl` in `@theme inline` — Tailwind v4 silently drops unknown utilities
- No custom utility classes; use raw Tailwind classes only

## Routes

All routes live in `App.jsx`. See `src/pages/` for page components.

| Path | Component | Notes |
|------|-----------|-------|
| `/` | Home | Hero + Services (pinned) + Faq |
| `/about` | About | **Double navbar + double footer bug** — imports its own `Navbar` & `Footer` while `App.jsx` renders both globally |
| `/service` | Service | Hero section + reuses Hompage/Services |
| `/contact` | Contact | |
| `/privacy` | Privacy | |
| `/faq` | FaqPage | Standalone FAQ page (has its own `<SEO>`) |
| `/gallery` | Gallery | Wraps FirmGallery component |

## Architecture notes

```
src/
  main.jsx          BrowserRouter > HelmetProvider > App
  App.jsx           Lenis init, phase gating (loader→welcome→ready), Navbar, Routes, Footer
  index.css         @import "tailwindcss" + @theme inline + html { overflow-x: hidden }
  components/       Button, Container, Footer, Navbar, PageSection, SEO, ScrollToTop, Loader, WelcomePopup, FirmGallery
  pages/
    Home.jsx
    About.jsx       imports Navbar + Footer (causes duplication with App.jsx)
    Service.jsx     hero + reuses Hompage/Services
    Contact.jsx
    Privacy.jsx
    FaqPage.jsx
    Gallery.jsx
    Hompage/        (intentional typo) Hero, Services, Cases (unused), Faq
    About/          Section01..Section04
```

- **`Hompage/`**: intentionally misspelled directory. `Cases.jsx` exists but is **not imported** anywhere.
- **SEO conflict**: `Hompage/Faq.jsx` is rendered inside `Home.jsx` — it must **not** have its own `<SEO>` component or it overrides the homepage title. The standalone `/faq` route uses `FaqPage.jsx` which has its own `<SEO>`.
- **ScrollToTop**: runs on every route change. Uses both `window.scrollTo` and `window.lenis.scrollTo`.

## Key conventions

- **Fonts**: `font-primary` (Playfair Display, serif) for labels; `font-secondary` (Plus Jakarta Sans, sans-serif) for body
- **Buttons**: `<Button variant="primary|secondary|outline|ghost">` with props `size`, `width`, `iconRight`, `iconLeft`, `responsiveVisibility`, `iconRightClassName`
- **Layout**: `<Container>` (`max-w-8xl` wrapper), `<PageSection variant="hero|default|large|cta">`
- **SEO**: `<SEO title="..." description="..." canonical="..." />` on every page. `SITE_URL` in `src/components/SEO.jsx` must match the live domain.
- **Smooth scroll**: Lenis initialized in `App.jsx`, exposed globally as `window.lenis`. Use `window.lenis.scrollTo(el, { offset })` for programmatic scroll.
- **Lenis + ScrollTrigger sync**: Must call `lenis.on("scroll", ScrollTrigger.update)` in `App.jsx` — without this, GSAP pins trigger at wrong positions.
- **Loader scroll block**: Use `lenis.stop()`/`lenis.start()` only — do **not** manipulate `body.style.overflow` (causes scrollbar glitches).
- **Contact form**: In Footer. Submits via WhatsApp link to `+977 9851227006`. Does **not** collect emails. Checkbox links to Privacy Policy.
- **Loader + WelcomePopup**: `App.jsx` phases through `"loading"` → `"welcome"` → `"ready"` on first visit. Lenis is stopped until `"ready"`.
- **Animation pattern**: GSAP with `gsap.context()` + `ctx.revert()` cleanup inside `useEffect`. ScrollTrigger registered per-file. Preferred easing: `power4.out`, durations 1.2–1.6s.
- **Navbar background**: Home page uses black-at-top / light-after-scroll; all other pages use light `bg-[#F5F5F5]`.
- **Navbar mobile menu**: Uses `w-full` (not `w-screen` — 100vw omits scrollbar width, causing horizontal overflow).
- **Horizontal overflow guard**: `html { overflow-x: hidden }` in `index.css`. Avoid `w-screen`.
- **Stats labels**: Long text needs `break-words text-balance` to prevent overflow on narrow screens.
- **Unused React imports**: Pre-existing lint `no-unused-vars` on `import React` throughout — not worth fixing.

## Deployment (Vercel)

- `vercel.json` uses a rewrite regex `"/((?!.*\\.\\w+$).*)"` — matches routes without file extensions only. This ensures `sitemap.xml`, `robots.txt`, and static assets are served directly instead of being caught by the SPA fallback.
- `public/` contains favicon files (`logoface.svg`, `logoface.png`), `logo-og.svg`, `robots.txt`, and `sitemap.xml`.
- **Favicon gotcha**: `logoface.svg` uses `fill="#1a1a2e"` (dark navy). If fills are `white`, the icon becomes invisible on light browser tabs and shows the default globe.
- Google Search Console verified via HTML meta tag (URL prefix method for `https://libertylegal.vercel.app`).
- Submit `sitemap.xml` in Search Console after each domain change.

## MCP

Figma MCP configured in `opencode.json` via `figma-developer-mcp` with `--stdio` transport. Requires `FIGMA_API_KEY` env var.
