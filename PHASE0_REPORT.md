# Phase 0 Report — Baseline & Inventory

**Date:** 2026-08-26  
**Commit:** `48d7201216ed85c80cd08b4ffee502ccaba4941b`  
**Goal:** Lock the current working state and inventory legacy packages before the Nuxt 3 LTS upgrade.

---

## Environment

| Tool | Version |
|---|---|
| Node | `v22.22.2` |
| Yarn | `1.22.22` |
| `packageManager` | `yarn@1.22.22` |

---

## Baseline build

Commands run:

```bash
yarn install --frozen-lockfile
yarn build
```

| Step | Result | Notes |
|---|---|---|
| `yarn install` | Success | `nuxt prepare` completed. Warnings captured below. |
| `yarn build` | Success | Finished in **791.69 s** (~13 min). Full log: `build.log`. |

### Install/prepare warnings worth noting
- `nuxt-icon` v1 is deprecated/renamed to `@nuxt/icon`.
- `@vueuse/core` and `@vueuse/nuxt` warn about unmet peer `vue@^3.5.0`.
- `tailwind-scrollbar@4.0.2` has **incorrect peer dependency** `tailwindcss@4.x`, but the project uses Tailwind CSS 3.
- `nuxtseo` module setup is slow (~7.9 s).
- Several devtools plugins warn about unmet `vite@^6` peers.

The `tailwind-scrollbar` mismatch must be fixed in Phase 1.

---

## Route verification

Started the SSR preview server from the build output:

```bash
node .output/server/index.mjs
```

All target routes returned HTTP 200:

| Route | Status |
|---|---|
| `/` | 200 |
| `/work` | 200 |
| `/timeline` | 200 |
| `/story` | 200 |
| `/stack` | 200 |
| `/about` | 200 |
| `/blog` | 200 |
| `/blog/page/1` | 200 |
| `/blog/Avoid-props-hell-with-provide-inject` | 200 |

The preview server was stopped after verification.

---

## Package inventory

| Package | Installed | Used? | Phase 1 action |
|---|---|---|---|
| `nuxt` | `3.17.4` | Core | Upgrade to `^3.21.11` |
| `@nuxt/image-edge` | `1.3.0-28493895.369b747` | Module registered | Remove; use stable `@nuxt/image` |
| `@nuxt/image` | `1.10.0` | `<nuxt-img>` | Upgrade to `^1.11.0` |
| `@nuxt/icon` | `1.13.0` | `<Icon>` | Upgrade to `^1.15.0` |
| `@nuxtjs/color-mode` | `3.5.2` | Dark mode | Keep on v3 |
| `@nuxtjs/seo` | `3.0.3` | SEO/OG | Upgrade to `^3.4.0` (v3 major) |
| `@vueuse/core` | `13.3.0` | Composables | Upgrade to `^13.9.0` |
| `@vueuse/nuxt` | `13.3.0` | Module | Upgrade to `^13.9.0` |
| `@nuxt/content` | `2.13.4` | Content | Keep on latest v2 |
| `tailwindcss` | `3.4.17` | Styling | Upgrade to `^3.4.19` |
| `tailwind-scrollbar` | `4.0.2` | Styling plugin | **Downgrade** to `^3.1.0` |
| `postcss` | `8.5.4` | Build tool | Upgrade to `^8.5.26` |
| `autoprefixer` | `10.4.21` | Build tool | Upgrade to `^10.5.4` |
| `@tailwindcss/typography` | `0.5.16` | Prose | Upgrade to `^0.5.20` |
| `nuxt-shiki` | `0.3.1` | Module | Upgrade to `^0.3.2` |
| `slugify` | `1.6.6` | `timelineStore.ts` | Upgrade to `^1.6.9` |
| `nuxi` | `3.25.1` | CLI | Upgrade to `^3.37.0` or remove |
| `ipx` | `3.0.3` | Not imported | Remove explicit dep |
| `nuxt-icons` | `3.2.1` | Module only | Remove module + dep |
| `nuxt-icon` | `1.0.0-beta.7` | `navbar`, `blog/[...slug].vue` | Migrate to `<Icon>`, then remove |
| `hooper` | `0.3.4` | Not imported | Remove |
| `vue-inline-svg` | `4.0.1` | Not imported | Remove |
| `@emailjs/browser` | `4.4.1` | Only commented code/tech arrays | Remove if no live usage |
| `prismjs` | `1.30.0` | `ProseCode.vue` | Keep; migrate later |
| `vue-final-modal` | `4.5.5` | Modal/slide/plugin | Keep |

### Usage evidence
- `<nuxt-icon>` is used in `components/navbar/index.vue` and `pages/blog/[...slug].vue`.
- `<Icon>` from `@nuxt/icon` is already used everywhere else, so migration is simple.
- `slugify` is imported and called in `composables/timelineStore.ts`.
- `prismjs` is imported in `components/content/ProseCode.vue`.
- `vue-final-modal` is imported in `components/modal/index.vue` and `components/slide/index.vue`, and registered in `plugins/vue-final-modal.ts`.

---

## Structural findings

- No `app.vue` — pages use Nuxt's implicit root.
- No `layouts/` — every page uses the default layout.
- Root `img/` coexists with `public/img/`; needs consolidation.
- `.data/content/contents.sqlite` is generated and not in `.gitignore`.
- `tailwind.config.js` uses `exstend` instead of `extend`.
- `tailwind.config.js#content` does not include `content/**/*.md`.

---

## Updated Phase 1 targets

Add this row to the Sprint Plan Phase 1 dependency table:

| Package | Target | Notes |
|---|---|---|
| `tailwind-scrollbar` | `^3.1.0` | Downgrade from v4 to match Tailwind CSS 3 |

Also update `engines.node` to `^20.19.0 || >=22.12.0` because Nuxt 3.21.11 requires Node `^20.19.0`.

---

## Phase 0 Definition of Done

- [x] `yarn install` succeeds on the current lockfile.
- [x] `yarn build` succeeds with zero errors.
- [x] All target routes return HTTP 200 from the SSR preview server.
- [x] Legacy/unused packages are inventoried with source evidence.
- [x] The `tailwind-scrollbar` peer mismatch is documented.

## Artifacts

- `build.log` — full `yarn build` output.
- `PHASE0_REPORT.md` — this report.

## Ready for Phase 1

The baseline is stable. Phase 1 can start with the dependency refresh using the targets above.
