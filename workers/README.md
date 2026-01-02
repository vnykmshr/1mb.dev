# Counter API

Cloudflare Worker for the 1mb community counter.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Returns `{ count: number }` |
| POST | `/` | Increment count (1 per IP per 24h) |
| GET | `/health` | Service health status |

## Setup

### 1. Login to Cloudflare

```bash
npx wrangler login
```

### 2. Set secrets

```bash
npx wrangler secret put UPSTASH_REDIS_REST_URL --config workers/wrangler.toml
npx wrangler secret put UPSTASH_REDIS_REST_TOKEN --config workers/wrangler.toml
```

### 3. Deploy

```bash
npm run worker:deploy
```

## Commands

```bash
npm run worker:dev      # local development server
npm run worker:deploy   # deploy to production
npm run worker:tail     # view live logs
```

## Production

- **URL:** https://1mb-counter.vmx-builds.workers.dev
- **Health:** https://1mb-counter.vmx-builds.workers.dev/health

## Architecture

```
Client (1mb.dev)
    ↓
Cloudflare Worker (counter.js)
    ↓
Upstash Redis (managed)
```

- Rate limiting: 1 vote per IP per 24h (IP is hashed, not stored)
- Offline fallback: Client shows "—" if API unavailable
