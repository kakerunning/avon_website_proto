# AVON Heerlen — Update Official Club Website
[[AVON Heerlen's current website](https://www.avonheerlen.nl/)] is outdated. This is a modern rebuild I built as a portfolio project, with the club's permission. This project demonstrates a full-featured Next.js application with a headless CMS integration, responsive design, and smooth animations.

> **Portfolio project** — built to showcase front-end and full-stack skills with modern web technologies.

## Live Demo

- [[Vercel URL](https://avon-website-proto.vercel.app/)]
The news cards on the home page are fetched by Notion API from Notion Database. 
<img width="1274" height="662" alt="image" src="https://github.com/user-attachments/assets/2399c664-e5c5-4821-8fd2-82a836eebab8" />

- [[News List](https://avon-website-proto.vercel.app/nieuws)]
<img width="1482" height="924" alt="image" src="https://github.com/user-attachments/assets/bc31fdc3-9a2c-474e-9eb8-089acf78ee23" />

- [[Example news article](https://avon-website-proto.vercel.app/nieuws/trackmeeting_breda2025)]
<img width="1112" height="946" alt="image" src="https://github.com/user-attachments/assets/f654e0fe-794b-42a7-b6e9-b502b6c54e6b" />

- [The contents in Notion Database]
<img width="2832" height="1218" alt="image" src="https://github.com/user-attachments/assets/76468494-01a4-472e-873d-30f54f70f360" />

- [The example article in Notion page]
<img width="570" height="890" alt="image" src="https://github.com/user-attachments/assets/a984d262-c58a-47d0-a105-b6c5d4cb0ba9" />

---

## Features

- **Responsive, mobile-first design** with club branding (yellow, white, black)
- **News feed** powered by the Notion API — content editors update articles directly in Notion
- **Static Site Generation (SSG) + ISR** for fast page loads and fresh content
- **Animated UI** using Framer Motion for smooth page transitions and interactions
- **Training schedule** with filterable, accordion-style day/session layout
- **Multi-page structure**: Home, News, About, Training, Contact

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| CMS | Notion API (`@notionhq/client`, `notion-to-md`) |
| Deployment | Vercel (recommended) |

---

## Architecture Highlights

- **App Router** — uses Next.js 15's `app/` directory with server and client components
- **API Route** (`/api/news`) — server-side Notion data fetching, returns only published articles
- **ISR-ready** — news detail pages (`/nieuws/[slug]`) are statically generated at build time
- **Component separation** — reusable `TrainingSchedule` components (`DayAccordion`, `TrainingCard`, `Tag`) live in `components/` outside of `app/`

---

## Project Structure

```
avon_website/
├── app/
│   ├── api/news/route.ts          # Notion API endpoint
│   ├── components/                # Shared UI components
│   │   ├── Navigation.tsx
│   │   ├── NewsCard.tsx
│   │   ├── Footer.tsx
│   │   └── TrainingSchedule/      # Feature module: DayAccordion, TrainingCard, Tag      
│   ├── nieuws/
│   │   ├── page.tsx               # News index page
│   │   └── [slug]/page.tsx        # Dynamic news detail (SSG)
│   ├── over-ons/page.tsx          # About page
│   ├── trainingen/page.tsx        # Training schedule page
│   ├── contact/page.tsx           # Contact page
│   ├── layout.tsx
│   └── page.tsx                   # Home page
├── lib/notion.ts                  # Notion client + data fetching
├── types/                         # Shared TypeScript types
├── public/images/
└── tailwind.config.js
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Notion](https://www.notion.so/) account with an integration token

### Installation

1. Clone the repository

```bash
git clone https://github.com/kakerunning/avon_website_proto.git
cd avon_website_proto
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables — create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
```

4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Notion Database Schema

The Notion database used for news requires these properties:

| Property | Type | Notes |
|---|---|---|
| `Name` | Title | Article title |
| `Published` | Checkbox | Only `true` entries are shown |
| `Date` | Date | Publication date |
| `Slug` | Rich text | URL slug (e.g. `my-article`) |
| `Tags` | Multi-select | Category tags |
| `Description` | Rich text | Short summary |
| `Thumbnail` | Files | Cover image |

---

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Deployment

This project is optimized for deployment on **Vercel**. Set the following environment variables in your Vercel project settings:

- `NOTION_TOKEN`
- `NOTION_DATABASE_ID`
- `NEXT_PUBLIC_SITE_URL`

---

## Roadmap
- [ ] to fix the first-loaded image from the Notion Database\
It is caused by the fact that Notion serves images as expiring S3 presigned URLs, which appear blank on initial load.

- [ ] the club record list with CMS integration
- [ ] the membership subscription registration with stripe

---

## License

MIT — see [LICENSE](LICENSE) for details.
