# .lol Explorer

A fast, curated directory and discovery engine for the `.lol` corner of the internet.

Built with **Astro**, **Tailwind CSS**, and **TypeScript**, designed with a clean **Neo-Brutalist** aesthetic.

## Features

- **Trending Spotlight Bento Grid**: Highlights top trending `.lol` products (e.g. `outbid.lol`, `omg.lol`, `solarwar.lol`).
- **Dual View Modes**: Instant toggle between visual **Grid View** and high-density **List View**.
- **Live Search & Multi-Filter**: Real-time filtering across titles, descriptions, categories, and detected technology stacks.
- **Random .lol Discovery**: One-click quick discovery button in the navigation header.
- **Automated Crawler & Validator**: Built-in scripts to probe Certificate Transparency logs, check DNS/HTTPS reachability, and auto-populate `src/data/sites.json`.
- **Automated GitHub Actions Cron**: Runs weekly updates to discover and verify new `.lol` domains automatically.
- **100% Static & Blazing Fast**: Zero database overhead, $0 hosting on Cloudflare Pages / Vercel.

## Quick Start

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build static production bundle
npm run build
```

## Running the Crawler

```bash
# Discover & scrape live .lol domains
node scripts/fetch-lol-sites.mjs

# Verify DNS resolution & HTTP reachability
node scripts/verify-live.mjs
```

## License

MIT
