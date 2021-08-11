import React from "react";
// import { BsArrowUpRight } from "react-icons/bs";
import styles from "./register.module.css";
import Img from "../../assets/formImg.png";
import { BsArrowUpRight } from "react-icons/bs";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Ready To Rumble</h1>
        <form className={styles.form}>
          <input placeholder="Name" className={styles.input} />
          <input placeholder="Email" className={styles.input} />
          <span className={styles.pairInput}>
            <input placeholder="Age" className={styles.pInput} />
            <input placeholder="Shirt Size" className={styles.pInput} />
          </span>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Submit Request</button>
            <div className={styles.iconWrapper}>
              <BsArrowUpRight className={styles.icon} />
            </div>
          </div>
        </form>
      </div>
      <div className={styles.imgContainer}>
        <img src={Img} alt="form img" className={styles.img} />
      </div>
    </div>
  );
};

export default Register;
