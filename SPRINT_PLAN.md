# SPRINT_PLAN.md - Nuxt 3 LTS Upgrade & Structure Cleanup


****Status:** Phase 4 completed. See PHASE4_REPORT.md for details.

## Goal
Upgrade the portfolio site to the current **Nuxt 3 LTS line** and clean up legacy packages / folder layout **without breaking existing pages, content, or visual behavior**. The default definition of "not broken" is `yarn build` passes and every route renders the same as before.

## Scope
- Target runtime: **Nuxt 3.x LTS** (`^3.21.11` on the `3x` dist-tag at time of writing).
- Keep Tailwind CSS on **v3 LTS** (`^3.4.19`) - do **not** migrate to Tailwind v4 in this sprint.
- Keep `@nuxt/content` on the latest **v2** release. A v3 migration is listed as a future option because it changes query APIs and storage layout.
- Do **not** jump to Nuxt 4 unless explicitly requested; Nuxt 4 is the `latest` dist-tag but is a separate major migration.

## Non-goals
- Rewriting features or redesigning UI.
- Adding tests (the repo has none today).
- Migrating content to a CMS or database.

## Guiding principles
1. **One change at a time, then build.** There are no tests, so `yarn build` and manual page checks are the safety net.
2. **Delete before refactor.** Remove unused deps/modules first to reduce upgrade surface.
3. **Keep the old behavior.** Adding `app.vue` or `layouts/default.vue` must not change markup output.
4. **Pin compatible majors.** Prefer the newest minor/patch within the same major rather than chasing latest majors that require Nuxt 4.

---

## Phase 0 - Baseline & inventory
**Objective:** Know exactly what we are changing and have a rollback baseline.

### Task 0.1 - Lock current working state
- Run `yarn install`, `yarn build`, and `yarn dev`.
- Confirm all routes render: `/`, `/work`, `/timeline`, `/story`, `/stack`, `/about`, `/blog`, `/blog/page/1`, `/blog/<existing-slug>`.
- Save a snapshot of `package.json`, `yarn.lock`, `.nuxt/`, `.output/`, and `.data/content/` (or just note the commit hash if changes are committed).

**Acceptance:** `yarn build` passes with zero errors on the current lockfile.

### Task 0.2 - Inventory usage of suspicious packages
- Search the source tree for imports/usages of every package flagged for removal (`hooper`, `nuxt-icon`, `nuxt-icons`, `vue-inline-svg`, `@emailjs/browser`, `ipx`, `prismjs`).
- Confirm which are truly unused vs. used only in tech-stack arrays.

**Acceptance:** A written list of safe-to-remove packages and packages needing a small code migration before removal.

---

## Phase 1 - Safe dependency refresh
**Objective:** Move to Nuxt 3 LTS and compatible module versions with the smallest possible blast radius.

### Task 1.1 - Bump core runtime & build deps
Update `package.json` to these target ranges (compatible with Nuxt 3 LTS):

| Package | Target range | Notes |
|---|---|---|
| `nuxt` | `^3.21.11` | Nuxt 3 LTS |
| `@nuxt/image` | `^1.11.0` | Replace `@nuxt/image-edge` |
| `@nuxt/icon` | `^1.15.0` | Stay on v1 for Nuxt 3 |
| `@nuxtjs/color-mode` | `^3.5.2` | Stay on v3 for Nuxt 3 |
| `@nuxtjs/seo` | `3.0.3` | Pinned; 3.4.0 pulls `@nuxt/kit` v4 |
| `@vueuse/core` | `^13.9.0` | Same major |
| `@vueuse/nuxt` | `^13.9.0` | Same major |
| `tailwindcss` | `^3.4.19` | v3 LTS |
| `tailwind-scrollbar` | `^3.1.0` | Downgrade from v4 to match Tailwind CSS 3 |
| `postcss` | `^8.5.26` | Build-tool dep |
| `autoprefixer` | `^10.5.4` | Build-tool dep |
| `@tailwindcss/typography` | `^0.5.20` | Prose styles |
| `nuxi` | `^3.37.0` | CLI (or remove if unused) |
| `slugify` | `^1.6.9` | Minor bump |
| `@iconify-json/*` | latest minors | Safe icon-set updates |
| `@types/node` | compatible with Node 20 | Avoid Node 26 types |
| `typescript` | `^5.7.2` | Required by `@nuxtjs/cloudinary` components |
| `patch-package` | `^8.0.1` | Persists the Cloudinary patch |

