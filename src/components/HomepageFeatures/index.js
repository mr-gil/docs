import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
const FeatureList = [
  {
    title: "Why ?",
    description: (
      <>
        <li>Simpler than other wrappers</li>
        <li>Similar to Discord.js v13 Syntax</li>
        <li>Easier yet Flexible.</li>
        <li>Beginner Friendly</li>
        <li>Better Documentation</li>
        <li>Open source Project</li>
      </>
    ),
  },
  {
    title: "",
    description: <></>,
  },
  {
    title: "Stats",
    description: (
      <>
        <li>In Development</li>
        <li>Currently finished 12 Events</li>
        <li>Coming soon.</li>
      </>
    ),
  },
];

function AboutMe() {
  return (
    <div className="text--center padding-horiz--md">
      <h4
        className={styles.abtme}
        style={{ fontWeight: "500", fontSize: "30px" }}
      >
        Developed by Rahuletto#0243
      </h4>
      <br></br>
      <p style={{ textAlign: "center" }}>
        <a class="shield" href="https://www.npmjs.com/package/simply-djs">
          <img src="https://img.shields.io/npm/v/simply-djs.svg?style=for-the-badge" />
        </a>
        <a class="shield" href="https://www.npmjs.com/package/simply-djs">
          <img src="https://img.shields.io/npm/dt/simply-djs?style=for-the-badge" />
        </a>
        <br></br>
        <a class="shield" href="https://simplyd.js.org">
          <img src="https://img.shields.io/badge/Simply--DJS-Documentation-075FFF?style=for-the-badge" />
        </a>
        <a class="shield" href="https://discord.gg/3JzDV9T5Fn">
          <img src="https://img.shields.io/badge/Discord-Support-5865F2?style=for-the-badge&logo=discord" />
        </a>
        <br></br>
        <a href="https://discord.gg/3JzDV9T5Fn">
          <img src="https://invidget.switchblade.xyz/3JzDV9T5Fn" />
        </a>
      </p>
      <br></br>
      <span className={styles.divider}></span>
      <h3 className={styles.abtme}>About</h3>
      <p>
        This is a Powerful Guilded API Wrapper made with ease in mind. So you can {" "}
        <b>Simply Develop</b>.<br></br>Sip a coffee, Because its made with Typescript.<br></br>
        <br></br>
        <i>
          <span className={styles.warning}>
            Note: The Guilded API is in beta. So there are chances the wrapper might break (or) API might get drastic changes
          </span>
          <br></br>This package can be used to make third-party modules
        </i>
      </p>
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="container">
      <AboutMe></AboutMe>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}