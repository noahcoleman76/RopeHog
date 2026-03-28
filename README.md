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

### Deploy with GitHub Actions

1. Push this project to GitHub.
2. In the repository, open `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `GitHub Actions`.
4. Add a workflow like this at `.github/workflows/deploy.yml`:

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Manual deploy

If you prefer a manual flow, build locally with:

```bash
npm run build
```

Then publish the contents of `dist/` to your GitHub Pages branch or deployment target.

## Notes

- Favicon and share metadata are defined in `index.html`.
- Review images are expected in `public/reviews/`.
- Public assets like videos and logos live in `public/`.
