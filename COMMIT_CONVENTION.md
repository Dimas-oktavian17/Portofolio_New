# Commit Convention Reference

This document groups recent repository commits into logical categories and provides clean **Conventional Commits** messages to use going forward. Existing history is preserved as a reference; new work should follow these conventions.

---

## Commit Types

| Type | Use for |
|------|---------|
| `feat` | New features or capabilities |
| `fix` | Bug fixes |
| `refactor` | Code restructuring without behavior change |
| `chore` | Tooling, config, dependencies, build |
| `test` | Adding or updating tests |
| `docs` | Documentation-only changes |
| `content` | Markdown/content updates (CMS data) |

---

## 1. Configuration & Tooling

| Original commit | Suggested conventional commit |
|-----------------|-------------------------------|
| `feat: add engine node 20 >` | `chore: set Node engine to >=20 in package.json` |
| `feat: use nvmrc` | `chore: add .nvmrc with Node 20` |
| `feat: add new vercel.json` | `chore: add vercel.json deployment config` |
| `refactor: move into yarn` | `chore: migrate package manager from npm to yarn` |

**Squashed group example:**
```
chore: configure Node 20, nvmrc, Vercel, and Yarn

- Pin Node engine to >=20 in package.json
- Add .nvmrc for Node 20
- Add vercel.json for deployment
- Migrate lockfile/scripts to Yarn
```

---

## 2. Dependencies & SEO

| Original commit | Suggested conventional commit |
|-----------------|-------------------------------|
| `chore: install nuxt seo. feat: improve seo` | `chore: install @nuxtjs/seo` |
|  | `feat: configure SEO meta and OG image` |
| `feat: add tech-stack list. chore: update nuxt version` | `chore: upgrade Nuxt to latest` |
|  | `feat: add tech-stack list component` |

> **Rule of thumb:** do not mix dependency/tooling changes with feature changes in a single commit. Split them into separate atomic commits.

---

## 3. Features

| Original commit | Suggested conventional commit |
|-----------------|-------------------------------|
| `feat: create feature loadmore in timeline` | `feat(timeline): add load more pagination` |
| `feat: add md files for cms` | `content: add markdown files for work, timeline, and blog` |
| `feat: create composable store` | `feat(composables): add timeline store for async content` |
| `feat: reusable components` | `feat(components): add reusable UI components` |
| `feat: add types` | `feat(types): add TypeScript type definitions` |

---

## 4. Refactoring

| Original commit | Suggested conventional commit |
|-----------------|-------------------------------|
| `chore: maintance the plugin and composables data` | `refactor(plugins,composables): maintain plugin and composable data` |
| `refactor: Store tech/index.vue data in state management nuxt` | `refactor(tech): move tech stack data into Nuxt state` |

---

## 5. Bug Fixes

| Original commit | Suggested conventional commit |
|-----------------|-------------------------------|
| `fix: form submit` | `fix(about): resolve form submit handling` |
| `fix: form submit in about pages` | `fix(about): resolve form submit on about page` |

**Squashed group example:**
```
fix(about): resolve contact form submission
```

---

## 6. Tests

| Original commit | Suggested conventional commit |
|-----------------|-------------------------------|
| `test: testing form submit` | `test(about): add form submit tests` |
| `test: testing submit-2` | `test(about): add additional form submit test cases` |

**Squashed group example:**
```
test(about): add form submission tests
```

> Prefer squashing iterative test commits into the feature or fix commit they validate, or into a single dedicated `test:` commit.

---

## 7. Merge Commits

Merge commits such as:
- `Merge pull request #10 from .../tech-refactor`
- `Merge branch 'main' into tech-refactor`

These are acceptable in a branch-based workflow. For a clean linear history, prefer **rebase + merge** or **squash merge**.

---

## Ideal Clean History (reference)

```
chore: configure Node 20, nvmrc, Vercel, and Yarn
chore: upgrade Nuxt and install @nuxtjs/seo
feat: configure SEO meta and OG image
feat(components): add reusable UI components
feat(composables): add timeline store for async content
feat(types): add TypeScript type definitions
content: add markdown files for work, timeline, and blog
feat(timeline): add load more pagination
feat(tech): add tech-stack list component
refactor(tech): move tech stack data into state management
refactor(plugins,composables): maintain plugin and composable data
fix(about): resolve contact form submission
test(about): add form submission tests
```

---

## How to Apply

1. **Do not rewrite existing published history** unless the team agrees.
2. For every new change, write one atomic commit using the format:
   ```
   type(scope): short description

   Optional body explaining why the change was made.
   ```
3. Keep concerns separate: dependency updates, features, refactors, and fixes should each have their own commit.
4. Avoid commits that mix two types, e.g. `chore: install x. feat: do y`.