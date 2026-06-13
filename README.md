# Jay Savaliya — Portfolio (React + Vite)

A fast, single-page developer portfolio built with **React 18 + Vite**. Plain CSS
(design tokens in `src/index.css`), no UI library — so it stays light and easy to tweak.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for production

```bash
npm run build    # outputs to dist/
npm run preview  # preview the built site locally
```

## Deploy (free)

The build uses a relative base path, so `dist/` works anywhere:

- **Netlify Drop** — run `npm run build`, then drag the `dist/` folder onto
  https://app.netlify.com/drop. Live in seconds.
- **GitHub Pages** — push the repo, then either commit `dist/` or use a Pages action.
  For `username.github.io` the site serves from the root automatically.
- **Vercel / Cloudflare Pages** — import the repo; build command `npm run build`,
  output directory `dist`.

## Editing content

All copy lives in **`src/data/content.js`** — projects, stack, experience, stats,
links. Change text there without touching the components.

The résumé download (nav "Résumé" button) points to `public/Jay_Savaliya_Resume.pdf`.
Replace that file to update it. Update the link/email/phone in `content.js` → `PROFILE`.

## Structure

```
src/
  main.jsx            # entry
  App.jsx             # composes the page
  index.css           # design tokens + all styles
  lib.jsx             # Reveal wrapper, scroll-spy hook, RichText, icons
  data/content.js     # all editable content
  components/         # Nav, Hero, Schematic, Work, Stack, Experience, Contact
```
