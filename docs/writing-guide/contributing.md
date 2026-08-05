---
title: 記事を作成・修正する
description: Desmos Atlasの記事、翻訳、Issue、Pull Requestの作成手順
---

# 記事を作成・修正する

Desmos Atlasの記事はMarkdownまたはMDXで管理します。誤字の修正だけでも、新しい解説やグラフの追加でも歓迎します。作業内容がまだ固まっていない場合は、先にIssueで相談できます。

## 記事の保存場所

日本語と英語は別々のファイルです。

```text
# 日本語
docs/basics/functions.mdx

# 英語（日本語版と同じ相対パス）
i18n/en/docusaurus-plugin-content-docs/current/basics/functions.mdx
```

- 日本語だけを書く場合は `docs/` に追加します。
- 英語だけを書く場合は英語用ディレクトリに追加します。
- 両言語を書く場合は、同じ相対パスとファイル名にします。
- 一方の言語にファイルがなくても、他方の記事が自動翻訳または自動表示されるわけではありません。
- 共通サイドバーに記事を追加するときは、リンク切れを避けるため両言語のファイルを用意することを推奨します。

## カテゴリー

記事は次の3カテゴリーに分類します。

| カテゴリー       | 主な内容                      | 保存場所の例                                         |
| ---------------- | ----------------------------- | ---------------------------------------------------- |
| 基礎             | Desmosの機能、記法、操作方法  | `docs/basics/`                                       |
| 記事作成ガイド   | MDX、コンポーネント、執筆方法 | `docs/guides/`                                       |
| グラフギャラリー | 完成したグラフ、作品の解説    | `docs/graph-gallery/` |

サイドバーの並び順は `sidebars.ts` で管理します。新しい記事を追加したら、対応するカテゴリーの `items` にドキュメントIDを追加してください。

```typescript
items: ["basics/basic-use", "basics/new-article"];
```

## MarkdownとMDX

- `.md` は文章、リンク、画像、表、コード、KaTeX数式だけで構成する記事に使います。
- `.mdx` は `DesmosEmbed`、`DesmosExpression`、`ArticleCard`などのReactコンポーネントを使う記事に選びます。
- ファイル名には小文字の英数字とハイフンを使います。例: `complex-numbers.mdx`

すべての記事はfront matterから始めます。

```md
---
title: 記事のタイトル
description: 検索結果などに表示する短い説明
---

# 記事のタイトル
```

見出しは `##`、`###` の順に使い、段階を飛ばさないでください。内部リンクにはサイト内のドキュメントURLを使います。

```md
[リストの使い方](/docs/basics/lists)
```

## 数式を書く

インライン数式は `$...$` で囲みます。

```md
二次関数 $f(x)=ax^2+bx+c$ を考えます。
```

独立した数式は `$$...$$` で囲みます。

```md
$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$
```

表示されたKaTeX数式はクリックまたはキーボード操作でLaTeXとしてコピーできます。

## 画像を追加する

画像は `static/img/` 以下に置き、GitHub Pagesのサブパスにも対応する `ArticleImage` で参照します。内容が分かる `alt` を必ず付けてください。

```jsx
import ArticleImage from '@site/src/components/ArticleImage';

<ArticleImage
  className="desmos-article-image"
  src="/img/basic/example/settings.png"
  alt="Desmosのグラフ設定画面"
  loading="lazy"
/>
```

通常の `<img src="/img/...">` はGitHub Pages上でリポジトリ名のサブパスを失うため使用しないでください。翻訳版で画像内の文字も翻訳する場合は、例えば `static/img/basic/en/` のように言語別に保存します。

## 保存済みDesmosグラフを埋め込む

Desmosの共有URLの末尾にあるハッシュを `id` に渡します。iframeではなくAPIでstateを取得するため、埋め込み後も操作できます。

```jsx
import DesmosEmbed from "@site/src/components/DesmosEmbed";

<DesmosEmbed id="xfsfswckqy" title="二次関数のグラフ" height={520} />
```

通常のグラフは `kind` を省略できます。3DまたはGeometryの場合は種類を指定します。

```jsx
<DesmosEmbed id="共有ハッシュ" kind="3d" title="3Dグラフ" />
<DesmosEmbed id="共有ハッシュ" kind="geometry" title="Geometry作図" />
```

埋め込みの下には元のDesmosページを開くリンクが自動表示されます。

## Desmos風の式リストを表示する

グラフを読み込まず、式だけをDesmos風に並べる場合は `DesmosExpression` を使います。

```jsx
import DesmosExpression from "@site/src/components/DesmosExpression";

<DesmosExpression
  expressions={[
    { expression: "y=x^2", color: "red" },
    { expression: "x^2+y^2\\leq 9", type: "inequality", color: "blue" },
    { expression: "(1,2)", type: "point", color: "green" },
  ]}
/>
```

色には `red`、`blue`、`green`、`orange`、`purple`、`black` または16進カラーを指定できます。利用可能な表示形式はコンポーネントの型定義を確認してください。

## JavaScriptからグラフを操作する

