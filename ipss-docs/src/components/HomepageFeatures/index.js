import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simples e Intuitiva',
    img: '/img/intuitiva.png',
    description: (
      <>
        A plataforma foi pensada para ser fácil de usar, mesmo por utilizadores com literacia digital básica, permitindo criar e gerir marcações em poucos cliques.
      </>
    ),
  },
  {
    title: 'Foco na Eficiência',
    img: '/img/eficiencia.png',
    description: (
      <>
        O sistema automatiza tarefas administrativas, reduzindo papelada e chamadas telefónicas, para que os colaboradores se concentrem no atendimento aos utentes.
      </>
    ),
  },
  {
    title: 'Desenvolvido com Tecnologia Moderna',
    img: '/img/tecnologia.png',
    description: (
      <>
        Baseado em React e Spring Boot, o sistema oferece fiabilidade, segurança e integração com as valências da IPSS.
      </>
    ),
  },
];


function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
