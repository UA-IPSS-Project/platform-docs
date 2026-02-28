import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <p className={styles.heroEyebrow}>Microsite Institucional</p>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroLead}>
          Uma experiência mais clara, acessível e centrada nas pessoas para apoiar equipas e utentes no dia a dia.
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.primaryBtn)}
            to="/docs/intro">
            Saiba mais sobre o projeto
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.secondaryBtn)}
            to="/docs/MS-3/demo">
            Ver demo
          </Link>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <strong>+Eficiência</strong>
            <span>Fluxos administrativos simplificados</span>
          </div>
          <div className={styles.statItem}>
            <strong>+Proximidade</strong>
            <span>Comunicação mais direta com utentes</span>
          </div>
          <div className={styles.statItem}>
            <strong>+Confiança</strong>
            <span>Plataforma estável para evolução contínua</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Documentação`}
      description="Plataforma Digital IPSS: documentação, visão funcional e evolução do projeto.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
