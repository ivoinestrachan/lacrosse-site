import React from "react";
// import { IoCallSharp } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
// import { BsArrowUpRight } from "react-icons/bs";
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
            <p className={styles.contact}>
              or{" "}
              <span className={styles.call}>
                {" "}
                <IoCallSharp />
              </span>{" "}
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