Also update `engines.node` to `^20.19.0 || >=22.12.0` to match Nuxt 3.21 requirements.

**Acceptance:** `yarn install` succeeds and `yarn build` still passes.

### Task 1.2 - Replace `@nuxt/image-edge` with stable `@nuxt/image`
- Remove `@nuxt/image-edge` from `dependencies` and from the `modules` array.
- Keep `@nuxt/image` in `devDependencies` and ensure `'@nuxt/image'` is in `modules`.
- Keep the existing `image.cloudinary.baseURL` config.
- Verify all `<nuxt-img>` usages still work.

**Acceptance:** Pages using Cloudinary images (`/`, `/work`, `/blog`, etc.) render images correctly.

### Task 1.3 - Clean up unused / redundant packages
Safe to remove after Task 0.2 confirms no usage:
- `hooper` - Vue 2 carousel lib, not imported.
- `nuxt-icons` and `nuxt-icon` - legacy; migrate usages in Task 3.1 first, then remove.
- `vue-inline-svg` - not imported.
- `ipx` - already a transitive dep of `@nuxt/image`; remove explicit install.
- `@emailjs/browser` - only appears in commented code and tech arrays; remove if no live usage.

Leave `prismjs` alone in Phase 1. It is used by `components/content/ProseCode.vue`; removal is a code migration, not a simple dep cleanup.

**Acceptance:** `yarn.lock` shrinks, `yarn build` passes, and no removed package appears in imports.

---

## Phase 2 - Folder structure & Nuxt conventions
**Objective:** Align the repo with Nuxt 3 LTS best practices without changing page output.

### Task 2.1 - Add root `app.vue`
- Create `app.vue` containing:
  ```vue
  <template>
    <NuxtPage />
  </template>
  ```
- Do **not** add `<NuxtLayout>` unless Task 2.2 is also done.

**Acceptance:** `yarn build` passes and every route still renders inside the same DOM wrapper as before.

### Task 2.2 - (Optional but recommended) Add `layouts/default.vue`
- Create `layouts/default.vue` with a minimal slot:
  ```vue
  <template>
    <slot />
  </template>
  ```
- Update `app.vue` to:
  ```vue
  <template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </template>
  ```

**Acceptance:** No visual or markup regression on any route.

### Task 2.3 - Consolidate static image assets
- Compare `img/` (repo root) with `public/img/`.
- Move any file from `img/` that is referenced (or likely to be referenced) into `public/img/`.
- Delete the root `img/` directory once it is empty/duplicate-free.
- Verify CSS background URLs such as `/img/BG.svg`, `/img/Dark-bg.svg`, etc. still resolve from `public/img/`.

**Acceptance:** `yarn build` passes and background images render on `/` and other pages.

### Task 2.4 - Ignore generated content DB
- Add `.data/` to `.gitignore` (it is generated by `@nuxt/content` and currently not ignored).
- Delete the committed/generated `.data/content/contents.sqlite` if it is tracked.

**Acceptance:** `git status` no longer shows `.data/` as an untracked file.

### Task 2.5 - Group types under clear ownership
- Keep `types/` for shared TS interfaces (already exists).
- Move purely local interfaces that are only used by one component/composable next to their consumer only if it reduces coupling; otherwise leave as-is.

**Acceptance:** `yarn build` passes and no circular type imports are introduced.

---

## Phase 3 - Legacy module & code cleanup
**Objective:** Remove the remaining legacy icon modules and fix known config bugs.

### Task 3.1 - Migrate `nuxt-icon` usages to `@nuxt/icon`
- Find all `<nuxt-icon name="..." />` in `components/navbar/index.vue` and `pages/blog/[...slug].vue`.
- Replace with `<Icon name="..." />` from `@nuxt/icon`.
- Remove `nuxt-icon` and `nuxt-icons` from `modules` and `dependencies`/`devDependencies`.

**Acceptance:** Dark-mode toggle and blog icons render identically; `yarn build` passes.

