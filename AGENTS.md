# Liberty Legal Service & Research Center

## Stack

- React 19, Vite 8, Tailwind CSS v4, react-router v7, GSAP, Lenis, lucide-react
- Plain JSX (no TypeScript)
- Tailwind v4 via `@tailwindcss/vite` plugin — **no** `tailwind.config.js` or `postcss.config.js`

## Commands

```sh
npm run dev      # Vite dev server
npm run build    # Production build
npm run lint     # ESLint (js.configs.recommended + react-hooks + react-refresh)
npm run preview  # Preview production build
```

No test framework is installed.

## Tailwind v4 specifics

- Config is done via `@theme` directives in `src/index.css` — NOT via `tailwind.config.js`
- Theme tokens defined: `--font-primary`, `--font-secondary`, `--color-primary-{500,600,700}`, `--ease-fluid`, `--ease-snappy`
- Utility classes (`.section-label`, `.section-heading`, `.btn-primary`, `.btn-icon`, `.card-faq`, `.form-input`, etc.) defined in `src/index.css`
- Use these utility classes instead of raw Tailwind to keep the design consistent

## Architecture

```
src/
  main.jsx          # Entry point, wraps App in BrowserRouter + StrictMode
  App.jsx           # Lenis init, Cursor, Navbar, Routes
  index.css         # Tailwind v4 theme + design system utilities
  components/
    Cursor.jsx      # GSAP-powered custom cursor (mix-blend-difference)
    Navbar.jsx      # Fixed navbar with hide-on-scroll-down, mobile overlay
    Footer.jsx      # Contact form + footer links
  pages/
    Home.jsx         # Hero + Services + Faq + Footer
    About.jsx        # Section01..Section04 + Navbar + Footer
    Service.jsx      # Stub (empty fragment)
    Contact.jsx      # Stub ("Contact")
    Privacy.jsx      # Stub ("Privacy")
    Hompage/
      Hero.jsx      # Full-bleed image, gradient overlays, stats, CTA
      Services.jsx  # Service listings (individuals + companies), bottom CTA card
      Cases.jsx     # Case study cards (not used in current Home routing)
      Faq.jsx       # FAQ accordion items with CTA
    About/           # Section components for About page
```

## Key conventions

- **Fonts**: `font-primary` (Playfair Display, serif) for section labels; `font-secondary` (Plus Jakarta Sans, sans-serif) for everything else
- **Sections**: wrapped in `<section className="section-surface">` with `px-6 py-10` padding
- **Buttons**: use `btn-primary` (gold bg), `btn-ghost` (on dark), `btn-icon` (gold + arrow), or `btn-outline` (white border)
- **Navigation**: Navbar is inside page components (not in App layout). About.jsx also has its own Navbar.
- **Custom cursor**: `body { cursor: none }` + GSAP white dot cursor. All interactive elements need `cursor-pointer`.
- **Smooth scroll**: Lenis with `duration: 2, smoothWheel: true` initialized in App.jsx

## Known issues

- `src/pages/About/Section03.jsx` is empty — will crash the About page with `does not provide an export named 'default'`
- `src/pages/Service.jsx` returns an empty fragment — needs content

## MCP

- Figma MCP configured in `opencode.json` using `figma-developer-mcp` with `--stdio` transport. Requires `FIGMA_API_KEY` env var.
