import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import player from "../../assets/player.png";
import styles from "./landing.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Ready to <br /> rumble
          </h1>
          <p className={styles.para}>
            A non-profit organization to expose.
            <br />
            inner-city Bahimian children to the sport of lacrosse
          </p>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Register Now </button>
            <div className={styles.iconWrapper}>
              <BsArrowUpRight className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imgContent}>
        <img className={styles.playerImg} src={player} alt={player} />
      </div>
    </div>
  );
};

export default index;
