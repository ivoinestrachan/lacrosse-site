import React from "react";
import styles from "./contact.module.css";
import Img from "../../assets/formImg.png";
import { BsArrowUpRight } from "react-icons/bs";
import Navbar from "../Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>Let's talk something...</h1>
          <form className={styles.form}>
            <input placeholder="Full name" className={styles.input} />
            <input placeholder="Email address" className={styles.input} />
            <textarea placeholder="Message" className={styles.textArea} />
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
    </>
  );
};

export default Contact;
