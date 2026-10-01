# ByteSpace — E-Learning Platform UI

**Live Demo:** [byte-space-app.vercel.app](https://byte-space-app.vercel.app)

A pixel-perfect, fully responsive frontend for an online course marketplace. Built as a frontend assessment project to demonstrate real-world UI development with the latest web technologies.

---


> **Note:** This is a frontend-only project. The UI is fully built out, but auth logic and data fetching are intentionally left as future integration points.

---

## Live Features

**Landing Page (`/dashboard`)**
- Hero section with a full-width blue banner, headline copy, a course search bar, and floating stat cards (students, progress, courses)
- Infinite-scroll partner logo marquee strip
- Course catalog section with 19 filterable category chips and a 3-column course card grid
- "Why ByteSpace" section with an animated count-up for key stats (12,000 students, 70+ courses, 16 creators) — triggered on scroll via `IntersectionObserver`
- Creator tools feature section with a visual and a bullet-point breakdown
- Creator CTA banner
- Testimonials section with 3 real-looking reviewer cards

**Auth Pages (`/login`, `/register`)**
- Split-panel layout: decorative course card collage on the left (desktop), clean form card on the right
- Controlled inputs with inline validation-ready structure
- Custom password field with show/hide toggle and CSS asterisk masking via `-webkit-text-security`
- Social sign-in buttons (UI placeholder)

**404 Page (any unmatched route)**
- Full-viewport blue hero section with the same grid-texture background as the rest of the app
- Giant `404` display text in Poppins SemiBold with a vertical green-to-transparent gradient fade, overlapping the heading beneath it
- Heading, subtext, and a "Back to Home" CTA pill button
- Implemented via `src/app/not-found.tsx` — Next.js App Router's root-level not-found convention, automatically triggered for all unmatched URLs with a proper `404` HTTP status

**Navbar & Footer**
- Fixed top navbar with desktop and mobile variants (hamburger menu with animated toggle)
- Footer with newsletter input, 3-column sitemap links, and dynamic copyright year

---

## Tech Stack

| Area | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Fonts | Satoshi (local variable font) + Poppins (Google Fonts) |
| Compiler | React Compiler (auto-memoization) |
| Package Manager | pnpm 10 |
| Linting | ESLint 9 (flat config) |

**A few things worth calling out specifically:**

- **Tailwind CSS v4** — No `tailwind.config.js`. All design tokens (colors, fonts, spacing, border radii) live in a single `@theme` block inside `globals.css`. This is the new v4 approach and it keeps the design system in one place.
- **React 19 + React Compiler** — The compiler is enabled via `reactCompiler: true` in `next.config.ts`. It handles memoization automatically, so there's no need for manual `useMemo` or `useCallback` calls throughout the codebase.
- **Zero external UI dependencies** — No shadcn/ui, no MUI, no Radix. Every component is built from scratch with Tailwind.
- **Local variable font** — Satoshi is loaded as a local `.woff2`/`.woff` variable font, avoiding any network request for the body typeface.

---

## Design System

The entire visual language is defined in `src/app/globals.css`:

```css
:root {
  --blue-primary: #003BE2;   /* brand blue — backgrounds, buttons, nav */
  --green-accent: #CBFC01;   /* accent green — CTAs, active states, highlights */
  --white:        #FFFFFF;
  --dark:         #0D0D0D;
  --text-muted:   #E5E6E8;
}
```

**Fonts:**
- **Satoshi** (`--font-sans`) — body text, UI labels, descriptions
- **Poppins** (`--font-display`) — headings, numbers, prominent text

**Responsive strategy:** Rather than using Tailwind's default `sm/md/lg/xl` breakpoints, each component steps through fine-grained custom breakpoints (`min-[360px]`, `min-[480px]`, `min-[720px]`, `min-[980px]`, `min-[1200px]`, `min-[1440px]`, etc.) to achieve precise, pixel-accurate scaling at every viewport width.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout — fonts, metadata, body
│   ├── globals.css                 # Design tokens + Tailwind + custom utilities
│   ├── page.tsx                    # Root redirect → /dashboard
│   ├── not-found.tsx               # Global 404 page — all unmatched routes
│   ├── (auth)/                     # Auth route group (no navbar/footer)
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   └── (public)/                   # Public route group (with navbar/footer)
│       └── dashboard/page.tsx
├── components/
│   ├── navbar/                     # Desktop navbar + mobile hamburger menu
│   ├── footer/                     # Footer with sitemap links + newsletter
│   ├── auth/
│   │   ├── shared/                 # AuthFormWrapper, AuthInput, AuthCollage
│   │   ├── login/                  # LoginForm
│   │   └── register/               # RegisterForm
│   └── dashboard/
│       ├── hero-section-1/         # Main hero (headline, search, visual, floating cards)
│       ├── hero-section-2/         # Course catalog (chips, cards, categories)
│       ├── hero-section-3/         # Growth section + creator tools
│       └── hero-section-4/         # Creator CTA + testimonials
├── lib/
│   └── svg/dashboard/              # Inline SVG icon components
└── fonts/
    └── Satoshi-Variable.woff2/.woff
```

Route groups keep auth and public layouts fully separate — auth pages are standalone full-viewport experiences with no shared chrome.

---

## Getting Started

To run the project in your local machine Make sure you have [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io) installed.

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The root URL redirects automatically to `/dashboard`.

Other available routes:
- `/dashboard` — main landing page
- `/login` — login page
- `/register` — registration page
- any other path — custom 404 page

---

## Author

**Md Mahfuzur Rahman**  
Full-stack Developer

---

*Built with React 19, Next.js 16, Tailwind CSS v4, and TypeScript 5.*
