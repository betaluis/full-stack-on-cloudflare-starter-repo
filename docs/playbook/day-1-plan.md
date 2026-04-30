# Day 1 Plan

This is a simple first-day guide to understand and run this monorepo.

## Goal for Day 1
- Understand what each folder does
- Run the frontend app
- Run the data service
- Learn where shared code lives

---

## 1) Learn the project shape (15–20 min)

Open these folders first:

- `apps/user-application` → frontend (what users see)
- `apps/data-service` → backend service/API on Cloudflare Workers
- `packages/data-ops` → shared data/database/auth helpers

Read these files:

- `package.json` (root) → top-level scripts
- `pnpm-workspace.yaml` → shows workspace folders
- `apps/user-application/README.md` → app-specific setup notes

---

## 2) Install dependencies (5–10 min)

From repo root:

```bash
pnpm install
```

---

## 3) Run the frontend (10 min)

From repo root:

```bash
pnpm run dev-frontend
```

Expected:
- Vite dev server starts (default port in this repo is 3000)
- You can open the app in browser

---

## 4) Run the data service (10 min)

In a second terminal, from repo root:

```bash
pnpm run dev-data-service
```

Expected:
- Wrangler starts Cloudflare Worker locally
- Backend service is available for local requests

---

## 5) Understand shared package usage (20–30 min)

Look at `packages/data-ops/package.json`:
- Notice build scripts and exports
- This package is consumed by both apps as `@repo/data-ops`

Look at app package files:
- `apps/user-application/package.json`
- `apps/data-service/package.json`

Find `@repo/data-ops` in dependencies to confirm both apps reuse shared code.

---

## 6) Build shared package once (optional, useful) (5 min)

From repo root:

```bash
pnpm run build-package
```

This compiles shared `data-ops` code.

---

## 7) Day-1 checklist

- [ ] I can explain frontend vs backend vs shared package
- [ ] I ran frontend locally
- [ ] I ran data service locally
- [ ] I know where shared data/auth helpers live
- [ ] I know root scripts and workspace layout

---

## Common beginner tips

- Keep two terminals open (frontend + data service)
- Start from root scripts first; don’t memorize all sub-project commands yet
- If something fails, check Node and pnpm versions first
