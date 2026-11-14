# Emran Shafaq — research, projects & blog

A personal academic portfolio and blog built with Astro, using the Codefolio template's dark theme, IBM Plex typography, and sidebar navigation.

## Development

```sh
npm install
npm run dev -- --background
npm run build
```

Use `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop` if your installed Astro CLI supports background mode. This template currently uses Astro 5; stock Astro 5 may ignore `--background` and run in the foreground instead.

## Edit your content

- `src/data/profile.ts`: name, research interests, optional portrait, email, GitHub, and CV. Empty links remain hidden. Put your own portrait in `public/assets/` and set its relative path in the profile.
- `src/pages/index.astro`: introduction and homepage sections.
- `src/pages/research.astro`: research interests.
- `src/pages/about.astro`: bio and academic background.
- `src/content/projects/`: Markdown project write-ups. Frontmatter includes `title`, `description`, `tags`, `order`, and `status`. Project cards and pages are generated automatically. The two initial entries are marked as forthcoming, with no claims of results or working demos.
- `src/content/blog/`: Markdown posts with `title`, `description`, `date`, and `draft`. Change `draft: true` to `draft: false` when ready to include a post. Drafts are excluded from all public routes and listings. The homepage shows the three latest posts.
- `src/components/Sidebar.astro`: sidebar links.

## Day and night themes

The sidebar switch changes between the bark-and-fern night theme and a warm paper and moss-green day theme. Night uses bark-brown charcoal, warm ivory text, and fern-green accents. Night is the default; the choice is saved in local storage and retained across page navigation. Edit the palette variables in `src/styles/themes.css`. The day grid uses `public/assets/grid-day.svg` with moss-green lines and the same geometry as the original grid.

## GitHub Pages

The site builds to static HTML in `dist/`. `SITE_URL` and `BASE_PATH` configure its public URL and repository prefix. All internal links and assets support a repository base path.

```sh
SITE_URL=https://username.github.io BASE_PATH=/repository-name npm run build
```

For a user site (`username.github.io`), omit `BASE_PATH`. Deployment has not been configured or published. When ready, set up a GitHub Actions Pages workflow using the [Astro deployment guide](https://docs.astro.build/en/guides/deploy/github/).

## Template attribution

Based on [Codefolio](https://github.com/danielunited/codefolio), an open-source portfolio template. The original template is MIT licensed; see its repository for license details.
