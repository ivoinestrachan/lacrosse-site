import React from "react";
import styles from "./mission.module.css";
import cvideo from "../../assets/cvideo.png";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <div className={styles.textWrapper}>
          <h3 className={styles.smallHeading}>Our Mission</h3>
          <h1 className={styles.heading}>Building the bests</h1>
          <p className={styles.para}>
            As a non-profit organization is to expose inner-city Bahamian
            children to the sport of lacrosse – as currently it doesn’t exist on
            the Island.
            <br /> We believe with our help and resources we can build a
            thriving lacrosse program over time in the Bahamas starting at the
            Windsor School at the Albany campus.
          </p>
        </div>
      </div>
      <div className={styles.imageContent}>
        <div className={styles.imageWrapper}>
          <img className={styles.img} src={cvideo} alt={cvideo} />
        </div>
      </div>
    </div>
  );
};

export default index;
