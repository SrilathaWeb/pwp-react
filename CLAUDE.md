# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**pwp-react** is a personal portfolio website showcasing skills, portfolio projects, blogs, and roles. It's built with React 19, TypeScript, Vite, and styled with Tailwind CSS and Flowbite React components.

## Project Structure

```
src/
├── assets/           # Static assets (images, etc.)
├── components/       # Reusable React components
│   └── drop-animation.tsx
├── layouts/          # Layout wrapper components
│   ├── custom-nav.tsx         # Navigation bar
│   ├── custom-footer.tsx       # Footer
│   ├── navigation.tsx          # (Navigation-related)
│   └── root-layout.tsx         # Root outlet for routes
├── routes/           # Page/route components
│   ├── home.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   ├── skills.tsx
│   ├── roles.tsx
│   ├── portfolio.tsx
│   ├── timeline.tsx
│   ├── video-blog.tsx
│   ├── typewriter.tsx          # Typewriter effect component
│   └── technicalblog/          # Technical blog pages
│       ├── technical_blog_list.tsx
│       ├── technical_blog_post.tsx
│       └── technical_blog_data.tsx
└── main.tsx          # Router setup and app entry point
```

## Core Architecture

### Routing
- **Framework**: React Router v7
- **Setup**: Configured in `src/main.tsx` with `BrowserRouter`
- **Root Layout Pattern**: All routes render through `RootLayout` which uses `<Outlet />` for nested route rendering
- **Navigation**: `CustomNav` component wraps routes (not inside Routes), `CustomFooter` below

### Styling
- **CSS Framework**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **UI Components**: Flowbite React v0.12.9
- **Global Styles**: `src/index.css` imports Tailwind and includes custom animations and utility classes
- **Key Custom Classes**:
  - `.gradient-text` - Cyan to purple gradient text effect
  - `.code-banner` - Background image banner (height: 140px)
  - `.animate-fadeIn` - Fade in animation
  - `.animate-auto-scroll` - Auto-scrolling animation for horizontal content

### Component Dependencies
- **Animations**: Framer Motion v12
- **Icons**: Font Awesome 7 (solid icons via `react-fontawesome`)
- **Markdown**: `react-markdown` with `remark-gfm` plugin for GitHub-flavored markdown support
- **Fonts**: Uses 'Poppins' font family (set in `index.css`)

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Run TypeScript build check (`tsc -b`) then Vite build |
| `npm run lint` | Run ESLint on all TypeScript/JavaScript files |
| `npm run preview` | Preview production build locally |

## TypeScript Configuration

### Compiler Settings
- **Target**: ES2022 (app), ES2023 (build tools)
- **Strict Mode**: Enabled
- **JSX**: `react-jsx` (no need to import React in components)
- **Module Resolution**: Bundler
- **Import Extensions**: Allowed for TypeScript files

### Linting Rules
- `noUnusedLocals: true` - Unused variables are errors
- `noUnusedParameters: true` - Unused parameters are errors
- `noFallthroughCasesInSwitch: true` - Switch statements must have explicit breaks
- `noUncheckedSideEffectImports: true` - Be explicit about side-effect imports

## ESLint Configuration

Uses `eslint.config.js` (flat config) with:
- `@eslint/js` base config
- `typescript-eslint` recommended rules
- `eslint-plugin-react-hooks` for hook usage validation
- `eslint-plugin-react-refresh` for Vite Fast Refresh

## Key Development Notes

1. **No TypeScript Errors on Build**: The build runs `tsc -b` first; fix all TypeScript errors before building
2. **Component Files**: New components should typically go in `src/components/` unless they're page-level routes (then `src/routes/`)
3. **Markdown Support**: Technical blog posts use `react-markdown` with GitHub-flavored markdown, supporting code blocks and tables
4. **Fast Refresh**: Changes to React components are reflected instantly in development without full page reloads
5. **Tailwind/Flowbite**: Tailwind is used for styling with Flowbite React for pre-built components