`DesmosCalculator` には `expressions`、`state`、`hash` のいずれか1つを渡せます。記事固有の式やボタンはMDX側に置きます。

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
  <DesmosControls label="グラフ操作">
    <DesmosButton
      onPress={(calculator) => {
        calculator.setExpression({ id: "a", latex: "a=2" });
      }}
    >
      aを2にする
    </DesmosButton>
  </DesmosControls>
</DesmosCalculator>
```

詳しい使い方は[JavaScriptでグラフを操作する](/docs/writing-guide/interactive-graphs)を参照してください。

## 他の記事へのカードを置く

内部記事と外部サイトには共通の `ArticleCard` を使えます。複数枚は `ArticleCardGrid` で囲みます。

```jsx
import ArticleCard, { ArticleCardGrid } from "@site/src/components/ArticleCard";

<ArticleCardGrid>
  <ArticleCard
    to="/docs/basics/lists"
    label="基礎"
    title="リスト"
    description="値をまとめて扱う方法を学びます。"
  />
  <ArticleCard
    to="https://www.desmos.com/calculator"
    label="Desmos"
    title="グラフ計算機"
    description="Desmosを別タブで開きます。"
  />
</ArticleCardGrid>
```

リンク先、タイトル、説明だけが異なるカードを記事ごとに作らず、この共通コンポーネントを再利用してください。

## 英語版を作る

英語版は日本語版と同じ相対パスに置き、front matter、見出し、画像の代替テキスト、グラフの `title`、操作ボタンも英訳します。

内部リンクには英語のパスを指定します。

```md
[Working with lists](/en/docs/basics/lists)
```

Desmosに英語ラベル付きの別グラフがある場合は、英語記事でそのハッシュを指定します。単なる機械翻訳ではなく、数式、コード、リンク、画像が正しいことも確認してください。

## ローカルで確認する

初回だけ依存関係をインストールします。

```bash
npm install
```

執筆中は対象言語の開発サーバーを使います。

```bash
npm run start:ja
npm run start:en
```

提出前には必ず型検査と両言語の本番ビルドを実行します。

```bash
npm run typecheck
npm run build
```

さらに完成版を確認する場合は `npm run preview` を使います。リンク切れ、数式、画像、ライト／ダークモード、狭い画面、DesmosのLoading表示と操作を確認してください。

## Issueで相談・報告する

コードを書かなくても、[GitHub Issues](https://github.com/physy/Desmos-Atlas/issues)から誤りや提案を報告できます。

1. 既存Issueを検索し、同じ内容がないか確認します。
2. `New issue` を選びます。
3. 「どのページか」「現在どうなっているか」「どうなるべきか」を書きます。
4. 表示上の問題なら、URL、利用言語、ブラウザ、画面幅、スクリーンショットがあると再現しやすくなります。
5. 数式や文章の誤りなら、該当箇所と根拠または修正案を書きます。

Issueの例:

```md
## 対象ページ

/docs/basics/lists

## 内容

「合計」の式に誤記があります。

## 修正案

`total(L)` を `total(L)/length(L)` に変更する必要があります。

## 確認環境

日本語版 / Chrome / macOS
```

自分で修正する予定なら、その旨をIssueにコメントしてください。小さな誤字修正は、Issueを作らず直接Pull Requestを送っても構いません。

## Pull Requestを作る

リポジトリへの書き込み権限がない場合は、GitHub上でリポジトリをforkして作業します。

```bash
git clone https://github.com/YOUR-NAME/Desmos-Atlas.git
cd Desmos-Atlas
git remote add upstream https://github.com/physy/Desmos-Atlas.git
git switch -c docs/list-examples
npm install
```

記事を編集したら、変更したファイルだけをcommitします。

```bash
npm run typecheck
npm run build
git status
git add docs/basics/lists.mdx
git commit -m "docs: add examples for Desmos lists"
git push -u origin docs/list-examples
```

GitHubでforkを開き、`Contribute`、`Open pull request` の順に進みます。

- base repository: `physy/Desmos-Atlas`
- base branch: `main`
- compare: 自分の作業ブランチ

Pull Requestには、変更の目的、変更した記事、確認したコマンド、関連Issueを書きます。`Closes #123` のように書くと、merge時に関連Issueを閉じられます。

```md
## 変更内容

- リスト記事に平均値の例を追加
- 日本語版と英語版を更新

## 確認

- [x] npm run typecheck
- [x] npm run build
- [x] ライト／ダークモードで確認

Closes #123
```

レビューで修正を求められた場合は、同じブランチに追加commitしてpushします。Pull Requestは自動的に更新されるため、作り直す必要はありません。

GitHub公式ドキュメント: [Issueの作成](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue)、[Pull Requestの作成](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)、[forkからのPull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

## 提出前チェックリスト

- [ ] タイトルと説明が内容を表している
- [ ] 見出し構造が自然である
- [ ] 数式とコードを実際に確認した
- [ ] 画像に意味のある代替テキストがある
- [ ] 内部リンクと外部リンクが開く
- [ ] Desmosグラフが読み込まれ、操作できる
- [ ] 日本語版と英語版の対応を確認した
- [ ] `sidebars.ts` に必要な記事を追加した
- [ ] `npm run typecheck` と `npm run build` が成功する
- [ ] 関係のないファイルを変更していない
