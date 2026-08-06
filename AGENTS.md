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
├── index.html                  # Vite HTML entry point shell (#root)
├── package.json                # Dependencies, scripts, and build metadata
├── vite.config.ts              # Vite configuration (React, Tailwind v4, alias @ -> /src)
├── tsconfig.json               # TypeScript compiler rules and path mappings
├── .mise.toml                  # Toolchain versions (Node.js, pnpm)
├── .figma/                     # Figma Make site configuration & meta assets
│   └── make/
│       └── site.json           # Site title, metadata, SEO configuration
└── src/                        # Source directory
    ├── main.tsx                # Main React entrypoint; imports index.css & mounts App.tsx
    ├── App.tsx                 # Root application component; stateful page routing & theme provider
    ├── index.css               # Global CSS styling, Tailwind v4 imports, and dark theme design tokens
    ├── vite-env.d.ts           # Vite TypeScript environment declarations
    │
    ├── components/             # Reusable & page section components
    │   ├── Navbar.tsx          # Top navigation bar with logo, page links, and Day/Night theme toggle button
    │   ├── MobileBottomNav.tsx # Glassmorphism sticky bottom navigation bar for mobile viewports
    │   ├── HeroSection.tsx     # Hero banner featuring auto-playing MP3/MP4 background video & CTA buttons
    │   ├── AboutSection.tsx    # "Guidance that understands you" interactive carousel & feature list
    │   ├── AppShowcaseSection.tsx # Platform showcase featuring mobile app screens & feature grid
    │   ├── ZodiacMissionSection.tsx # 3-band layout (Dark Hero, White About, Dark Mission pillars)
    │   ├── TestimonialsSection.tsx # "Trusted by seekers" user reviews and star rating cards
    │   ├── CredentialsSection.tsx # Verified certifications, medical licensures, & trust badges
    │   ├── FAQSection.tsx      # Expandable accordion for common user questions
    │   └── Footer.tsx          # Full site footer with gradient background, newsletter, links, & credits
    │
    ├── pages/                  # Page-level components
    │   ├── HomePage.tsx        # Home landing page assembling hero, about, showcase, mission, & testimonials
    │   ├── AboutUsPage.tsx     # About Us page highlighting brand journey, founder, and team experts
    │   ├── ServicesPage.tsx    # Comprehensive list of astrology, therapy, and horoscope services
    │   ├── ExpertsPage.tsx     # Verified astrologers, therapists, and spiritual counselors directory
    │   ├── ResourcesPage.tsx   # Articles, guides, tarot card readings, and educational content
    │   ├── BookSessionPage.tsx # Interactive session booking form and expert consultation selection
    │   └── CareerPage.tsx      # Job listings for clinical psychologists, EAP counselors, & astrologers
    │
    └── imports/                # Media assets, design graphics, icons, and video files
        ├── watermark-removed-generate_a_video_of_this_image.mp4 # Hero background video
        ├── Zodiac_Colored_Logo_croped-removebg-preview.png # Official ZodiacPluss logo graphic
        ├── Frame471/           # Figma imported vector paths and testimonial graphics
        ├── Frame474/           # Figma UI vector components
        ├── Component114/       # Figma asset bundle
        ├── Component115/       # Figma asset bundle
        └── image-1.png ... image-11.png # App preview screenshots, illustrations, & asset images
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
