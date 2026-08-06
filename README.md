# Desmos Atlas

[English](README.md) | [日本語](README.ja.md)

Desmos Atlas is a bilingual wiki for sharing Desmos features, mathematical techniques, and graph creations in English and Japanese. Articles are maintained as Markdown or MDX and can include KaTeX equations, Desmos 2D, 3D, and Geometry calculators, and reusable React components.

- Repository: [physy/Desmos-Atlas](https://github.com/physy/Desmos-Atlas)
- Website: [https://physy.github.io/Desmos-Atlas/](https://physy.github.io/Desmos-Atlas/)
- Desmos: [Graphing Calculator](https://www.desmos.com/calculator)

## Requirements

- Node.js 20 or later
- npm

## Setup

Install the dependencies:

```bash
npm install
```

Start the development server in English or Japanese:

```bash
npm run start:en
npm run start:ja
```

To build both languages and preview the production site:

```bash
npm run preview
```

## Project structure

```text
docs/basics/                                      Japanese basic articles
docs/advanced/                                    Japanese advanced articles
docs/writing-guide/                               Japanese writing guide
docs/graph-gallery/                               Japanese graph gallery
i18n/en/docusaurus-plugin-content-docs/current/   English articles in the same structure
src/components/                                   Shared components for MDX
src/css/custom.css                                Site-wide styles
static/img/                                       Article images
sidebars.ts                                       Categories and article order
docusaurus.config.ts                              Site configuration
```

Japanese and English versions of the same article must use the same relative path and filename:

```text
docs/basics/lists.mdx
i18n/en/docusaurus-plugin-content-docs/current/basics/lists.mdx
```

## Creating and editing articles

Use `.md` for articles containing text, images, code, and KaTeX equations. Use `.mdx` when an article needs React components such as a Desmos calculator or an article card.

Detailed instructions are available in the website’s writing guide.

## Validation

Before submitting a change, run:

```bash
npm run typecheck
npm run build
```

`npm run build` generates both the English and Japanese sites and detects broken internal links.

## Issues

Use [GitHub Issues](https://github.com/physy/Desmos-Atlas/issues) to report incorrect content or display problems, or to propose a new article. Include the affected page, the current and expected behavior, and reproduction details or screenshots when relevant.

## Pull requests

Fork the repository and create a working branch:

```bash
git clone https://github.com/YOUR-NAME/Desmos-Atlas.git
cd Desmos-Atlas
git remote add upstream https://github.com/physy/Desmos-Atlas.git
git switch -c docs/short-description
```

After making your changes, run the type check and production build. Commit only the relevant files, push the branch to your fork, and open a pull request against the `main` branch of `physy/Desmos-Atlas`.
