---
name: trading-book
description: Applies project conventions and structure for the trading_book Next.js app. Use when changing pages/layouts/styles/content, static assets, SEO files, or project scripts in this repository.
metadata:
  short-description: Conventions and structure for the trading_book Next.js project
---

# Trading Book - Project Skill

## Scope

This repository is a single Next.js App Router project for a landing page.

Key paths:
- `app/` - App Router entry points (`layout.jsx`, `page.jsx`, `globals.css`)
- `content/` - content/source data (`site-content.js`)
- `public/` - static assets and SEO files

## Conventions

- Keep changes minimal and aligned with existing style and file layout.
- Reuse existing content model in `content/site-content.js` instead of hardcoding duplicates.
- Preserve App Router structure; do not introduce Pages Router files.
- Do not add new dependencies unless explicitly required.

## Commands

- `npm run dev` - run local dev server
- `npm run build` - production build check
- `npm run start` - run production build
- `npm run lint` - linting

## Change patterns

- UI/content changes: usually touch `app/page.jsx`, `app/globals.css`, `content/site-content.js`.
- Metadata/layout changes: update `app/layout.jsx`.
- Static files/SEO: update files in `public/`.
