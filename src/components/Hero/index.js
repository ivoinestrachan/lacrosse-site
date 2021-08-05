import React from "react";
import styles from "./hero.module.css";

import demoImg from "../../assets/demoImg.png";

const Hero = ({ heading, para, order }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.wrapper}>
        <div className={styles.textCotent} style={{ order: `${order}` }}>
          <h2 className={styles.heroHeading}>{heading}</h2>
          <p className={styles.heroPara}>{para}</p>
        </div>
        <div className={styles.imgContent}>
          <img className={styles.heroImg} src={demoImg} alt={demoImg} />
        </div>
        <img className={styles.smHeroImg} src={demoImg} alt={demoImg} />
      </div>
    </div>
  );
};

export default Hero;
