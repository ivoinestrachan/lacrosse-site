import React from "react";
import { IoCallSharp } from "react-icons/io5";

import styles from "./register.module.css";
import Img from "../../assets/formImg.png";
import { BsArrowUpRight } from "react-icons/bs";
import Navbar from "../Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>Ready To Rumble</h1>
          <form className={styles.form} action="/api/register" method="get">
            <input placeholder="Full name" className={styles.input} name="name"/>
            <input placeholder="Email address" className={styles.input} name="email"/>
            <span className={styles.pairInput}>
              <input placeholder="Age" className={styles.pInput} name="age"/>
              {/* <input placeholder="Shirt Size" className={styles.pInput2} /> */}
              <select name="size" className={styles.pInput2} name="shirt_size">
                <option value="" disabled selected hidden>
                  Shirt Size
                </option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extra large">Extra Large</option>
              </select>
            </span>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>Submit Request</button>
              <div className={styles.iconWrapper}>
                <BsArrowUpRight className={styles.icon} />
              </div>
            </div>
            <p className={styles.contact}>
              or
              <span className={styles.call}>
                <IoCallSharp />
              </span>
              Call us at +1 285 5210874
            </p>
          </form>
        </div>
        <div className={styles.imgContainer}>
          <img src={Img} alt="form img" className={styles.img} />
        </div>
      </div>
    </>
  );
};

export default Register;
