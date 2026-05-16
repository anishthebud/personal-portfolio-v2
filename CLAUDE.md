# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server on port 3000
npm run build     # Production build
npm run preview   # Preview production build
npm run test      # Run tests with Vitest
npm run lint      # Run ESLint
npm run format    # Format with Prettier and fix ESLint issues
npm run check     # Check formatting only (no writes)
```

To add Shadcn components:
```bash
pnpm dlx shadcn@latest add <component>
```

## Architecture

This is a **TanStack Start** app (not Next.js) using **React 19**, **Vite 8**, and **TypeScript 6**.

### Routing

File-based routing via TanStack Router. Routes live in `src/routes/`:
- `__root.tsx` — root layout (HTML shell, `<head>`, devtools, global styles)
- `index.tsx` — home page at `/`
- New routes are created as `src/routes/<path>.tsx` and export `const Route = createFileRoute('/<path>')`

`src/routeTree.gen.ts` is auto-generated — never edit it manually.

### Styling

**Tailwind CSS v4** configured via the `@tailwindcss/vite` plugin (no `tailwind.config.ts`). Custom design tokens (color palette, gradients, animations) are defined as CSS variables in `src/styles.css`.

Global styles use custom Tailwind variants (`@custom-variant dark`) and utility classes for glass-morphism effects (`island-shell`, `feature-card`).

### Component Utilities

- `src/lib/utils.ts` — exports `cn()` (clsx + tailwind-merge) for conditional class merging
- CVA (`class-variance-authority`) for component variant management
- Shadcn UI components (new-york style, zinc base color, Lucide icons)

### Animations

Use **Motion** (`motion/react`) for JS-driven animations. CSS keyframe animations (e.g., `rise-in`) are defined in `src/styles.css`.

### Path Aliases

Both `#/*` and `@/*` resolve to `./src/*`.

### Data Fetching

Routes use TanStack Router `loader` functions for data fetching before render. Use TanStack Start server functions for server-client communication.

## Code Style

Prettier config: no semicolons, single quotes, trailing commas everywhere.
