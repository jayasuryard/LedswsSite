# LedswsSite - Copilot Instructions

## Project Overview

React 19 SPA using Vite 7 with SWC for fast refresh and Tailwind CSS v4 for styling. This is the frontend for a Strapi CMS-backed site.

## Product Context (LeadFlexUp)

See [docs/PRODUCT_OVERVIEW_INSTRUCTIONS.md](../docs/PRODUCT_OVERVIEW_INSTRUCTIONS.md) for the product model (multi-business account), dashboards, and the tool suite.

## Tech Stack & Versions

- **React 19** with functional components and hooks
- **Vite 7** with `@vitejs/plugin-react-swc` (SWC, not Babel)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (CSS-first configuration)
- **ESLint 9** with flat config format

## Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture & File Structure

```
src/
├── main.jsx          # App entry point with StrictMode
├── App.jsx           # Root component
├── index.css         # Tailwind import (@import "tailwindcss")
├── components/       # Reusable UI components
├── pages/            # Route-level page components (e.g., landingPage.jsx)
├── sections/         # Page sections (for composing pages)
└── assets/           # Static assets (images, fonts)
```

## Code Conventions

### Tailwind CSS v4
- Uses CSS-first configuration via `@import "tailwindcss"` in `src/index.css`
- No `tailwind.config.js` needed—configure in CSS using `@theme` directive if customization is required
- Apply utility classes directly in JSX: `className="text-3xl font-bold"`

### React Components
- Use functional components with hooks (`useState`, `useEffect`, etc.)
- Use `.jsx` extension for all React component files
- Export components as default: `export default ComponentName`
- Component files use PascalCase for page components, camelCase for file names

### ESLint
- Flat config format in `eslint.config.js`
- Unused vars with uppercase/underscore prefix are allowed (`varsIgnorePattern: '^[A-Z_]'`)
- React Hooks and React Refresh rules enforced

## Important Notes

- **JSX attribute**: Use `className` not `class` (there's a bug in App.jsx using `class` that should be `className`)
- **No routing configured yet**—add `react-router-dom` when implementing multi-page navigation
- **Strapi integration**: This frontend is intended to connect to a Strapi CMS backend (parent directory suggests this)
