# Personal Portfolio v2 — Anish Budida

A personal portfolio website showcasing projects, experience, and skills. Built with a dark, cinematic aesthetic featuring an animated background video, smooth Motion-powered transitions, and an interactive split-panel layout.

## What It Contains

- **About Me** — Bio, education (Georgia Tech, BS CS), and contact/social links
- **Projects** — 7 featured projects with image thumbnails, descriptions, and skill tags, with an animated detail view per project
- **Experience** — Work experience and organizations (GROWER, Georgia-Pacific, HexLabs) in the same card-based layout
- **Skills** — Categorized skill tree spanning frontend, backend, ML/AI, mobile, cloud, and more
- **Credits** — Acknowledgments for assets and tools used

Navigation is driven by a left-panel nav that slides in the corresponding section panel on the right without leaving the page.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19 + SSR) |
| Router | [TanStack Router](https://tanstack.com/router) (file-based) |
| Language | TypeScript 6 |
| Bundler | Vite 8 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`, no config file) |
| Animations | [Motion](https://motion.dev/) (`motion/react`) |
| Components | Shadcn UI (new-york style, zinc base) + CVA for variants |
| Icons | Lucide React |
| Server | Nitro (used for Vercel adapter) |
| Testing | Vitest + Testing Library |
| Linting | ESLint (`@tanstack/eslint-config`) + Prettier |
| Package Manager | pnpm |

## Deployment

Deployed to **Vercel** using the Nitro server adapter. The build outputs via `vite build` and Nitro handles the serverless function layer for SSR.

```bash
# Local development
npm run dev        # dev server on port 3000

# Production build
npm run build
npm run preview    # preview the production build locally
```

## Project Structure

```
src/
  routes/           # File-based routes (TanStack Router)
    __root.tsx      # Root layout / HTML shell
    index.tsx       # Home page (main portfolio view)
    about.tsx       # Standalone /about route
    credits.tsx     # Standalone /credits route
  components/       # UI cards for each portfolio section
  lib/utils.ts      # cn() utility (clsx + tailwind-merge)
  styles.css        # Tailwind v4 config, CSS variables, custom animations
```

## Getting Started

```bash
pnpm install
npm run dev
```

To add Shadcn components:

```bash
pnpm dlx shadcn@latest add <component>
```
