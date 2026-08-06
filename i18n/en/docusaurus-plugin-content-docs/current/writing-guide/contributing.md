---
title: Create or edit an article
description: How to write, translate, test, and contribute Desmos Atlas articles
---

# Create or edit an article

Desmos Atlas articles are Markdown or MDX files. Contributions can be as small as correcting a typo or as substantial as adding a new tutorial or graph. If the change is not yet well defined, begin with an Issue.

## Where articles live

Japanese and English articles are separate files.

```text
# Japanese
docs/basics/functions.mdx

# English, using the same relative path
i18n/en/docusaurus-plugin-content-docs/current/basics/functions.mdx
```

- Add Japanese-only articles under `docs/`.
- Add English-only articles under the English docs directory.
- For a bilingual article, use the same relative path and filename in both directories.
- A missing translation is not automatically translated or displayed at the other locale's URL.
- If an article is linked from the shared sidebar, provide both language files to avoid a missing page.

## Categories

| Category      | Content                                   | Example location      |
| ------------- | ----------------------------------------- | --------------------- |
| Basics        | Desmos features, notation, and operations | `docs/basics/`        |
| Advanced      | Advanced techniques                       | `docs/advanced/`      |
| Writing Guide | MDX, components, and authoring            | `docs/guides/`        |
| Graph Gallery | Finished graphs and project explanations  | `docs/graph-gallery/` |

The sidebar order is defined in `sidebars.ts`. Add a new document ID to the appropriate category.

```typescript
items: ["basics/basic-use", "basics/new-article"];
```

## Markdown and MDX

- Use `.md` for prose, links, images, tables, code, and KaTeX formulas.
- Use `.mdx` when an article imports React components such as `DesmosEmbed`, `DesmosExpression`, or `ArticleCard`.
- Use lowercase letters, digits, and hyphens in filenames, such as `complex-numbers.mdx`.

Begin every article with front matter.

```md
---
title: Article title
description: A short description for search results
---

# Article title
```

Use headings in order without skipping levels. Link to another article with its documentation URL.

```md
[Working with lists](/docs/basics/lists)
```

## Formulas and images

Write inline math between `$...$` and display math between `$$...$$`.

```md
For $f(x)=ax^2+bx+c$,

$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.
$$
```

Rendered KaTeX can be copied as LaTeX with a click or keyboard action.

Store images under `static/img/` and render them with `ArticleImage`, which preserves the GitHub Pages base path. Always provide useful alternative text.

```jsx
import ArticleImage from "@site/src/components/ArticleImage";

<ArticleImage
  className="desmos-article-image"
  src="/img/basic/example/settings.png"
  alt="The graph settings panel in Desmos"
  loading="lazy"
/>;
```

Do not use a plain `<img src="/img/...">`, because it drops the repository subpath on GitHub Pages. Use a language-specific image directory, such as `static/img/basic/en/`, when text inside the image is translated.

## Embed a saved Desmos project

Pass the hash at the end of a Desmos share URL to `DesmosEmbed`. The component fetches state and loads it through the API, so the result remains interactive.

```jsx
import DesmosEmbed from "@site/src/components/DesmosEmbed";

<DesmosEmbed id="xfsfswckqy" title="A quadratic graph" height={520} />;
```

For 3D and Geometry projects, specify the calculator type.

```jsx
<DesmosEmbed id="shared-hash" kind="3d" title="3D graph" />
<DesmosEmbed id="shared-hash" kind="geometry" title="Geometry construction" />
```

A link to the original Desmos page appears below the embedded project.

## Display a Desmos-style expression list

Use `DesmosExpression` when an article only needs to show expressions and should not load a calculator.

```jsx
import DesmosExpression from "@site/src/components/DesmosExpression";

<DesmosExpression
  expressions={[
    { expression: "y=x^2", color: "red" },
    { expression: "x^2+y^2\\leq 9", type: "inequality", color: "blue" },
    { expression: "(1,2)", type: "point", color: "green" },
  ]}
/>;
```

Colors may be `red`, `blue`, `green`, `orange`, `purple`, `black`, or a hex value. Consult the component types for the available display styles.

## Control a graph with JavaScript

Pass exactly one of `expressions`, `state`, or `hash` to `DesmosCalculator`. Keep article-specific expressions and controls in the MDX file.

