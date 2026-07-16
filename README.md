# Flash Cards

A static React app for picture-flashcard learning: browse a grid of categories, open one, and tap each card to hear its name spoken aloud, with sound effects, animations, and a progress counter that celebrates when every card is cleared. Built for young kids.

![Flash Cards home screen](docs/screenshots/home.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![React](https://img.shields.io/badge/React-18-149eca?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)
![Vitest](https://img.shields.io/badge/tests-16%20passing-6da35f?logo=vitest)
![Vulnerabilities](https://img.shields.io/badge/prod%20vulns-0-6da35f)

## Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Project layout](#project-layout)
- [Testing](#testing)
- [License](#license)

## Features

- Browse a grid of 48 picture-flashcard categories (animals, shapes, planets, vehicles, and more), driven entirely by config.
- Tap a card to hear its name spoken aloud via the Web Speech API, with a click sound and a spoken label.
- Progress counter (`x/y`) that tracks how many cards are cleared, with milestone flying-image animations at 1, 5, 10, 15, 20, and 25.
- Completion celebration that plays when every card is cleared, then returns home automatically.
- Keyboard selection: press any letter `a`-`z` to jump to the first card starting with that letter.
- Loading, empty, and error states so a missing dataset shows a message instead of a blank or crashing screen.
- Configurable home greeting and a background-image toggle (persisted in `localStorage`).
- Fully static: no backend, no database, deployable to any CDN.

## Architecture

Flash Cards is a single-page React app built with Vite. Routing generates one route per configured category, each category is a static JSON dataset loaded at build time via `import.meta.glob`, and all interaction state lives in React - there is no server.

```mermaid
flowchart LR
    User["Child / user"]

    subgraph App["React SPA (Vite)"]
        direction TB
        Router["App.jsx<br/>router (one route per category)"]
        Home["Categories.jsx<br/>category grid + Settings"]
        Detail["Category.jsx<br/>flashcard view + state"]
        Tile["Thumbnail.jsx<br/>memoized card button"]
        Config["utility/config.js<br/>env list parser"]
    end

    Data[("src/data/*.json<br/>52 category datasets")]
    Env[[".env<br/>REACT_APP_* config"]]

    User --> Router
    Env --> Config --> Router
    Config --> Home
    Router --> Detail
    Detail -- "import.meta.glob" --> Data
    Detail --> Tile
    Tile -- "onSelect" --> Detail
```

Three layers, one direction of flow:

| Layer | Files | Role |
|-------|-------|------|
| Routing | `App.jsx` | Builds one `<Route>` per configured category slug |
| Screens | `Categories.jsx`, `Category.jsx`, `Settings.jsx` | Home grid, flashcard detail with progress/celebration, settings modal |
| Component | `Thumbnail.jsx` | One memoized flashcard tile rendered as a native `<button>` |
| Helpers | `utility/config.js`, `utility/*` | Hardened env-list parser plus pure color/audio/page/image helpers |
| Data | `src/data/*.json` | 52 static category datasets, glob-loaded |

## Tech stack

- React 18 + React Router 6 (client-side routing)
- Vite 5 build tooling; Vitest + React Testing Library for tests
- Bootstrap 5 + plain CSS for styling
- Web Speech API (`speechSynthesis`) for spoken labels
- Deployed as a static build (Vercel), CI via GitHub Actions

## Quick start

```bash
git clone https://github.com/bunlongheng/flash-cards.git
cd flash-cards
npm install
cp .env.example .env   # then fill in the values (see Configuration)
npm start              # http://localhost:3015
```

## Configuration

Copy `.env.example` to `.env` and set:

| Env var | Required | Purpose |
|---------|----------|---------|
| `REACT_APP_CATEGORIES` | yes | Comma-separated category slugs; one route + home tile per slug. Each must have a matching `src/data/<slug>.json`. |
| `REACT_APP_TRANSPORTATION_TYPES` | yes | Comma-separated slugs for the random transportation banner on the home screen. |
| `REACT_APP_GREETING` | no | Greeting shown on the home screen (defaults to `Hi!`). |

## Project layout

```
flash-cards/
  index.html            # Vite entry
  vite.config.js        # Vite + Vitest config (coverage gate)
  vercel.json           # SPA rewrites + build output dir
  src/
    App.jsx             # Router: one route per category
    Categories.jsx      # Home grid + Settings modal
    Category.jsx        # Flashcard view: click/speak/progress/celebration
    Thumbnail.jsx       # Memoized native-button card tile
    Settings.jsx        # Background-image toggle
    utility/            # config (env parser), color, audio, page, image helpers
    data/               # 52 category datasets (*.json)
    *.test.{js,jsx}     # Vitest + React Testing Library suites
  public/               # images, sounds, fonts, icons
  NOTES.md              # how to add a new category
```

## Testing

```bash
npm test               # run the Vitest suite (16 tests, 8 suites)
npm run test:coverage  # run with the coverage gate (70% floor)
```

## License

[MIT](LICENSE) (c) Bunlong Heng
