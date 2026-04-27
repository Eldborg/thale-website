# Thale Website

## What it is
Coming-soon landing page for Thale — a fintech startup. Tagline: "Rethink Money."

## Stack
- Next.js 16 (App Router, static export)
- Tailwind CSS
- Deployed to Vercel — project: `eldborgs-projects/thale-website`
- GitHub: `Eldborg/thale-website`

## Deployment
```bash
source ~/.nvm/nvm.sh && nvm use 20
npx vercel --token "$VERCEL_TOKEN" --prod --yes --scope eldborgs-projects
```
Then alias the new deployment URL to `thale-website.vercel.app`.
Vercel token is stored in memory (project_supercompany_credentials.md), scope: `eldborgs-projects`.

## DNS
- Domain: thale.ai (registered on GoDaddy, nameservers: ns47/ns48.domaincontrol.com)
- To point at Vercel: A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`

## Key design decisions
- **Heading** (`/public/heading.svg`): Exact SVG path data extracted from the original Framer site — not live text, not a font. Do not replace with a font-based heading.
- **Hero image** (`/public/hero.png`): 3D sculptural object (5794×5794px). Appears twice — bottom-left in full color, top-right desaturated and rotated.
- **Favicon** (`/app/icon.svg`): Real Thale logo mark — dark slate square (#28303A) with white zigzag shape. Placed in `app/icon.svg` (Next.js App Router convention).
- **Font**: Inter via Google Fonts — only used for the "Coming 2027" label.
- Background is pure white `#ffffff`.

## Current content
- Label: "Coming 2027"
- Heading SVG: "Rethink / Money" (with thin horizontal divider between words)
- No nav, no footer, single full-viewport page

## Node version
Must use Node 20. Run `source ~/.nvm/nvm.sh && nvm use 20` before any npm/npx commands.
