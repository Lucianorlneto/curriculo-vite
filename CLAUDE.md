# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal resume / cover letter rendered as a React page (Vite + TypeScript + Tailwind). There is no backend, router or state: the page is viewed in the browser and printed/exported to PDF. Package manager is **yarn** (`yarn.lock`).

## Commands

```bash
yarn dev       # Vite dev server with HMR
yarn build     # tsc type-check + vite build
yarn lint      # ESLint, fails on any warning (--max-warnings 0)
yarn preview   # serve the production build
```

There is no test suite.

## Architecture

- **Document selection**: `src/App.tsx` renders exactly one document component. To switch which document is shown, change the import/render there:
  - `src/LucianoEnglish.tsx` — current main resume (English, `language="en"`).
  - `src/Luciano.tsx` — Portuguese resume.
  - `src/LucianoCoverLetter.tsx` — cover letter (plain JSX, doesn't use the shared components; recipient/company are hardcoded per application).
- **Content lives in JSX**, not in data files. Each document composes the shared building blocks from `src/components` (`Header`, `Section`, `SectionItem`, `SectionItemScore`, `Text`) and passes rich text (`<b>`, `<li>`) via the `description` prop.
- **i18n**: the global `Languages` type (`"pt" | "en"`, declared in `src/components/@types/index.d.ts`) plus `getTranslation({ language, ptText, enText })` in `src/utils/language.ts`. Defaults to Portuguese when `language` is omitted. Currently only `Header` uses it for its labels.
- **`SectionItem` duration**: either pass a fixed `time` string, or pass `present` with a `period` starting with `"<Mon> <YYYY>"` (e.g. `"May 2022 — Present"`) and the duration is computed with `moment` up to today. The computed text is always in English.
- **`SectionItemScore`** renders 0–5 dot ratings (skills/languages) using the images in `src/assets`; it uses a negative top margin and a left offset to align under the `SectionItem` column layout.
- **Styling**: Tailwind utilities inline. `tailwind.config.js` **overrides** (not extends) the `fontSize` scale, so only `sm`, `base`, `xl`, `2xl`–`5xl` exist (no `text-lg`/`text-xs` from defaults unless re-added). `src/index.css` and `src/App.css` are mostly leftover Vite template styles; `#root` max-width/padding in `App.css` affects page layout.
