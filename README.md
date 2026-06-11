# MFE V2 Monorepo

pnpm workspaces monorepo with React 19, raw Rspack, Module Federation 2.0, RsLib shared packages, Relay, and Rstest.

## Structure

```
apps/app1   — Host + Remote (port 3001, exposes ./DataTable)
apps/app2   — Host + Remote (port 3002, consumes app1/DataTable)
libs/shared/components  — @my-org/components
libs/shared/hooks       — @my-org/hooks
libs/apps/app1/components — @app1/components
```

## Requirements

- Node.js **≥ 20.19** or **≥ 22.12** (see `.nvmrc` — use `nvm use`)
- pnpm **10.x** (`npx pnpm@10.12.4 install` if corepack is unavailable)

## Commands

```bash
nvm use
npx pnpm@10.12.4 install
npm run build:libs
npm run relay
npm run dev          # runs both apps in parallel
npm run build
npm run test
npm run lint
npm run typecheck
```

Or use `npx pnpm@10.12.4` directly if pnpm is on your PATH.

## Development

Start both micro-frontends:

```bash
npm run dev
```

- App 1: http://localhost:3001 — exposes `./DataTable` via MF 2.0
- App 2: http://localhost:3002 — lazy-loads `app1/DataTable` with type hints

During dev, Module Federation 2.0 syncs remote types into `apps/app2/@mf-types/`. A static fallback lives in `apps/app2/src/types/remotes.d.ts` for offline typecheck.
