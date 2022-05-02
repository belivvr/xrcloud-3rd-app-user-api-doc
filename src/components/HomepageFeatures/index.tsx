import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';
import Svg1 from '@site/static/img/contents1.svg';
import Svg2 from '@site/static/img/contents2.svg';
import Svg3 from '@site/static/img/contents3.svg';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <Svg1 />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>
                <Translate id="site.contents1.title">Easy Customize</Translate>
              </h3> 
              <p>
                <Translate id="site.contents1.description">Easily customize the look and feel of the WebXR Metaverse with XRCloud!</Translate>
              </p>
            </div>
          </div>

          <div className={clsx('col col--4')}>
            <div className="text--center">
              <Svg2 />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>
                <Translate id="site.contents2.title">Access with an Internet browser</Translate>
              </h3>
              <p>
                <Translate id="site.contents2.description">Metaverse implemented with WebXR can be easily accessed from any device with only an Internet browser.</Translate>
              </p>
            </div>
          </div>

          <div className={clsx('col col--4')}>
            <div className="text--center">
              <Svg3 />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>
                <Translate id="site.contents3.title">Free Contents</Translate>
              </h3>
              <p>
                <Translate id="site.contents3.description">You can put anything that you can see in your Internet browser into the Metaverse world.</Translate>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
