# Liberty Legal Service & Research Center

## Stack

- React 19, Vite 8, Tailwind CSS v4, react-router v7, GSAP 3, Lenis 1, lucide-react, react-helmet-async
- Plain JSX (no TypeScript)
- Tailwind v4 via `@tailwindcss/vite` plugin — **no** `tailwind.config.js` or `postcss.config.js`
- Bundler: rolldown (Vite 8 default)

## Commands

```sh
npm run dev      # Vite dev server
npm run build    # Production build
npm run lint     # ESLint (js.configs.recommended + react-hooks + react-refresh)
npm run preview  # Preview production build
```

No test framework installed.

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
| `/about` | About | Renders its own Navbar → double navbar bug |
| `/service` | Service | Hero section + reuses Hompage/Services |
| `/contact` | Contact | |
| `/privacy` | Privacy | |
| `/faq` | FaqPage | Standalone FAQ page |
| `/gallery` | Gallery | Wraps FirmGallery component |

## Architecture notes

`src/` layout:
```
src/
  main.jsx          BrowserRouter > HelmetProvider > App
  App.jsx           Lenis init, phase gating (loader→welcome→ready), Navbar, Routes, Footer
  index.css         @import "tailwindcss" + @theme inline + html { overflow-x: hidden }
  components/       Reusable UI (Button, Container, Footer, Navbar, PageSection, SEO, ScrollToTop, Loader, WelcomePopup, FirmGallery)
  pages/
    Home.jsx
    About.jsx       imports its own Navbar + Section01..Section04
    Service.jsx     hero + reuses Hompage/Services
    Contact.jsx
    Privacy.jsx
    FaqPage.jsx
    Gallery.jsx
    Hompage/        (typo preserved) Hero, Services, Cases (unused), Faq
    About/          Section01..Section04
```

- **Double navbar on /about**: About.jsx renders `<Navbar />` while App.jsx also renders it globally.
- **Hompage directory**: intentionally misspelled (`Hompage/` not `Homepage/`); Cases.jsx exists but is **not imported** anywhere.
- **ScrollToTop**: runs on every route change via `useLocation`, uses both `window.scrollTo` and `window.lenis.scrollTo`.

## Key conventions

- **Fonts**: `font-primary` (Playfair Display, serif) for labels; `font-secondary` (Plus Jakarta Sans, sans-serif) for body
- **Buttons**: use `<Button variant="primary|secondary|outline|ghost">` with props `size`, `width`, `iconRight`, `iconLeft`, `responsiveVisibility`, `iconRightClassName`
- **Layout**: `<Container>` (max-width wrapper, uses `max-w-8xl`), `<PageSection variant="hero|default|large|cta">`
- **SEO**: `<SEO title="..." description="..." canonical="..." />` on every page
- **Smooth scroll**: Lenis initialized in App.jsx; exposed globally as `window.lenis`. Use `window.lenis.scrollTo(el, { offset })` for programmatic scroll. ScrollToTop also uses it.
- **Lenis + ScrollTrigger sync**: Must call `lenis.on("scroll", ScrollTrigger.update)` in App.jsx. Without this, pins trigger at wrong positions.
- **Loader scroll block**: Use `lenis.stop()`/`lenis.start()` only — do **not** manipulate `body.style.overflow` (causes scrollbar glitches).
- **Contact form**: In Footer. Submits via WhatsApp link to `+977 9851227006`. Does NOT collect emails. Checkbox links to Privacy Policy.
- **Loader + WelcomePopup**: App.jsx phases through `loading` → `welcome` → `ready` on first visit.
- **Animation pattern**: GSAP with `gsap.context()` + `ctx.revert()` cleanup inside `useEffect`. ScrollTrigger registered per-file with `gsap.registerPlugin(ScrollTrigger)`. Preferred easing: `power4.out`, durations 1.2–1.6s.
- **Navbar background**: Home page uses black-at-top / light-after-scroll; all other pages always use light `bg-[#F5F5F5]`.
- **Navbar mobile menu**: Uses `w-full` (not `w-screen` — `100vw` doesn't account for scrollbar width and causes horizontal overflow).
- **Horizontal overflow guard**: `html { overflow-x: hidden }` in `index.css`. `w-screen` avoided in favor of `w-full`.
- **Stats labels**: Long text in grid columns needs `break-words text-balance` to prevent overflow on narrow screens.
- **Unused React imports**: Pre-existing lint `no-unused-vars` errors on `import React` throughout — not worth fixing.

## MCP

Figma MCP configured in `opencode.json` via `figma-developer-mcp` with `--stdio` transport. Requires `FIGMA_API_KEY` env var.
