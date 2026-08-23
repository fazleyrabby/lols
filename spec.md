# .lol Explorer — MVP Specification
Version: 1.0
Status: MVP
Domain: https://lol.fazleyrabbi.xyz
---
## 1. Product Overview
`.lol Explorer` is a lightweight single-page website that discovers and showcases interesting websites using the `.lol` top-level domain.
The MVP should focus on:
- Discovering `.lol` websites
- Displaying useful information about each website
- Showing estimated traffic/visitor counts
- Showing screenshots/previews
- Categorizing websites
- Detecting technologies where possible
- Providing search, filtering, and sorting
- Creating a visually polished, fast, SEO-friendly directory
The MVP is intentionally simple.
Do NOT build a backend, database, authentication system, crawler infrastructure, or Docker environment yet.
The first version should be an Astro application backed by local/static data.
---
# 2. Core Product Principle
The project should feel like:
> "A beautiful explorer for the `.lol` corner of the internet."
It should NOT feel like:
- An enterprise analytics dashboard
- A generic domain registrar
- A social network
- A complicated SaaS application
- A scraping control panel
The experience should be fast, visual, curious, and data-oriented.
---
# 3. MVP Goals
The MVP must allow a visitor to:
1. Open `lol.fazleyrabbi.xyz`
2. See interesting `.lol` websites immediately
3. Search for a domain
4. Filter websites by category
5. Sort websites by traffic/popularity/name
6. Open a website's information
7. See a screenshot/preview
8. See estimated monthly visits
9. See detected technologies
10. Visit the original website
---
# 4. Non-Goals
The MVP must NOT include:
- User authentication
- User accounts
- Comments
- Likes
- Reviews
- User profiles
- Payments
- Subscriptions
- Admin dashboard
- Complex API
- PostgreSQL
- MySQL
- Redis
- Laravel
- Docker
- Kubernetes
- Background workers
- Queue systems
- Automated million-domain crawling
- Real-time analytics
- Website owner verification
- Browser automation infrastructure
- AI chatbot
These can be considered after the MVP proves useful.
---
# 5. Technology Stack
## Required
### Frontend
- Astro
- TypeScript
- Tailwind CSS
### Data
Static TypeScript/JSON data stored inside the repository.
Example:
```text
src/
├── data/
│   └── sites.ts

Development

* Node.js
* npm
* Git

Deployment

Deploy the Astro application using a static hosting provider such as:

* Cloudflare Pages
* Vercel
* Netlify

The production domain is:

https://lol.fazleyrabbi.xyz

⸻

6. Architecture

The MVP architecture is intentionally simple:

                    ┌─────────────────────┐
                    │   .lol Domain Data  │
                    │                     │
                    │     sites.ts        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       Astro         │
                    │                     │
                    │ Search              │
                    │ Filtering           │
                    │ Sorting             │
                    │ Rendering           │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Static Website      │
                    │                     │
                    │ lol.fazleyrabbi.xyz │
                    └─────────────────────┘

There should be no server-side database for the MVP.

⸻

7. Future Architecture

The project should be structured so automated data collection can be introduced later.

Future:

                    Domain Sources
                         │
                         ▼
                       Crawler
                         │
              ┌──────────┴──────────┐
              │                     │
          HTTP Fetch            Playwright
              │                     │
              └──────────┬──────────┘
                         ▼
                   Data Processor
                         │
                         ▼
                    PostgreSQL
                         │
                         ▼
                      API
                         │
                         ▼
                       Astro

Do not implement this infrastructure during MVP.

⸻

8. Data Model

Create a strongly typed website model.

Example:

export interface LolSite {
  domain: string
  title: string
  description: string
  category: string
  monthlyVisits?: number
  globalRank?: number
  technologies: string[]
  screenshot?: string
  favicon?: string
  country?: string
  foundedYear?: number
  tags?: string[]
  source?: string
  lastChecked?: string
}

⸻

9. Example Data

Example:

export const sites: LolSite[] = [
  {
    domain: "example.lol",
    title: "Example",
    description: "An example .lol website.",
    category: "Tools",
    monthlyVisits: 125000,
    globalRank: 84231,
    technologies: [
      "Astro",
      "Cloudflare"
    ],
    screenshot: "/screenshots/example-lol.webp",
    tags: [
      "utility",
      "web"
    ],
    source: "Semrush",
    lastChecked: "2026-08-23"
  }
]

The initial dataset should contain approximately:

50–200 websites

Quality is more important than quantity.

⸻

10. Traffic Data

Traffic numbers must be clearly described as estimates.

Never claim:

“This website has 384,000 visitors.”

Instead display:

“Estimated monthly visits: 384K”

or:

“384K estimated monthly visits”

Traffic information should include a source when available.

Example:

Estimated monthly visits
384K
Source
Semrush
Last updated
August 2026

If no reliable traffic estimate exists:

Traffic estimate unavailable

Do not invent traffic numbers.

⸻

11. Website Categories

Initial categories:

AI
Developer
Games
SaaS
Tools
Social
Entertainment
Personal
Blog
Business
E-commerce
Media
Education
Other

Do not create excessive categories.

A website should normally have one primary category.

Tags can provide additional classification.

Example:

Category:
Developer
Tags:
API
Open Source
Tools

⸻

12. Technology Detection

Technology data should describe publicly detectable technologies.

Examples:

Astro
Next.js
React
Vue
Laravel
WordPress
Cloudflare
Vercel
Netlify
Tailwind CSS
Google Analytics
Plausible
Umami

Technology data should not be represented as guaranteed facts if detection is uncertain.

Use:

Detected technologies

rather than:

Technology stack

where appropriate.

⸻

13. Screenshots

Each website may have a screenshot.

Recommended format:

.webp

Keep screenshots reasonably compressed.

Suggested size:

1280 × 720

Do not store massive original screenshots.

MVP screenshots can be manually collected or generated externally.

Automated screenshot generation is a future feature.

⸻

14. Single Page Layout

The primary experience should be a single-page explorer.

Suggested structure:

┌─────────────────────────────────────────────┐
│                                             │
│                  .lol                       │
│                                             │
│       Explore the .lol internet.            │
│                                             │
│ Discover interesting websites, tools,        │
│ games, communities and projects.            │
│                                             │
│ [ Search .lol websites...                 ] │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ 1,248 Sites   14 Categories   124 Tech      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ Trending                                    │
│                                             │
│ [Site] [Site] [Site] [Site]                 │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ Explore                                     │
│                                             │
│ [Search] [Category] [Tech] [Sort] [View]    │
│                                             │
│ Site cards                                  │
│                                             │
└─────────────────────────────────────────────┘

⸻

15. Header

The header should be minimal.

Left:

.lol

Right:

About

Optionally:

Submit

Do not create a large navigation system.

The .lol logo should link to the homepage.

⸻

16. Hero Section

Main heading:

Explore the .lol internet.

Supporting text:

Discover interesting websites, tools, games,
communities and projects hiding behind .lol.

Search input:

Search .lol websites...

Search should be the primary interaction.

⸻

17. Statistics

Show high-level numbers.

Example:

1,248
Sites indexed
14
Categories
124
Technologies detected

These values should be generated dynamically from the dataset.

Do not hardcode totals in the UI.

Example:

sites.length

For technologies:

new Set(
  sites.flatMap(site => site.technologies)
).size

⸻

18. Trending Section

Display a small selection of popular websites.

Suggested:

4–8 sites

Sort based on:

monthlyVisits

If traffic data is unavailable, fall back to another ranking mechanism.

Each card should display:

* Domain
* Website title
* Description
* Estimated monthly visits
* Category
* Screenshot/favicon

⸻

19. Explore Section

This is the main directory.

Controls:

Search
Category
Technology
Sort
View Toggle

Search

Search across:

* domain
* title
* description
* tags

Search should be case-insensitive.

Examples:

browser
game
AI
developer

⸻

20. Filters

Category

Dropdown or compact filter.

Example:

All
AI
Developer
Games
SaaS
Tools
Social
...

Technology

Example:

All
Astro
Next.js
React
Laravel
WordPress
...

Filters should be combinable.

Example:

Category = Developer
Technology = Astro

⸻

21. Sorting

Provide:

Most Visited
Highest Ranked
Recently Added
Recently Checked
Name A–Z
Name Z–A

If a website doesn’t have the relevant metric, place it after sites that do.

⸻

22. Website Views (Grid & List)

The explorer should support toggling between a Grid View and a List View.

**Grid View (Default):**
┌──────────────────────────────┐
│                              │
│       Website Screenshot     │
│                              │
├──────────────────────────────┤
│ ● browser.lol                │
│ Browser                      │
│                              │
│ Browser-based tools...       │
│                              │
│ 384K visits     Tools        │
│                              │
│ Astro · Cloudflare           │
└──────────────────────────────┘

**List View:**
A compact row layout prioritizing data density for fast scanning.

┌──────────────────────────────────────────────────────────┐
│ ● browser.lol  | Browser-based tools... | 384K  | Tools  │
└──────────────────────────────────────────────────────────┘

Keep cards and rows compact.

Avoid excessive whitespace.

⸻

23. Website Details

The MVP can use a modal/drawer instead of another page.

When the user clicks a card:

┌───────────────────────────────────────┐
│                                       │
│ browser.lol                      ×    │
│                                       │
│ [ Screenshot ]                        │
│                                       │
│ Browser                               │
│ Browser-based tools and utilities.   │
│                                       │
│ Estimated monthly visits              │
│ 384K                                  │
│                                       │
│ Global rank                            │
│ #101K                                 │
│                                       │
│ Category                              │
│ Tools                                 │
│                                       │
│ Detected technologies                 │
│ Astro · Cloudflare                   │
│                                       │
│ [ Visit website → ]                   │
│                                       │
└───────────────────────────────────────┘

The external website must open in a new tab.

⸻

24. Responsive Design

The site must work well on:

* Desktop
* Laptop
* Tablet
* Mobile

Desktop:

4-column cards

Tablet:

2-column cards

Mobile:

1-column cards

Search and filters should remain usable on small screens.

⸻

25. Visual Direction

The design should be:

* Minimal
* Technical
* Editorial
* Slightly playful
* Data-focused
* Fast
* Clean

Avoid:

* Excessive gradients
* Huge rounded cards
* Excessive glassmorphism
* Excessive animations
* Excessive whitespace
* Purple/blue SaaS aesthetics
* Decorative dotted backgrounds
* Overly complex dashboards

The .lol identity should feel playful without becoming childish.

⸻

26. Color

Use a restrained palette.

Prefer:

* Black
* White
* Off-white
* Neutral gray
* One strong accent

The accent can be a warm or distinctive color.

Do not use multiple gradients.

⸻

27. Typography

Use a modern readable sans-serif.

Potential choices:

Inter
Geist
System UI

Use strong typography hierarchy.

The domain should be visually prominent.

Example:

browser.lol

rather than:

BROWSER

⸻

28. Animation

Keep animation subtle.

Allowed:

* Hover elevation
* Image fade-in
* Modal transition
* Filter transition
* Search result transition

Avoid:

* Continuous background animations
* Pulsing dots
* Excessive parallax
* Heavy scroll animations

Performance is more important than visual effects.

⸻

29. Performance

Target:

Lighthouse Performance: 90+

Optimize:

* Images
* JavaScript
* Fonts
* CSS
* HTML size

Prefer Astro static rendering.

Use client-side JavaScript only for:

* Search
* Filtering
* Sorting
* Modal/drawer interactions

Do not turn the entire application into a client-side SPA.

⸻

30. SEO

The page should have:

<title>.lol — Explore the .lol Internet</title>

Meta description:

Discover interesting websites, tools, games, communities and projects
on the .lol internet.

Include:

* OpenGraph metadata
* Twitter/X metadata
* Canonical URL
* favicon
* sitemap
* robots.txt

Canonical:

https://lol.fazleyrabbi.xyz/

⸻

31. Accessibility

The site must support:

* Keyboard navigation
* Visible focus states
* Semantic HTML
* Proper heading hierarchy
* Accessible form labels
* Accessible modal behavior
* Alt text for screenshots
* Sufficient color contrast

The search input must be usable without a mouse.

⸻

32. Project Structure

Recommended:

lol-explorer/
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── screenshots/
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Stats.astro
│   │   ├── Trending.astro
│   │   ├── Explorer.astro
│   │   ├── SiteCard.astro
│   │   ├── SiteDetails.astro
│   │   ├── Search.astro
│   │   ├── Filters.astro
│   │   └── Footer.astro
│   │
│   ├── data/
│   │   └── sites.ts
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── types/
│       └── site.ts
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md

Adjust the structure if Astro conventions make a simpler implementation preferable.

Do not create unnecessary abstractions.

⸻

33. Data Utilities

Create small reusable functions for:

getTrendingSites()
getCategories()
getTechnologies()
searchSites()
filterSites()
sortSites()
formatVisits()

Example:

formatVisits(384000)

should return:

384K

Example:

formatVisits(1200000)

should return:

1.2M

⸻

34. Search Behavior

Search should feel instant.

Input:

browser

should match:

browser.lol
Browser Tools
browser utilities

Normalize:

* lowercase
* whitespace
* punctuation where appropriate

Empty search should return all sites.

No search should produce a confusing empty state.

⸻

35. Empty States

If no results:

No .lol sites found.
Try another search or remove some filters.

If traffic is unavailable:

Traffic data unavailable

If screenshot is unavailable:

Use a clean fallback placeholder rather than a broken image.

⸻

36. Data Quality

Every site should have at minimum:

domain
title
description
category

Optional:

monthlyVisits
globalRank
technologies
screenshot
tags
source
lastChecked

Do not fabricate missing data.

Use:

Unknown

or omit the field.

⸻

37. Scraping Policy

Automated scraping is NOT part of the initial Astro runtime.

When scraping is introduced later:

* Respect robots.txt
* Use reasonable request rates
* Identify the crawler
* Do not bypass authentication
* Do not bypass access controls
* Do not scrape private content
* Only collect publicly accessible information
* Respect website terms and applicable laws
* Avoid excessive requests
* Cache results
* Do not repeatedly crawl unchanged websites unnecessarily

The crawler should be designed as a polite indexing system, not a denial-of-service tool.

⸻

38. Future Data Collection

After the MVP, create a separate script/application:

scripts/
└── crawler/

Initial crawler flow:

domain
  ↓
DNS
  ↓
HTTPS request
  ↓
robots.txt
  ↓
HTML
  ↓
metadata extraction
  ↓
technology detection
  ↓
screenshot
  ↓
JSON/database

Initially it can simply regenerate:

src/data/sites.ts

No database is required immediately.

⸻

39. Future Traffic Integration

Traffic providers should be integrated outside the frontend.

Possible future workflow:

Traffic Provider
      ↓
Data Import Script
      ↓
Normalized Data
      ↓
sites.ts

Eventually:

Traffic Provider
      ↓
Database
      ↓
API
      ↓
Astro

Every traffic value should have:

value
source
date

⸻

40. Future Automation

When the dataset becomes large:

Domain discovery
      ↓
Queue
      ↓
Crawler
      ↓
Extractor
      ↓
Screenshot
      ↓
Traffic enrichment
      ↓
Classification
      ↓
Database

Only introduce:

* PostgreSQL
* Redis
* Docker
* workers
* APIs

when the project actually needs them.

⸻

41. Analytics

For MVP, use lightweight privacy-friendly analytics if needed.

Do not build analytics infrastructure.

Potential options:

* Umami
* Plausible
* Cloudflare Web Analytics

Track:

* Page views
* Searches
* Popular domains
* Filter usage
* External website clicks

Do not collect unnecessary personal data.

⸻

42. External Links

Each site card should have a clear action:

Visit website →

Use:

target="_blank"
rel="noopener noreferrer"

The external site should never be loaded inside an iframe unless explicitly required and technically appropriate.

⸻

43. Content Attribution

Traffic estimates and third-party data should clearly identify their source.

Example:

384K estimated monthly visits
Source: Semrush
Updated: August 2026

Do not copy large amounts of third-party website content.

Use only the metadata/content necessary to describe and index the website.

⸻

44. Initial Dataset Strategy

Start with approximately:

100 sites

Aim for a diverse collection:

20 Developer / Tools
15 Games
15 AI
10 SaaS
10 Social
10 Personal
10 Entertainment
10 Business
10 Other

The exact distribution can change based on actual .lol domain availability.

Prioritize interesting websites over arbitrary domains.

⸻

45. MVP Milestones

Milestone 1 — Project Setup

* Create Astro project
* Configure TypeScript
* Configure Tailwind
* Create layout
* Create base styles
* Configure favicon
* Configure SEO metadata

⸻

Milestone 2 — Data

* Create LolSite interface
* Create initial dataset
* Add 50–200 sites
* Add categories
* Add technologies
* Add traffic estimates
* Add screenshots

⸻

Milestone 3 — UI

* Header
* Hero
* Search
* Statistics
* Trending section
* Site cards
* Filters
* Sorting
* Details modal
* Footer

⸻

Milestone 4 — Interaction

* Search
* Category filtering
* Technology filtering
* Sorting
* View toggle (Grid/List)
* Modal/drawer
* External links
* Responsive behavior

⸻

Milestone 5 — Quality

* Mobile testing
* Keyboard testing
* Accessibility
* Image optimization
* Lighthouse testing
* SEO validation
* Broken-link checking

⸻

Milestone 6 — Deployment

* Git repository
* Production build
* Deploy Astro
* Configure lol.fazleyrabbi.xyz
* Configure HTTPS
* Configure sitemap
* Configure robots.txt
* Verify OpenGraph preview
* Verify analytics

⸻

46. Definition of Done

The MVP is complete when:

* lol.fazleyrabbi.xyz loads successfully
* The site works without a backend
* At least 50 quality .lol websites are indexed
* Search works
* Filtering works
* Sorting works
* Website cards are responsive
* Website details can be viewed
* External links work
* Screenshots load correctly
* Traffic estimates are clearly labeled
* Data sources are shown
* Missing data is handled gracefully
* Mobile layout works
* Lighthouse performance is strong
* SEO metadata is configured
* Sitemap works
* Robots.txt works
* Production domain works

⸻

47. Future Roadmap

After MVP validation:

V1

Automated crawler.

Domain
→ Fetch
→ Metadata
→ Technology
→ Screenshot

V1.5

Traffic enrichment.

Traffic
Rank
Countries
Historical data

V2

Database.

PostgreSQL

V2.5

.lol Score.

V3

Discovery engine.

Trending
Fastest growing
New websites
Most popular technologies

V4

User submissions.

Submit a .lol website

V5

Potential expansion.

.lol
.dev
.xyz
.app
.page
...

Do not implement the multi-TLD system until .lol Explorer itself has demonstrated value.

⸻

48. Engineering Principles

Keep the codebase:

* Simple
* Typed
* Maintainable
* Componentized
* Performance-oriented
* Accessible
* SEO-friendly

Avoid:

* Premature abstractions
* Premature infrastructure
* Over-engineering
* Unnecessary dependencies
* Large client-side frameworks
* Complex state management

Astro should remain responsible for rendering.

Use TypeScript for data and application logic.

Use client-side JavaScript only where interaction requires it.

⸻

49. Final MVP Architecture

The final MVP should effectively be:

                  Git Repository
                       │
                       ▼
                ┌──────────────┐
                │    Astro     │
                │              │
                │   Tailwind   │
                │ TypeScript   │
                └──────┬───────┘
                       │
                       ▼
                 sites.ts
                       │
                       ▼
              Static HTML/CSS/JS
                       │
                       ▼
             lol.fazleyrabbi.xyz

No Docker.

No Laravel.

No database.

No Redis.

No crawler service.

No unnecessary infrastructure.

The goal is to ship the first useful version quickly, validate whether people actually find the directory interesting, and only then introduce automated crawling and persistent infrastructure.