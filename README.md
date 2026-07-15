# Flash Cards

A static React single-page app for interactive picture-flashcard learning. Browse a
grid of categories (animals, shapes, planets, vehicles, and 48 more), open one, and tap
each card to hear its name spoken aloud, with sound effects, animations, and a progress
counter that celebrates when every card is cleared. Built for young kids.

## Tech stack

- React 18 + React Router 6 (client-side routing, one route per category)
- Create React App (react-scripts) build tooling
- Bootstrap 5 + plain CSS for styling
- Category data as static JSON files under `src/data/`
- Web Speech API (`speechSynthesis`) for spoken labels

There is no backend or server - the app is fully static and can be hosted on any CDN.

## Getting started

### Prerequisites

- Node.js 18+
- npm 9+

### Install and run

```bash
git clone https://github.com/bunlongheng/flash-cards.git
cd flash-cards
npm install
cp .env.example .env   # then fill in the values (see below)
npm start              # http://localhost:3000
```

## Environment variables

Copy `.env.example` to `.env` and set:

| Variable | Required | Purpose |
|----------|----------|---------|
| `REACT_APP_CATEGORIES` | yes | Comma-separated category slugs; one route + home tile per slug. Each slug must have a matching `src/data/<slug>.json`. |
| `REACT_APP_TRANSPORTATION_TYPES` | yes | Comma-separated slugs for the random transportation banner on the home screen. |
| `ANALYZE` | no | Set to `true` to enable the webpack bundle analyzer. |

## Usage

1. The home screen shows a grid of category tiles.
2. Click a tile to open that category's flashcards.
3. Click a card to hear its name spoken and mark it done; clear them all for a celebration.
4. Press any letter `a`-`z` to jump to the first card starting with that letter.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run the dev server on port 3000 |
| `npm run build` | Production build to `build/` |
| `npm test` | Run the test suite |
| `npm run analyze` | Build and open the bundle analyzer |

## License

MIT
