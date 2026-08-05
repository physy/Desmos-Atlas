import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const content = {
  ja: {
    description: 'Desmos の使い方、数学のアイデア、グラフ作品をまとめる Wiki です。',
    open: 'Wiki を開く',
  },
  en: {
    description: 'A wiki for Desmos techniques, mathematical ideas, and graph art.',
    open: 'Open the wiki',
  },
};

export default function Home(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const text = content[i18n.currentLocale === 'en' ? 'en' : 'ja'];
  return (
    <Layout title="Desmos Atlas" description={text.description}>
      <main className="container margin-vert--xl">
        <Heading as="h1">Desmos Atlas</Heading>
        <p>{text.description}</p>
        <Link className="button button--primary" to="/docs/intro">
          {text.open}
        </Link>
      </main>
    </Layout>
  );
}
