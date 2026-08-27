# Phase 1 Report — Safe Dependency Refresh

**Date:** 2026-08-26  
**Goal:** Upgrade to Nuxt 3 LTS and refresh compatible dependencies without breaking the build.

---

## Summary

Phase 1 completed successfully. The project now builds with **Nuxt 3.21.11** and all target routes render.

| Check | Result |
|---|---|
| `yarn install` | Success |
| `yarn build` | Success (839.78 s) |
| SSR preview routes | All 200 |

---

## Changes made

### `package.json`

**Upgraded:**
- `nuxt` `3.17.4` → `^3.21.11`
- `@nuxt/image` `1.10.0` → `^1.11.0`
- `@nuxt/icon` `1.13.0` → `^1.15.0`
- `@nuxtjs/seo` `3.0.3` → pinned `3.0.3`
- `@vueuse/core` `13.3.0` → `^13.9.0`
- `@vueuse/nuxt` `13.3.0` → `^13.9.0`
- `tailwindcss` `3.4.17` → `^3.4.19`
- `tailwind-scrollbar` `4.0.2` → `^3.1.0` (downgrade to match Tailwind 3)
- `postcss` `8.5.4` → `^8.5.26`
- `autoprefixer` `10.4.21` → `^10.5.4`
- `@tailwindcss/typography` `0.5.16` → `^0.5.20`
- `nuxi` `3.25.1` → `^3.37.0`
- `slugify` `1.6.6` → `^1.6.9`
- `@iconify-json/*` collections updated to latest minors
- `@types/node` updated to `^22.13.14`

**Added:**
- `typescript` `^5.7.2` (required by `@nuxtjs/cloudinary` components for type resolution)
- `patch-package` `^8.0.1` (to persist the Cloudinary patch)

**Removed:**
- `@nuxt/image-edge`
- `nuxt-icon`
- `nuxt-icons`
- `hooper`
- `ipx`
- `vue-inline-svg`
- `@emailjs/browser`
- `nuxt-shiki`

**Other:**
- `engines.node` updated to `^20.19.0 || >=22.12.0`
- `postinstall` script changed to `patch-package && nuxt prepare`

### `nuxt.config.ts`

- Replaced `@nuxt/image-edge` module with `@nuxt/image`
- Removed `nuxt-icon`, `nuxt-icons`, and `nuxt-shiki` modules
- Removed temporary debug hook

### Patch

Created `patches/@nuxtjs+cloudinary+4.0.0.patch` to fix a Vue 3.5 / TypeScript compatibility issue in `CldImage.vue`:

```vue
export interface CldImageProps extends /* @vue-ignore */ ImageOptions {
```

This patch is applied automatically on `yarn install` via `patch-package`.

---

## Issues encountered and resolutions

| Issue | Resolution |
|---|---|
| `nuxt prepare` failed with `Cannot resolve module "@nuxt/kit"` | `package.json` had a UTF-8 BOM from the PowerShell rewrite. Rewrote the file without a BOM. |
| `@nuxtjs/seo` 3.4.0 pulled `@nuxt/kit` v4, breaking Nuxt 3.21 | Pinned `@nuxtjs/seo` to `3.0.3`. |
| `nuxt-shiki` 0.3.2 pulled `@nuxt/kit` v4 and a Shiki v3 WASM that conflicted with `@nuxt/content`'s Shiki v1 | Removed `nuxt-shiki` entirely. |
| `@nuxtjs/cloudinary` 4.0.0 `CldImage.vue` failed to compile under Vue 3.5 | Added `/* @vue-ignore */` before `extends ImageOptions` and persisted via `patch-package`. |
| `@nuxtjs/cloudinary` components needed TypeScript at build time | Added `typescript` as a devDependency. |
| `@nuxt/image` component was not registered | Added `'@nuxt/image'` to the `modules` array (it had only been in `devDependencies`). |

---

## Verification

### Build output

```
Nuxt 3.21.11 (with Nitro 2.13.4, Vite 7.3.6 and Vue 3.5.41)
...
✨ Build complete!
Done in 839.78s.
```

### Route checks (SSR preview server)

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

---

## Remaining warnings (non-blocking)

- Various peer-dependency warnings for `vue@^3.5.0`, `vite@>=6.0`, etc. These are upstream and do not stop the build.
- `@nuxt/image` warns that `sharp` binaries for `win32-x64` cannot be found. This is a deployment consideration, not a build blocker.

---

## Definition of Done for Phase 1

- [x] `package.json` updated to Nuxt 3 LTS and compatible module versions.
- [x] Unused/legacy packages removed.
- [x] `@nuxt/image-edge` replaced by stable `@nuxt/image`.
- [x] `yarn install` succeeds and applies patches.
- [x] `yarn build` succeeds with zero errors.
- [x] All target routes return HTTP 200.

## Ready for Phase 2

The dependency foundation is stable. Phase 2 (folder structure & Nuxt conventions) can begin.
