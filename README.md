<div align="center">
  <img src="docs/icon.png" alt="Flash Cards" width="96" height="96" />
  <h1>Flash Cards</h1>
  <p><em>Picture-flashcard app for young kids: tap a card to hear its name across 48 categories</em></p>
  <p><a href="https://norden-flashcards.vercel.app">Live</a> &middot; <a href="https://github.com/bunlongheng/flash-cards">Repo</a> &middot; <a href="https://bunlongheng.com/projects?name=flash-cards">Portfolio</a></p>
  <img src="docs/social-preview.png" alt="Flash Cards - preview" width="820" />
</div>

---

# Flash Cards

A static React app for picture-flashcard learning: browse a grid of categories, open one, and tap each card to hear its name spoken aloud, with sound effects, animations, and a progress counter that celebrates when every card is cleared. Built for young kids.

![Flash Cards home screen](docs/screenshots/home.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![React](https://img.shields.io/badge/React-18-149eca?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)
![Vitest](https://img.shields.io/badge/tests-27%20passing-6da35f?logo=vitest)
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

Flash Cards is a single-page React app built with Vite. Routing generates one route per configured category, each category's static JSON dataset is lazy-loaded per route via `import.meta.glob` (its own chunk), and all interaction state lives in React - there is no server.

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

    Data[("src/data/*.json<br/>48 category datasets")]
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

| Layer     | Files                                            | Role                                                                  |
| --------- | ------------------------------------------------ | --------------------------------------------------------------------- |
| Routing   | `App.jsx`                                        | Builds one `<Route>` per configured category slug                     |
| Screens   | `Categories.jsx`, `Category.jsx`, `Settings.jsx` | Home grid, flashcard detail with progress/celebration, settings modal |
| Component | `Thumbnail.jsx`                                  | One memoized flashcard tile rendered as a native `<button>`           |
| Helpers   | `utility/config.js`, `utility/*`                 | Hardened env-list parser plus pure color/audio/page/image helpers     |
| Data      | `src/data/*.json`                                | 48 static category datasets, glob-loaded                              |

## Tech stack

- React 18 + React Router 6 (client-side routing)
- Vite 5 build tooling; Vitest + React Testing Library (unit/component) and Playwright (e2e)
- ESLint (react-hooks + jsx-a11y) and Prettier, both gated in CI
- Bootstrap 5 + plain CSS for styling; images served as WebP
- Web Speech API (`speechSynthesis`) for spoken labels
- Deployed as a static build (Vercel) with security + long-cache headers; CI via GitHub Actions

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

| Env var                          | Required | Purpose                                                                                                           |
| -------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `REACT_APP_CATEGORIES`           | yes      | Comma-separated category slugs; one route + home tile per slug. Each must have a matching `src/data/<slug>.json`. |
| `REACT_APP_TRANSPORTATION_TYPES` | yes      | Comma-separated slugs for the random transportation banner on the home screen.                                    |
| `REACT_APP_GREETING`             | no       | Greeting shown on the home screen (defaults to `Hi!`).                                                            |

## Project layout

```
flash-cards/
  index.html            # Vite entry
  vite.config.js        # Vite + Vitest config (coverage gate)
  vercel.json           # SPA rewrites + security & long-cache headers
  eslint.config.js      # ESLint flat config (react-hooks + jsx-a11y)
  playwright.config.js  # e2e config (runs against the dev server)
  src/
    App.jsx             # Router (wrapped in an ErrorBoundary): one route per category
    ErrorBoundary.jsx   # Friendly fallback for render errors
    Categories.jsx      # Home grid + Settings modal
    Category.jsx        # Flashcard view: click/speak/progress/celebration
    Thumbnail.jsx       # Memoized native-button card tile
    Settings.jsx        # Background-image toggle
    utility/            # config (env parser), color, audio, page, image helpers
    data/               # 48 category datasets (*.json)
    *.test.{js,jsx}     # Vitest + React Testing Library suites
  public/               # images, sounds, fonts, icons
  NOTES.md              # how to add a new category
```

## Testing

```bash
npm run lint           # ESLint (react-hooks + jsx-a11y)
npm run format:check   # Prettier formatting check
npm test               # Vitest suite (27 tests, 11 suites)
npm run test:coverage  # with the coverage gate (85% statements/lines)
npm run test:e2e       # Playwright end-to-end smoke of the core flow
```

## License

[MIT](LICENSE) (c) Bunlong Heng

---

<p align="center">
  <sub>Built by <a href="https://bunlongheng.com">Bunlong Heng</a> &middot; <a href="https://bunlongheng.com/projects/flash-cards">See it in my portfolio &rarr;</a></sub>
</p>

---

<div align="center">

<a href="https://bunlongheng.com"><img src="https://img.shields.io/badge/-bunlongheng.com-3A3A3C?style=for-the-badge&amp;labelColor=2A2A2C&amp;logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y%2BmAAADAFBMVEXx8vLq6v%2F19fX09PT8%2Ff309PT5%2BfnAwMBMaXHx8vL19fX5%2Bfny8vL09PT39%2Ff6%2Bfn6%2Bvr09PTx8fH4%2BPn%2F8vLy8%2FP09PTz8%2FPy8vL%2F%2F%2F%2Fz9PTz9PP19fby8vP19PXz8%2FT19%2Fb08%2FTx8vLy8vL09vby8%2FL29vf19fTv8PDz9vb7%2Bvn%2F%2Ff%2F9%2Ff3w8vH29fb%2F%2FP339%2Ff5%2Bfn59%2Ff19PT09PR7rao3VF3%2F%2Fv8AKDR6sqsBV1vv8fL4%2BPiux8b8%2Bvq90NDy8%2FR%2BlpppnZyZqrACLTxclZJSkI9en5ssZ2luqaUAeWgqbW4BX1gCfG0%2Fa3QaVG0MN0UKNUKUpKsGpYMAKjoRQ1UDf3AQRloJqIgEm32d0cUBg3ElbnQIln8eVWgrmIdP0KzF5d5s2acdfHwppJCP5MMXl4Tz8%2FLv8%2FP39%2FiewL5%2BqahYf4IrTFZkk5KlxsREiIYAHiqDnKFmnJowc3IdVllvpKK7zc3D2tnk5%2BmuycdwpKKuub2yv8Ly%2B%2FkAMT7z%2Bvjq7e09gH93q6kGdWpGgoJZmJSlw8M7c3WwyceTw76w1M8mYmpFfX8lW2AFOEpGiYhxqqRrqaRb2rdIsZ8AVE91jpU7d3t3saqBoKhako4AWVEcUlg3aWwDupAHb2YwmIkPP1ERSVA7WmZ8tq8HT14oZW%2BYuLsMl3wQT10ROksENUc8Z3MJSGVLh4dqpJ%2BXr7U51awUgHM4v6ad1MkPuJZAiowVd3IEhnZH0aoYrI05p5sDtYwkzZ8EPViYxsRel5USbHAIgmwIM0gQamzU4uF2malQi4oWQFQ1zaYrp4UXlYwfiHoyxqFE1q4qeX4yn5JIxKkdrX1b1rAbWGvd5Oh91sRijpomsJEVc3Ukc34dqIcwuJVKwZIXkoQZcXlNv5g%2BqZUZvpNl2rPG9N0WkIoNqouW4sVPwp%2BM0b6h0ssfq4d%2F1r8hpo%2Fh9e4AamUjnI9avaBixqgklYWSwL4xtItUxplYl5qZ58mq78wMgnYXfnlOmJaR1L%2Bj78ny9fS%2FrXQPAAAAFXRSTlP7Brvx%2FsJhAgD87r4U72C4uGH8vhRDodYHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6UlEQVQokS2Sd3BUVRSHb0KS3QRCiZw5t%2By9j33zXjZkyUs2uekhEAi9dwRCL4JUEQRFAQUs9A4WOopKU0GpFoqCBZUivaqoFKkWLIS5GX7%2FfnPO78yZj%2Fj8UTViK6HggvNgSGuluEZRKbZqlN9H%2FFWiWUzIFQK5fhjOIRTDoqv4ia86S4q3KSByHdSqIhxofBKr5iNxLMm2bQqWVkorJ%2BAkO46nkQJhceSRmCTDvKJIJBLJzMxMLU6POJ4eBPF1KpNEbdt2Cms4LCcnZ%2FX6D3d%2BsKJJ7VSlNLoqgbjUtmkKKxlVmpf3bsFXW3d1b77gueJAQIPQBCilkMKemNi23Ts9T35%2FaMe2rsvmTypylGUFCSIYWJLXrm2nUwOPfNO5w%2B73Okxnjqe0JigQEL3JizoeONr%2F2u99vju4fd1rdZnyspQmnGvAUBprWNqz348%2FhXN%2F6P1%2By4Uvs%2FJkpRQRwpJBRVn7vf16Dfitz5XevQqWt3yalXtKaRIUQmglWfsu5y7%2BMrDs0TMftWo1ZVy64xioOVpcIdt8%2Fvqvf9%2F859KJsrLmrzA%2BOKC0IkFEtJza7JOfr%2FYd0P9G98tdOxe0Hp9qJrOIBgDuOeEtp%2F%2B4d%2FvWX%2F%2F9u%2B%2FtlaUTmOWZg7SQEEyuFe52%2BML9O3cZO%2F5xl06zn2VcadOJUqJTzt7a82XfP7sx9vmGNm1m1MstV4IHCVAAoTLqL1372ddn%2Fz%2B2v%2FWq12c1fSpsaeQWAZAANntxzuI3e3zbo8XGpm%2FMnNqiXrh%2BljaPd6UUabkjps19tdGnX2zKb9b4pTFDCzOMLmYtpW5h%2BpCRTeYtyV%2BT36zx808OL4xYGoFrkqDTbJpSXLdRgwbPZL%2BQnT129OOPFVEEsAMJpHKdeKMJgJSAiALdjJANQKnRJI4R6boAKEwLCiGoBBegQjBftQo1KQWOlplFKSV9qGaF1NpAE7QQESTlMSy6pp%2F4%2FFFVYxMNRBTaiM0tkImxNaL8vgfDR8gvoYRaxgAAAABJRU5ErkJggg%3D%3D" alt="bunlongheng.com"></a>
<a href="https://www.linkedin.com/in/bunlongheng/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
<a href="https://www.instagram.com/ibunlong/"><img src="https://img.shields.io/badge/Instagram-C13584?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"></a>
<a href="mailto:bheng.code@gmail.com"><img src="https://img.shields.io/badge/Email-2E7D32?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>

<br>

Built by **[Bunlong](https://bunlongheng.com)** &nbsp;&middot;&nbsp; [more apps](https://bunlongheng.com/projects)

</div>
