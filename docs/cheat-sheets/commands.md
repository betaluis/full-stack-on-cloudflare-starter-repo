# Commands Cheat Sheet

Quick commands for this monorepo.

## From repo root

Install all dependencies:

```bash
pnpm install
```

Run frontend app:

```bash
pnpm run dev-frontend
```

Run data service:

```bash
pnpm run dev-data-service
```

Build shared package (`@repo/data-ops`):

```bash
pnpm run build-package
```

---

## Frontend app commands

Location: `apps/user-application`

Dev:

```bash
pnpm --filter user-application run dev
```

Build:

```bash
pnpm --filter user-application run build
```

Preview build:

```bash
pnpm --filter user-application run serve
```

Test:

```bash
pnpm --filter user-application run test
```

Generate Cloudflare types:

```bash
pnpm --filter user-application run cf-typegen
```

Deploy:

```bash
pnpm --filter user-application run deploy
```

---

## Data service commands

Location: `apps/data-service`

Dev:

```bash
pnpm --filter data-service run dev
```

Test:

```bash
pnpm --filter data-service run test
```

Generate Cloudflare types:

```bash
pnpm --filter data-service run cf-typegen
```

Deploy:

```bash
pnpm --filter data-service run deploy
```

---

## Shared package commands

Location: `packages/data-ops`

Build:

```bash
pnpm --filter @repo/data-ops run build
```

Drizzle pull:

```bash
pnpm --filter @repo/data-ops run pull
```

Drizzle migrate:

```bash
pnpm --filter @repo/data-ops run migrate
```

Drizzle generate:

```bash
pnpm --filter @repo/data-ops run generate
```

Drizzle studio:

```bash
pnpm --filter @repo/data-ops run studio
```

Better Auth generate:

```bash
pnpm --filter @repo/data-ops run better-auth-generate
```
