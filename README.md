# RopeHog

RopeHog is a React + Vite marketing site for the Rope Hog remote controlled roping track system.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The output is written to `dist/`.

## GitHub Pages

This project is configured with a relative Vite base (`base: './'`) so it can run from a GitHub Pages project site without hardcoding a repository name.

Because the site uses hash-based navigation (`#home`, `#about`, etc.), it is safe to host on GitHub Pages without additional SPA redirect handling.

### Classic `gh-pages` branch flow

1. Push this project to GitHub.
2. In the repository, open `Settings` -> `Pages`.
3. Under `Build and deployment`, choose:
   Source: `Deploy from a branch`
4. Select:
   Branch: `gh-pages`
   Folder: `/ (root)`
5. Save.

This project includes these scripts:

```bash
npm run build
npm run deploy
```

`npm run deploy` will:

1. Build the production site into `dist/`
2. Publish `dist/` to the `gh-pages` branch

### First deploy

After your repo is connected to GitHub, run:

```bash
npm install
npm run deploy
```

If the `gh-pages` branch does not exist yet, the deploy command will create it.

### Ongoing deploys

Any time you want to publish a new version:

```bash
npm run deploy
```

## Notes

- Favicon and share metadata are defined in `index.html`.
- Review images are expected in `public/reviews/`.
- Public assets like videos and logos live in `public/`.
