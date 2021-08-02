import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import player from "../../assets/teamplayerwithbg.png";
import styles from "./team.module.css";

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>Saluting the team</h3>
        <div className={styles.imageList}>
          <img className={styles.img} src={player} alt={player} />
          <img className={styles.img} src={player} alt={player} />
          <img className={styles.img} src={player} alt={player} />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerWrapper}>
          <p className={styles.copyright}>© 2021. All Rights Reserved.</p>
          <div className={styles.iconLinkHolder}>
            <FaTwitter className={styles.iconLink} />
            <IoLogoFacebook className={styles.iconLink} />
            <RiInstagramFill className={styles.iconLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