### Task 3.2 - Decide on `prismjs` vs. `nuxt-shiki`
Option A (safer): keep `prismjs` and the `ProseCode.vue` override until content v3.
Option B: replace `ProseCode.vue` with a `nuxt-shiki`-based override and remove `prismjs` + `prism-atom-dark.css`.

**Recommendation:** Option A for this sprint. Mark Option B in Phase 5.

**Acceptance:** Code blocks still highlight correctly in blog posts.

### Task 3.3 - Fix or isolate the Tailwind `exstend` typo
- `tailwind.config.js` uses `exstend` instead of `extend`. Fixing it will suddenly apply all custom colors/spacing, which may change the visual output.
- Decision point:
  - If the custom theme values are already effectively unused, delete the misspelled block.
  - If they are needed, rename to `extend`, then visually verify every page.

**Acceptance:** No build error and no unintended visual regressions.

### Task 3.4 - Add markdown files to Tailwind content list
- Add `content/**/*.md` (or a safelist) to `tailwind.config.js#content` so prose/markdown classes are not purged.

**Acceptance:** `yarn build` passes and blog post typography still has expected styles.

---

## Phase 4 - Verification & rollback readiness
**Objective:** Prove the site is still whole after the upgrade.

### Task 4.1 - Build verification matrix
Run and record results for:
- `yarn install`
- `yarn build`
- `yarn generate` (catches static-generation issues)
- `yarn preview` after generate/build

### Task 4.2 - Manual route checklist
Verify these routes render without console errors and that interactive elements work (theme toggle, modals, carousels, blog pagination):
- `/`
- `/work`
- `/timeline`
- `/story`
- `/stack`
- `/about`
- `/blog`
- `/blog/page/1`
- one `/blog/<slug>` post

### Task 4.3 - Regression focus areas
- Cloudinary images load.
- Dark mode toggle works and `dark:` classes apply.
- Global `rotate` page transition still runs.
- Modals (`vue-final-modal`) open/close.
- Blog code highlighting and table of contents.

### Task 4.4 - Rollback plan
- Keep a pre-upgrade branch or commit.
- Document exact `package.json` and `yarn.lock` versions that were stable.
- If a later task breaks, revert that task's commit rather than mixing fixes.


**Completed baseline:** commit 48d7201216ed85c80cd08b4ffee502ccaba4941b.

---

## Phase 5 - Optional next steps (not in this sprint)
- **@nuxt/content v3**: major API change (`queryContent` â†’ `queryCollection`), new SQLite storage layout.
- **Tailwind CSS v4**: config format changes; not required for Nuxt LTS.
- **Nuxt 4**: separate major migration once Nuxt 3 LTS work is solid.
- **Replace `prismjs` with `nuxt-shiki`** for code blocks.
- **Add a minimal smoke test** (e.g. Playwright or Vitest + @nuxt/test-utils) now that the foundation is current.

---

## Risks & mitigations
| Risk | Impact | Mitigation |
|---|---|---|
| Nuxt 3.21 requires Node `^20.19.0` | Build fails on older Node | Update `.nvmrc`/`engines` and document Node requirement. |
| `@nuxt/image-edge` â†’ `@nuxt/image` changes provider behavior | Images 404 or wrong URLs | Keep Cloudinary baseURL config; spot-check every `<nuxt-img>`. |
| Removing legacy icon modules leaves broken icons | UI missing icons | Migrate every `<nuxt-icon>` before deleting the module. |
| Fixing `exstend` changes theme colors/spacing | Visual regression | Verify all pages after the one-line fix; revert if needed. |
| `@nuxtjs/seo` or `@nuxt/content` minor update changes meta | SEO / OG tags break | Check `pages/index.vue` `defineOgImage` and blog meta. |
| No automated tests | Regression goes unnoticed | Use `yarn generate` + manual route checklist as acceptance gate. |

---

## Definition of Done
- [ ] `yarn build` passes with zero errors.
- [ ] `yarn generate` passes with zero errors.
- [ ] All routes in the manual checklist render correctly.
- [ ] No unused packages remain in `package.json`.
- [ ] `.data/` is gitignored.
- [ ] `app.vue` exists and matches Nuxt 3 convention.
- [ ] Root `img/` is consolidated into `public/img/`.
- [ ] Legacy `nuxt-icon` / `nuxt-icons` modules are removed.
- [ ] `README.md` or `AGENTS.md` is updated with the new Node/module baseline.
