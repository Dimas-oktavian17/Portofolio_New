# AGENTS.md — Portfolio Nuxt Site

## Environment
- Node `>=20.18.0`; `.nvmrc` says `20`. Use **Yarn 1** (`yarn@1.22.22` pinned in `packageManager`).
- No tests, no lint, no formatter, and no CI. The main verification is `yarn build`.

## Setup
```bash
yarn install      # postinstall runs `nuxt prepare`
```

## Dev / build / deploy
- `yarn dev` runs `nuxt dev --watch` on http://localhost:3000.
- `yarn build` runs `nuxt build`.
- `yarn generate` runs `nuxt generate` for a static build.
- `yarn preview` previews the `.output` directory.

## Architecture
- Nuxt 3 SSR app. There is no root `app.vue` and no `layouts/`; pages render with the default layout.
- Pages live under `pages/`; notable ones: `pages/blog/[...slug].vue`, `pages/blog/page/[number].vue`, `pages/work/index.vue`, `pages/timeline/index.vue`, `pages/story/index.vue`, `pages/stack/index.vue`, `pages/about/index.vue`.
- Components are grouped by folder with an `index.vue`; auto-import name comes from the folder, e.g. `components/navbar/index.vue` becomes `<Navbar>`.
- Composables in `composables/` are auto-imported. `timelineStore` is async and holds projects/timeline data plus `fetchContent` for markdown from `content/`.
- Plugins:
  - `plugins/router.scrollBehaviour.js` — hash scrolling offset by 64 px.
  - `plugins/vue-final-modal.ts` — registers `vue-final-modal` globally.
  - `plugins/format-date.ts` — provides `$formatDate` helper.

## Content
- `@nuxt/content` reads from `content/work/`, `content/timeline/`, and `content/blog/`.
- Blog front-matter drives metadata (title, description, date, author, socialImage, etc.).
- `content/authors.json` is currently sample data.
- `@nuxt/content` generates `.data/content/contents.sqlite`. This directory is **not** in `.gitignore`; add it to your ignore list or delete before committing.

## Styling
- Tailwind CSS v3 is loaded via PostCSS in `nuxt.config.ts`; global styles, components, and utilities are in `assets/css/tailwind.css`.
- Dark mode uses Tailwind `darkMode: 'class'` together with `@nuxtjs/color-mode` (`classSuffix: ''`). Use `dark:` prefixes for dark styles.
- **Known typo in `tailwind.config.js`:** the key is `exstend` instead of `extend`, so the custom colors/spacing under it are not applied.
- The Tailwind `content` array does not include markdown files; if you add prose/markdown-specific classes, add `content/**/*.md` or use `safelist`.

## Images / media
- `@nuxt/image-edge` is configured with a Cloudinary baseURL hardcoded in `nuxt.config.ts`.
- `.env` contains `CLOUDINARY_CLOUD_NAME=duvpel2np` and is gitignored; keep it present.

## Icons
- Prefer `@nuxt/icon` (configured `mode: 'css'`, `cssLayer: 'base'`). It relies on Iconify collections installed as devDeps (`skill-icons`, `logos`, `mdi`, `material-symbols`, etc.).
- `nuxt-icon` and `nuxt-icons` are installed but legacy; avoid adding more icon libraries.

## SEO / transitions
- `@nuxtjs/seo` is installed; site metadata is in `nuxt.config.ts`.
- `pages/index.vue` uses `defineOgImage`.
- Global page transition `rotate` is defined in `nuxt.config.ts`; the matching CSS is in `assets/css/tailwind.css`.

## TypeScript
- `tsconfig.json` extends the generated `.nuxt/tsconfig.json`. Run `yarn install` / `nuxt prepare` first so the generated config exists before running `vue-tsc` or other type checks.

## Verification checklist
- [ ] `yarn install` succeeds.
- [ ] `yarn build` completes without errors.
- [ ] `yarn dev` renders all routes and content pages.
