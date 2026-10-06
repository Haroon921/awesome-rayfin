# Fabric Capacity Copilot

Investigate Microsoft Fabric capacity hotspots and turn sample telemetry into evidence-based remediation actions.

This reference template includes an executive overview, capacity explorer,
evidence-based hotspot investigation, deterministic recommendations, and an
action workflow. It runs with clearly labeled sample data so you can evaluate
the experience before connecting an approved telemetry source.

> [!IMPORTANT]
> The bundled telemetry is for demonstration only. Validate recommendations
> against an authoritative Microsoft Fabric Capacity Metrics source before
> making operational decisions.

## Getting started

```bash
# Install dependencies
npm install

# Deploy the Rayfin services and start the Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

To run only the local UI against the bundled sample data:

```bash
npx vite
```

## Included workflow

- Executive capacity health, utilization, hotspot, and workload summaries
- Time-series capacity exploration with sample workspace and workload filters
- Hotspot investigations grounded in visible evidence
- Deterministic workload-specific investigation recommendations
- Local action creation and status management

## Project structure

```text
├── rayfin/
│   ├── rayfin.yml          # Fabric auth and static hosting configuration
│   └── data/
│       └── schema.ts       # Empty schema; the demo uses local state
├── src/
│   ├── data/sampleData.ts  # Demonstration capacity telemetry
│   ├── services/
│   │   └── recommendationEngine.ts
│   ├── App.tsx             # Capacity investigation workflow
│   ├── main.tsx            # React entry point
│   ├── styles.css          # Responsive application styles
│   └── types.ts            # Domain types
└── package.json
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Deploy app to Fabric and start local dev server |
| `npm run build` | Production build |
| `npm run build:fabric` | Build for Fabric deployment |
| `npm run lint` | Lint with ESLint |
| `npm run test` | Run unit tests with Vitest |
| `npm run rayfin:up` | Deploy app to Fabric (no local dev server) |

## Connecting real telemetry

Replace `src/data/sampleData.ts` with an approved adapter for your Fabric
capacity telemetry. Keep tenant and workspace authorization server-side, avoid
shipping secrets to the browser, and preserve the visible evidence used to
produce each recommendation.
