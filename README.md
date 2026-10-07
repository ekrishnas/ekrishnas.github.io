# ekrishnas.github.io

Personal portfolio for E Sai Krishna — a single static page, no build step.

## Structure

```
index.html        page content
css/style.css      styles
js/main.js         mobile nav toggle + footer year
assets/            resume PDF
```

## Editing

Open `index.html` in any editor and change the markup directly — there's no
template engine or data file to keep in sync. Styles live in `css/style.css`.

To preview locally, just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deployment

This is a GitHub Pages **user site**, so it's served directly from this
repository with no build and no GitHub Actions workflow. In the repo's
**Settings → Pages**, set:

- Source: `Deploy from a branch`
- Branch: `main` / `(root)`

Any push to `main` updates the live site at `https://ekrishnas.github.io`
within a minute or two — no CI pipeline required.
