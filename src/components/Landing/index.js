import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import player from "../../assets/player.png";
import helmet1 from "../../assets/helmet1.png";
import styles from "./landing.module.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Ready  <img className={styles.helmet1Img} src={helmet1} alt={helmet1} /> <br />to rumble
          </h1>
          <p className={styles.para}>
            A non-profit organization to expose.
            <br />
            inner-city Bahimian children to the sport of lacrosse
          </p>
          <Link
            to="/register"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>Register Now </button>
              <div className={styles.iconWrapper}>
                <BsArrowUpRight className={styles.icon}/>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.imgContent}>
        <img className={styles.playerImg} src={player} alt={player} />
      </div>
    </div>
  );
};

export default index;
