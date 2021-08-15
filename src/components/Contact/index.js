import React from "react";
import styles from "./contact.module.css";
import location from "../../assets/location.png";
import { BsArrowUpRight } from "react-icons/bs";
import Navbar from "../Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>Let's talk something...</h1>
          <form className={styles.form} action="/api/contact" method="get">
            <input placeholder="Full name" className={styles.input} name="name"/>
            <input placeholder="Email address" className={styles.input} name="email"/>
            <textarea placeholder="Message" className={styles.textArea} name="message"/>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>Submit Request</button>
              <div className={styles.iconWrapper}>
                <BsArrowUpRight className={styles.icon} />
              </div>
            </div>
          </form>
        </div>
        <div className={styles.imgContainer}>
          <a
          href="https://www.google.com/maps/dir/25.0652528,-77.3441077/windsor+albany+location/@25.0330856,-77.4901167,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x892f66c04cb4e63f:0xdb28c3c1c2e1a1fb!2m2!1d-77.4960708!2d25.0159378"
          >
          <img src={location} alt="locaton" className={styles.img} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
