import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  wikiSidebar: [
    "intro",
    {
      type: "category",
      label: "基礎",
      collapsed: false,
      items: [
        "basics/basic-use",
        "basics/lists",
        "basics/conditions",
        "basics/for-with",
        "basics/points-vectors",
        "basics/colors",
        "basics/complex-numbers",
        "basics/actions-ticker",
        "basics/tone",
        "basics/supported-functions",
      ],
    },
    {
      type: "category",
      label: "記事作成ガイド",
      items: ["contributing", "guides/interactive-graphs"],
    },
    {
      type: "category",
      label: "グラフギャラリー",
      items: ["gallery"],
    },
  ],
};

export default sidebars;
