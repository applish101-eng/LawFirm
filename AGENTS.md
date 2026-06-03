# Liberty Legal Service & Research Center

## Stack

- React 19, Vite 8, Tailwind CSS v4, react-router v7, GSAP, Lenis, lucide-react, react-helmet-async
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

- Config is done via `@theme inline` directives in `src/index.css` — NOT via `tailwind.config.js`
- Theme tokens: `--font-primary`, `--font-secondary`, `--color-primary-{500,600,700}`, `--ease-fluid`, `--ease-snappy`
- No custom utility classes exist in CSS anymore; use raw Tailwind classes

## Architecture

```
src/
  main.jsx          # Entry point, wraps App in BrowserRouter + HelmetProvider + StrictMode
  App.jsx           # Lenis init, Cursor, Navbar (layout), Routes, Footer
  index.css         # Tailwind v4 @theme + custom cursor CSS
  components/
    Button.jsx      # Reusable button (variant, size, width, iconLeft/iconRight)
    Container.jsx   # Simple max-width wrapper
    Cursor.jsx      # GSAP-powered custom cursor (mix-blend-difference)
    Footer.jsx      # Contact form (sends via WhatsApp) + links + privacy
    Navbar.jsx      # Fixed navbar with hide-on-scroll-down, mobile overlay
    PageSection.jsx # Section wrapper (variant: hero/default/large/cta)
    SEO.jsx         # react-helmet-async meta tags (title, description, canonical, OG)
  pages/
    Home.jsx        # Hero + Services + Faq
    About.jsx       # Section01..Section04 + its own Navbar (rendered twice on page)
    Service.jsx     # Full hero section + Services listing
    Contact.jsx     # Contact info + social links
    Privacy.jsx     # Stub ("Privacy")
    Hompage/        # Intentionally misspelled directory name
      Hero.jsx      # Full-bleed image, gradient overlays, stats, CTA
      Services.jsx  # Service listings for individuals & companies
      Cases.jsx     # Case study cards (not routed in current App)
      Faq.jsx       # FAQ accordion items
    About/          # Section components for About page
```

## Key conventions

- **Fonts**: `font-primary` (Playfair Display, serif) for labels; `font-secondary` (Plus Jakarta Sans, sans-serif) for body
- **Buttons**: use `<Button variant="primary|secondary|outline|ghost">` with props `size`, `width`, `iconRight`, `iconLeft`
- **Layout helpers**: `<Container>` (max-width wrapper), `<PageSection variant="hero|default|large|cta">`
- **SEO**: use `<SEO title="..." description="..." canonical="..." />` on every page
- **Navigation**: Navbar is rendered in App.jsx layout wrapping Routes. About.jsx also renders its own Navbar (causes a double Navbar on /about)
- **Custom cursor**: `body { cursor: none }` inside `@media (pointer: fine)` — all interactive elements need `cursor-pointer`
- **Smooth scroll**: Lenis (`duration: 2, smoothWheel: true`) initialized in App.jsx; exposed via `window.lenis`
- **Contact form**: in Footer, submits via WhatsApp link to `+977 9851227006`
- **Directory name quirk**: homepage sections live in `Hompage/` (typo preserved)

## MCP

- Figma MCP configured in `opencode.json` using `figma-developer-mcp` with `--stdio` transport. Requires `FIGMA_API_KEY` env var.
