# eik.dev

This repo holds the code and docs for the documentation website at [eik.dev](https://eik.dev/).
It is built using [Docusaurus](https://docusaurus.io/).

## Commands

All commands are run from the root of the project.

| Command            | Action                                              |
| :----------------- | :-------------------------------------------------- |
| `npm install`      | Installs dependencies                               |
| `npm run dev`      | Starts local dev server at `localhost:8080`         |
| `npm run build`    | Build your production site to `./build/`            |
| `npm start`        | Preview your build locally at `localhost:8080`      |
| `npm run deploy`   | Run by GitHub Actions to deploy to GitHub Pages     |
| `npm run lint`     | Run ESLint + Prettier                               |
| `npm run lint:fix` | Fix ESLint and Prettier issues that are autofixable |

## Contributing

Contributions are welcome 🧡

If you change the URL of a page, please add a redirect rule to `docusaurus.config.js`.

PRs should target the `source` branch. The `main` branch is where the built website is deployed from.
