# Obaloluwa.dev — Frontend Developer & Web Designer Portfolio

A distinctive, editorial-quality portfolio homepage built with Vite, React,
and Tailwind CSS v4. Features custom interactive typography, a context-aware
cursor, magnetic buttons, and staggered scroll reveals — all implemented
with native browser APIs (no Framer Motion or heavy animation libraries).

## Quick start

```bash
npm install
npm run dev
```

Then open **http://localhost:5173/** in your browser.

## Requirements

- **Node.js 18+** (Node 20+ recommended)
- **npm 9+**

Check your versions with:

```bash
node --version
npm --version
```

## Available scripts

| Command           | What it does                                                |
| ----------------- | ----------------------------------------------------------- |
| `npm install`     | Installs all dependencies                                   |
| `npm run dev`     | Starts the Vite dev server with hot reload                  |
| `npm run build`   | Creates an optimized production build in `dist/`            |
| `npm run preview` | Previews the production build locally                       |

## Configure your contact details

Open `src/data/site.js` and edit these values:

```js
contact: {
  email: 'you@yourdomain.com',
  whatsapp: '2348000000000',           // international format, no "+"
  whatsappMessage: "Hi Obaloluwa, I'd like to discuss a project.",
},
socials: [
  { label: 'GitHub',    url: 'https://github.com/yourname',      handle: '@yourname' },
  { label: 'LinkedIn',  url: 'https://linkedin.com/in/yourname', handle: '/in/yourname' },
  { label: 'Instagram', url: 'https://instagram.com/yourname',   handle: '@yourname.dev' },
],
```

Until these are filled in, the WhatsApp button and footer email link
display tasteful "to be configured" placeholders — no broken links.

## Project structure

```
├── index.html              SEO metadata, fonts, noscript fallback
├── vite.config.js          Vite + React + Tailwind v4 config
├── package.json            Dependencies + scripts
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            React entry point
    ├── App.jsx             Page composition
    ├── index.css           Design tokens + base styles + motion CSS
    ├── data/
    │   └── site.js         ← EDIT THIS: contact, socials, projects
    ├── hooks/
    │   ├── useMagnetic.js             Magnetic button physics
    │   ├── useReveal.js               IntersectionObserver reveals
    │   └── usePointerProximity.js     Hero typography interaction
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx                   Headline + CTAs
        ├── InteractiveType.jsx        DESIGN/BUILD/REFINE/LAUNCH signature
        ├── CustomCursor.jsx           Context-aware cursor (5 states)
        ├── MagneticButton.jsx         Reusable magnetic button
        ├── Reveal.jsx                 Scroll-reveal wrapper
        ├── ProjectCard.jsx            Work section (6 projects)
        ├── Services.jsx
        ├── Process.jsx
        ├── AboutPreview.jsx
        ├── ContactCTA.jsx
        └── Footer.jsx
```

## Design system

Defined as CSS custom properties in `src/index.css` under `@theme`:

| Token              | Value     | Use                              |
| ------------------ | --------- | -------------------------------- |
| `--color-cream`    | `#F7F4ED` | Primary background               |
| `--color-ink`      | `#171717` | Strong typography                |
| `--color-accent`   | `#E53935` | Red accents (use sparingly)      |
| `--color-neutral-200` | `#E8E3D9` | Secondary neutral             |
| `--color-muted`    | `#77736D` | Muted text                       |
| `--font-display`   | Space Grotesk | Headlines                    |
| `--font-body`      | Inter     | Body text                        |
| `--font-mono`      | JetBrains Mono | Labels, metadata           |

## Features

- **Interactive hero typography** — letters in `DESIGN. BUILD. REFINE. LAUNCH.`
  physically respond to nearby pointer movement (desktop only; static on
  touch devices).
- **Context-aware cursor** — five states (default, link, button, project,
  typo) with a floating "VIEW PROJECT ↗" label on project hovers.
  Automatically disabled on touch devices and reduced-motion users.
- **Magnetic buttons** — applied to nav CTA, both hero CTAs, about CTA,
  and contact CTA.
- **Staggered scroll reveals** — IntersectionObserver-based with delays;
  includes a 1.2s safety net so content never stays hidden.
- **Mobile menu** — full-screen overlay with Escape-to-close.
- **Accessibility** — semantic HTML, keyboard nav, visible focus states,
  `prefers-reduced-motion` support, skip-to-content link, ARIA labels on
  all interactive elements.
- **SEO** — title, meta description, canonical URL, Open Graph + Twitter
  cards, theme-color, lang attribute, favicon.

## Performance

- Production build: ~192 kB JS / ~40 kB CSS (gzips to ~58 kB / ~8 kB)
- No animation libraries — all motion uses native browser APIs
- No layout-shifting animations
- Lazy reveal cleanup (observers + rAF properly torn down)

## Deployment

After `npm run build`, deploy the `dist/` folder to any static host:

- **Vercel** — import the repo, framework preset "Vite"
- **Netlify** — build command `npm run build`, publish directory `dist`
- **Cloudflare Pages** — same as Netlify
- **GitHub Pages** — use `vite-plugin-gh-pages` or a CI workflow

When you connect the `obaloluwa.dev` domain, update the `canonical`
URL in `src/data/site.js` (already set to `https://obaloluwa.dev/`).

## Browser support

Tested on the latest Chrome, Firefox, Safari, and Edge. The custom cursor
and magnetic effects gracefully degrade on touch devices and reduced-motion
preferences — all content remains fully usable.

## License

This project is the personal portfolio of Obaloluwa. Feel free to use the
structure and patterns as inspiration, but please do not copy the design
or copy verbatim.
"# obaloluwadev" 
