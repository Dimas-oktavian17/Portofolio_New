# Phase 3 Report - Legacy Module & Code Cleanup

**Date:** 2026-08-26  
**Goal:** Remove remaining legacy icon modules and fix known config bugs.

---

## Summary

Phase 3 completed. The last `<nuxt-icon>` usages were migrated to `@nuxt/icon`, the Tailwind `exstend` typo is fixed, and markdown files are included in Tailwind's purge scan.

| Check | Result |
|---|---|
| `yarn postinstall` | Success |
| `yarn build` | Success (1048.22 s) |
| SSR preview routes | All 200 |
| Icon SVGs rendered | Yes |

---

## Changes made

### 1. Migrated legacy `<nuxt-icon>` to `<Icon>`

Updated:
- `components/navbar/index.vue`
- `pages/blog/[...slug].vue`

All `<nuxt-icon name="..." />` tags were replaced with `<Icon name="..." />` from `@nuxt/icon`. Dynamic `:name` bindings and class props were preserved.

### 2. Fixed Tailwind `exstend` typo

`tailwind.config.js` had `exstend` instead of `extend`. Renaming it activates the custom theme values that were already used across the site (`uniqe`, `typography_primary`, `brand_primary`, `background`, `fromGradient`, `toGradient`, `nav`, `section_x`, etc.).

### 3. Added markdown files to Tailwind content list

Added `content/**/*.md` to `tailwind.config.js#content` so prose/markdown-specific classes are not purged.

### 4. Kept `prismjs`

`prismjs` is still used by `components/content/ProseCode.vue`. A migration to `nuxt-shiki` was deferred because `nuxt-shiki` was already removed in Phase 1 due to Shiki v1/v3 conflicts.

---

## Verification

### Build output

```
Nuxt 3.21.11 (with Nitro 2.13.4, Vite 7.3.6 and Vue 3.5.41)
...
✨ Build complete!
Done in 1048.22s.
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

### Icon rendering

The home page response contains SVG icons, confirming the `<Icon>` migration works in production.

---

## Definition of Done for Phase 3

- [x] All `<nuxt-icon>` usages migrated to `<Icon>`.
- [x] Legacy icon modules fully removed from dependencies and config.
- [x] Tailwind `exstend` typo fixed.
- [x] Markdown files included in Tailwind purge scan.
- [x] `yarn build` succeeds with zero errors.
- [x] All target routes return HTTP 200 and icons render.

## Ready for Phase 4

The legacy cleanup is done. Phase 4 (verification & rollback readiness) can begin.