```jsx
import DesmosCalculator, {
  DesmosButton,
  DesmosControls,
} from "@site/src/components/DesmosCalculator";

export const expressions = [
  { id: "curve", latex: "y=a\\sin(x)", color: "#388c46" },
  { id: "a", latex: "a=1" },
];

<DesmosCalculator expressions={expressions}>
  <DesmosControls label="Graph controls">
    <DesmosButton
      onPress={(calculator) => {
        calculator.setExpression({ id: "a", latex: "a=2" });
      }}
    >
      Set a to 2
    </DesmosButton>
  </DesmosControls>
</DesmosCalculator>;
```

See [Control graphs with JavaScript](/docs/writing-guide/interactive-graphs) for state, hashes, 3D, Geometry, and custom controls.

## Link to another article with a card

Use the shared `ArticleCard` for internal articles and external resources. Wrap multiple cards in `ArticleCardGrid`.

```jsx
import ArticleCard, { ArticleCardGrid } from "@site/src/components/ArticleCard";

<ArticleCardGrid>
  <ArticleCard
    to="/docs/basics/lists"
    label="Basics"
    title="Lists"
    description="Learn how to work with collections of values."
  />
  <ArticleCard
    to="https://www.desmos.com/calculator"
    label="Desmos"
    title="Graphing Calculator"
    description="Open Desmos in a new tab."
  />
</ArticleCardGrid>;
```

Reuse this component instead of creating article-specific card markup.

## Translate an article

Create the English file at the same relative path as its Japanese counterpart. Translate front matter, headings, image alternative text, graph titles, and control labels. Use `/docs/...` for internal links; Docusaurus adds the active locale and GitHub Pages base path automatically.

If a separate Desmos project has English labels, use its hash in the English article. Check formulas, code, links, and images rather than treating translation as prose-only work.

## Preview and validate locally

Install dependencies once, then start the locale being edited.

```bash
npm install
npm run start:ja
npm run start:en
```

Before submitting, run the type checker and the production build for both locales.

```bash
npm run typecheck
npm run build
```

Use `npm run preview` for a final production preview. Check links, formulas, images, light and dark themes, narrow screens, and the loading and interaction behavior of Desmos embeds.

## Open an Issue

You can report an error or suggest an article without writing code through [GitHub Issues](https://github.com/physy/Desmos-Atlas/issues).

1. Search existing Issues for the same topic.
2. Select `New issue`.
3. Identify the page, describe the current result, and explain the expected result.
4. For display problems, include the URL, locale, browser, viewport, and a screenshot when possible.
5. For factual or mathematical corrections, identify the passage and include a source or proposed correction.

Example:

```md
## Page

/en/docs/basics/lists

## Problem

The formula in the Average section is incorrect.

## Proposed correction

Replace `total(L)` with `total(L)/length(L)`.

## Environment

English / Chrome / macOS
```

Comment on the Issue if you intend to work on it. A small typo fix may be submitted directly as a Pull Request.

## Open a Pull Request

If you do not have write access, fork the repository on GitHub and work in your fork.

```bash
git clone https://github.com/YOUR-NAME/Desmos-Atlas.git
cd Desmos-Atlas
git remote add upstream https://github.com/physy/Desmos-Atlas.git
git switch -c docs/list-examples
npm install
```

After editing, validate and commit only the relevant files.

```bash
npm run typecheck
npm run build
git status
git add docs/basics/lists.mdx
git commit -m "docs: add examples for Desmos lists"
git push -u origin docs/list-examples
```

Open your fork on GitHub, then select `Contribute` and `Open pull request`.

- Base repository: `physy/Desmos-Atlas`
- Base branch: `main`
- Compare branch: your topic branch

Describe the purpose, changed articles, validation performed, and related Issue. Writing `Closes #123` closes that Issue when the PR is merged.

```md
## Changes

- Added an average example to the Lists article
- Updated both Japanese and English versions

## Validation

- [x] npm run typecheck
- [x] npm run build
- [x] Checked light and dark themes

Closes #123
```

If a review requests changes, commit and push them to the same branch. The existing Pull Request updates automatically.

GitHub documentation: [Creating an Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue), [Creating a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request), and [Creating a Pull Request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).
