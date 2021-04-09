import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { customFields } from '../../docusaurus.config';

const features = [
  {
    title: 'Asset Tracking',
    link: 'https://www.cgf-llc.com/services/asset-tracking-solutions',
    imageUrl: 'img/services/tracking.svg',
    description: (
      <>
        Do you know where your company devices and assets are? Let CGF take over
        the challenge of keeping track of these important company investments. We have
        the manpower and customizable Asset Tracking software in place to document your
        entire asset inventory, so you can keep track of what you have, who is using it,
        where it is located and the product lifecycle.
      </>
    ),
    video: 'https://youtu.be/CXuoHeEpdmw'
  },
  {
    title: 'IIoT with Mythings',
    link: 'https://www.cgf-llc.com/services/iiot-solutions-with-mythings',
    imageUrl: 'img/services/IIoT.svg',
    description: (
      <>
        The Industrial Internet of Things is growing faster than ever, but integration
        IIoT technology into a traditional workplace may seem daunting. CGF will
        decomplicate this process and provide you with a state-of -the-art turnkey
        solution. powered by BehrTech's MYTHINGS™️ platform. It is easy to setup, and easy
        to scale quickly.
      </>
    ),
    video: "https://youtu.be/WZKISMIH2tY",
  },
  {
    title: 'Counselors',
    link: 'https://www.cgf-llc.com/services/counselors',
    imageUrl: 'img/services/counselors.svg',
    description: (
      <>
        Our team stands ready to provide responsive counseling and solutions to help your organization
        achieve its business needs. CGF has over 200 counselors worldwide providing onsite and remote 
        data management, asset tracking, data science and data security services. CGF's signature
        Counseling Approach to service allows us to provide solution that add business value to your
        operation.
      </>
    ),
    video: "https://youtu.be/xlJ9FvF87DI",
  },
  {
    title: 'Smart Buildings',
    link: 'https://www.cgf-llc.com/services/smart-building-solutions',
    imageUrl: 'img/services/building.svg',
    description: (
      <>
        CGF will transform Smart Building technology into real business value for your operation.
        Smart Building technology can boost your energy efficiency, monitor temperature and humidity
        throughout your building, or even help keep track of places that need to be sanitized -- even
        more important in light of COVID-19. CGF has the experience and partnerships in place to order,
        configure, and install all element of a best-in-class Smart Building solution and to provide
        on-site service and ongoing support.
      </>
    ),
    video: "https://youtu.be/fY2Bv7n9_Lo",
  },
  {
    title: 'IBM Visual Inspection',
    link: 'https://www.cgf-llc.com/services/ibm-visual-inspection',
    imageUrl: 'img/services/inspection.svg',
    description: (
      <>
        Whether you manufacture small devices or automobiles, CGF and IBM are ready to team up
        to boost your efficiency and improve your production with an easy-to-use application
        that tunes itself to your unique specifications. Visual Inspection gives you an extra 
        set of "eyes" on the production line that can be set up and trained anywhere you
        can put a camera, iPhone, or iPad.
      </>
    ),
    video: "https://youtu.be/-B_oxk__1W4",
  }
];

function Feature({imageUrl, title, description, video, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="text--center">
        <Link
          to={link}>
          <h2>{title}</h2>
        </Link>
      </div>
      <p>{description}</p>
      <div className={styles.buttons}>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
            styles.getStarted,
          )}
          to={video}>
          Video
        </Link>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={customFields.tab_title}
      description="CGF Documentation Website">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/tracker_web/customers')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
