import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import styles from "./regbutton.module.css";

const index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3 className={styles.heading}>
            Ready to <br /> rumble
          </h3>

          <div className={styles.buttonContainer}>
            <h4 className={styles.buttonText}>
              You're just a click away, click 👇
            </h4>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>Register Now </button>

              <div className={styles.iconWrapper}>
                <BsArrowUpRight className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
