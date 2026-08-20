# ZodiacPluss Website (figma-make-app)

React 19 + Vite 8 + Tailwind CSS v4 project for **ZodiacPluss - Your Personal Wellness Companion**.

---

## 🚀 Development Server

A Vite development server is **already running** on `$PORT` (default 8450 / 8443). You don't need to start it manually.

- **Preview URL:** The user can access the running app through the preview panel or at `http://localhost:8450`
- **Hot Reload (HMR):** Changes to source files are reflected immediately

---

## 📁 Detailed Folder & File Structure

```
ZodiacPluss-Website2/
├── .figma/                          # Figma-generated project assets and metadata
│   ├── attachments/                 # Exported screenshots / design attachments
│   └── make/
│       └── site.json                # Site metadata, SEO details, and Figma config
├── .gitattributes                  # Git attribute rules
├── .gitignore                      # Git ignore configuration
├── .mise.toml                      # Toolchain versions (Node.js, pnpm)
├── .npmrc                          # npm config
├── AGENTS.md                       # Project instructions / agent context
├── index.html                      # Vite HTML entry point shell (#root)
├── package.json                    # Dependencies, scripts, and build metadata
├── package-lock.json               # NPM lockfile
├── pnpm-lock.yaml                  # pnpm lockfile
├── tsconfig.json                   # TypeScript compiler rules and path mappings
├── vite.config.ts                  # Vite config (React + Tailwind v4 alias @ -> /src)
├── imports/                        # Generated import assets from design tooling
│   ├── index.tsx
│   ├── svg-2q7jlchzeu.ts
│   ├── svg-8pohxvzon9.ts
│   ├── svg-ct2kapt684.ts
│   ├── svg-o5qymtqdez.ts
│   └── ...
├── src/                            # Application source code
│   ├── App.tsx                     # Root app state router + theme state
│   ├── index.css                   # Tailwind entry and global theme styling
│   ├── main.tsx                    # React bootstrap entry point
│   ├── vite-env.d.ts               # Vite TS declarations
│   ├── components/                 # Reusable UI blocks and section components
│   │   ├── AboutSection.tsx
│   │   ├── AppShowcaseSection.tsx
│   │   ├── BrandsMarquee.tsx
│   │   ├── CredentialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HomeAboutTeamSection.tsx
│   │   ├── MobileBottomNav.tsx
│   │   ├── Navbar.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ZodiacMissionSection.tsx
│   ├── imports/                    # Local image/media asset bundles
│   │   ├── Component114/
│   │   │   ├── index.tsx
│   │   │   └── svg-o5qymtqdez.ts
│   │   ├── Component115/
│   │   │   ├── index.tsx
│   │   │   └── svg-2q7jlchzeu.ts
│   │   ├── Component115-1/
│   │   │   ├── index.tsx
│   │   │   └── svg-8pohxvzon9.ts
│   │   ├── Frame471/
│   │   │   ├── index.tsx
│   │   │   └── svg-ct2kapt684.ts
│   │   ├── Frame474/
│   │   │   └── index.tsx
│   │   ├── Zodiac_Colored_Logo_croped-removebg-preview.png
│   │   ├── watermark-removed-generate_a_video_of_this_image.mp4
│   │   ├── image-1.png
│   │   ├── image-2.png
│   │   ├── image-3.png
│   │   ├── image-4.png
│   │   ├── image-5.png
│   │   ├── image-6.png
│   │   ├── image-7.png
│   │   ├── image-8.png
│   │   ├── image-9.png
│   │   ├── image-10.png
│   │   ├── image-11.png
│   │   ├── image.png
│   │   └── Screenshot_2026-08-01_221144.png
│   │   └── Screenshot_2026-08-01_221218.png
│   │   └── Screenshot_2026-08-01_221239.png
│   └── pages/                     # Route/state page screens
│       ├── AboutUsPage.tsx
│       ├── BookSessionPage.tsx
│       ├── CareerPage.tsx
│       ├── ExpertsPage.tsx
│       ├── HomePage.tsx
│       ├── PortfolioPage.tsx
│       └── ServicesPage.tsx
├── dist/                           # Build output (generated; usually ignored in source work)
└── node_modules/                   # Installed dependencies (generated; not source code)
```

---

## 🛠 Project Architecture & Key Systems

### 1. State-Based Page Navigation
The app uses a lightweight, client-state router inside [App.tsx](file:///e:/ZodiacPluss-Website2/src/App.tsx) without needing full reloads:
- Current active page state: `'Home' | 'About Us' | 'Services' | 'Experts' | 'Resources' | 'Book' | 'Career'`
- Alias mapping object (`pageMap`) resolves footer/nav shortcuts (e.g. `'About'` $\rightarrow$ `'About Us'`).

### 2. Day / Night (Dark Mode) Theme System
- Toggled via the sun/moon icon button in [Navbar.tsx](file:///e:/ZodiacPluss-Website2/src/components/Navbar.tsx).
- Applies a root `.dark` class to the container in [App.tsx](file:///e:/ZodiacPluss-Website2/src/App.tsx).
- Styled globally in [index.css](file:///e:/ZodiacPluss-Website2/src/index.css) using dark theme variables and CSS overrides:
  - Day Mode: Light lavender/white background (`#f8f6ff`), deep purple text (`#1e0d40`).
  - Night Mode: Cosmic dark background (`#0e0a1a` / `#120e22`), soft lavender text (`#e9d5ff`), teal accents (`#2dd4bf`).

### 3. Design System & Styling
- **Tailwind CSS v4** loaded via `@tailwindcss/vite` in `vite.config.ts` and `@import 'tailwindcss';` in `index.css`.
- **Typography:** Google Fonts loaded in `index.css` (Playfair Display, Inter, Sora, Playball, Sour Gummy, Song Myung).

---

## 📦 Dependencies

- **Runtime:** React 19 & React DOM 19
- **Styling:** Tailwind CSS v4 with `@tailwindcss/vite`
- **Build Tooling:** Vite 8, TypeScript 5.7, `@vitejs/plugin-react`
- **Code Formatting:** oxfmt

---

## 🎨 Code Quality & Style Guidelines

- **String Escaping:** Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape single quotes. Unescaped apostrophes in single-quoted strings break the Vite build.
- **Component Exports:** Export components as default exports (`export default function ComponentName()`).
- **JSX Validation:** Ensure all JSX elements are closed and braces are balanced.
- **Tailwind Utility Usage:** Use Tailwind utility classes directly in JSX; place custom design tokens or global theme overrides in `src/index.css`.
