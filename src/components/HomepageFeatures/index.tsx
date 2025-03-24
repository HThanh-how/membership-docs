import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Multi-Level Membership and Benefits Management',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The system allows for the definition and management of multiple membership levels, each with its own set of benefits and privileges. 
        This feature facilitates the segmentation of customers and enables targeted marketing campaigns, enhancing customer engagement and loyalty..
      </>
    ),
  },
  {
    title: 'Integrated Promotions and Coupon Management',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The system integrates functionalities for managing promotional campaigns and coupons, enabling the creation and tracking of promotional activities' effectiveness. 
        It also manages the usage of coupons by customers, providing tools to analyze and adjust promotions based on real-time data..
      </>
    ),
  },
  {
    title: 'Data Analytics and Reporting',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The system offers powerful data analytics tools that allow users to monitor and analyze customer purchasing behaviors, campaign performance, and more. 
        This capability supports data-driven decision-making, helping to refine marketing strategies and improve overall business performance..
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
