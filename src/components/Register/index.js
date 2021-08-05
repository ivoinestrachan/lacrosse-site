import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import styles from "./register.module.css";
// import helmet from "../../assets/helmet.png";

/* <img className={styles.textImg} src={helmet} /> */

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2 className={styles.heading}>
            Ready to
            <br /> rumble
          </h2>
        </div>
        <div className={styles.registerContainer}>
          <p className={styles.clickText}>You’re just a click away, click 👇</p>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Register Now </button>
            <div className={styles.iconWrapper}>
              <BsArrowUpRight className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
