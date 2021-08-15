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
            <a
              href="https://twitter.com/BahamasLax"
              rel="noreferrer"
              target="_blank"
              style={{ color: "white" }}
            >
              <FaTwitter className={styles.iconLink} />
            </a>

            <a
              href="https://www.facebook.com/One-Lax-Bahamas-101696601424493/"
              rel="noreferrer"
              target="_blank"
              style={{ color: "white" }}
            >
              <IoLogoFacebook className={styles.iconLink} />
            </a>
            <a
              href="https://instagram.com/1laxbahamas?utm_medium=copy_link"
              rel="noreferrer"
              target="_blank"
              style={{ color: "white" }}
            >
              <RiInstagramFill className={styles.iconLink} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
