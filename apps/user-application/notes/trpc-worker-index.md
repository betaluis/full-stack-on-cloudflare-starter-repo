# worker/index.ts explained

This file is the Cloudflare Worker "front door," and it routes requests either to tRPC or to static assets.

- `import { fetchRequestHandler } from "@trpc/server/adapters/fetch";`
  - Brings in tRPC's HTTP handler for Fetch-style runtimes (Cloudflare Workers, edge runtimes, etc.).
- `import { appRouter } from "./trpc/router";`
  - Your full tRPC API definition (all procedures/endpoints) lives in this router.
- `import { createContext } from "./trpc/context";`
  - Builds per-request context (things like env bindings, auth info, request metadata).

## Main worker export

- `export default { fetch(request, env, ctx) { ... } }`
  - Cloudflare calls this `fetch` function for every incoming request.
  - `request`: the incoming HTTP request.
  - `env`: Cloudflare bindings (KV, D1, R2, secrets, assets, etc.).
  - `ctx`: worker execution context (`waitUntil`, etc.).

## Routing logic

- `const url = new URL(request.url);`
  - Parses the URL so you can inspect the path.
- `if (url.pathname.startsWith("/trpc")) { ... }`
  - If path begins with `/trpc`, treat it as an API request and send it to tRPC.

## tRPC handling

- `return fetchRequestHandler({ ... })`
  - This hands the request to tRPC.
- `endpoint: "/trpc"`
  - Base path for tRPC procedures.
- `req: request`
  - The original HTTP request.
- `router: appRouter`
  - Which procedures are available.
- `createContext: () => createContext({ req: request, env: env, workerCtx: ctx })`
  - For each tRPC call, build context containing request + Cloudflare env + worker context.

## Non-API fallback

- `return env.ASSETS.fetch(request);`
  - If request is not `/trpc`, serve static frontend assets (HTML/CSS/JS) via Cloudflare assets binding.

## Last line

- `satisfies ExportedHandler<ServiceBindings>;`
  - TypeScript type check: confirms this object matches Cloudflare's expected handler shape and your binding types.

## Quick mental model

- `/trpc/...` -> backend API (type-safe procedures via tRPC)
- everything else -> frontend static files
