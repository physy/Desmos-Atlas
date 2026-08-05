import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Desmos Atlas',
  tagline: 'Desmos の知識を、ひとつの地図に。',
  future: {v4: true},
  url: 'https://physy.github.io',
  baseUrl: '/Desmos-Atlas/',
  organizationName: 'physy',
  projectName: 'Desmos-Atlas',
  onBrokenLinks: 'throw',
  clientModules: [require.resolve('./src/clientModules/katexCopy.ts')],

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: {label: '日本語', htmlLang: 'ja-JP'},
      en: {label: 'English', htmlLang: 'en-US'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex'), require('./plugins/rehype-katex-copy')],
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'Desmos Atlas',
      items: [
        {type: 'docSidebar', sidebarId: 'wikiSidebar', position: 'left', label: 'Wiki'},
        {to: '/docs/graph-gallery/gallery', label: 'ギャラリー', position: 'left'},
        {to: '/docs/writing-guide/contributing', label: '記事を書く', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
        {
          href: 'https://www.desmos.com/calculator',
          label: 'Desmos を開く ↗',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Atlas',
          items: [
            {label: 'はじめに', to: '/docs/intro'},
            {label: 'グラフ集', to: '/docs/graph-gallery/gallery'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Desmos Calculator', href: 'https://www.desmos.com/calculator'},
            {label: 'Desmos API', href: 'https://www.desmos.com/api/v1.11/docs/index.html'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Desmos Atlas. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'markdown', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
