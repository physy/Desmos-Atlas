# Desmos Atlas

Desmosの機能、数式表現、グラフ作品を日本語と英語で共有するDocusaurus製Wikiです。記事はMarkdown／MDXで管理し、KaTeX数式、Desmosの2D・3D・Geometry、Reactコンポーネントを掲載できます。

- リポジトリ: [physy/Desmos-Atlas](https://github.com/physy/Desmos-Atlas)
- 公開サイト: [https://physy.github.io/Desmos-Atlas/](https://physy.github.io/Desmos-Atlas/)
- Desmos: [Graphing Calculator](https://www.desmos.com/calculator)

## 主なカテゴリー

- 基礎 — Desmosの機能、記法、操作方法
- 記事作成ガイド — 記事、翻訳、コンポーネント、貢献方法
- グラフギャラリー — 公開グラフと作品の解説

## 必要な環境

- Node.js 20以上
- npm

## セットアップ

```bash
npm install
```

日本語版または英語版の開発サーバーを起動します。

```bash
npm run start:ja
npm run start:en
```

日本語と英語をまとめてビルドし、完成版を確認する場合:

```bash
npm run preview
```

## ディレクトリ構成

```text
docs/basics/                                      日本語の基礎記事
docs/writing-guide/                               日本語の記事作成ガイド
docs/graph-gallery/                               日本語のグラフギャラリー
i18n/en/docusaurus-plugin-content-docs/current/   上記と同じ構成の英語記事
src/components/                                   MDX用の共通コンポーネント
src/css/custom.css                                サイト全体のスタイル
static/img/                                       記事画像
sidebars.ts                                       カテゴリーと記事順
docusaurus.config.ts                              サイト設定
```

日本語と英語の同じ記事には、同一の相対パスとファイル名を使います。

```text
docs/basics/lists.mdx
i18n/en/docusaurus-plugin-content-docs/current/basics/lists.mdx
```

## 記事を作成・修正する

文章、画像、コード、KaTeX数式だけなら `.md`、DesmosやArticle CardなどのReactコンポーネントを使う場合は `.mdx` を選びます。

詳しい手順はサイト内の「記事を作成・修正する」にまとめています。

- 記事の配置とfront matter
- 日本語版と英語版
- KaTeX数式と画像
- Desmosの保存済みグラフ
- JavaScriptによるグラフ操作
- Article Card
- サイドバーへの追加
- IssueとPull Request

## 検証

変更を提出する前に、次を実行してください。

```bash
npm run typecheck
npm run build
```

`npm run build` は日本語版と英語版を両方生成し、壊れた内部リンクも検出します。

## GitHub Pages

`main` ブランチへのpushを契機に、`.github/workflows/deploy-pages.yml` が型検査と日英サイトのビルドを行い、GitHub Pagesへ自動公開します。

```text
日本語: https://physy.github.io/Desmos-Atlas/
英語:   https://physy.github.io/Desmos-Atlas/en/
```

リポジトリの `Settings → Pages → Build and deployment → Source` では `GitHub Actions` を選択します。デプロイ状況はリポジトリの `Actions` タブで確認できます。

## Issue

記事の誤り、表示上の問題、新しい記事の提案は、公開後に[Issues](https://github.com/physy/Desmos-Atlas/issues)へ投稿できます。対象ページ、現在の状態、期待する状態、必要に応じて再現環境やスクリーンショットを記載してください。

## Pull Request

書き込み権限がない場合はリポジトリをforkし、作業ブランチを作成します。

```bash
git clone https://github.com/YOUR-NAME/Desmos-Atlas.git
cd Desmos-Atlas
git remote add upstream https://github.com/physy/Desmos-Atlas.git
git switch -c docs/short-description
```

変更後、型検査とビルドを行い、関係するファイルだけをcommitしてforkへpushします。そのブランチから `physy/Desmos-Atlas` の `main` にPull Requestを作成してください。
