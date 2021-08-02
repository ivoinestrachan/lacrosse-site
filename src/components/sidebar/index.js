import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import styles from "./sidebar.module.css";

const Sidebar = ({ visible }) => {
  const displayValue = visible ? 100 : 0;
  return (
    <div
      className={styles.Container}
      style={{ transform: `translateX(${displayValue}vw)` }}
    >
      <div className={styles.sidebarLinkHolder}>
        <a href="1" className={styles.link}>
          Home
        </a>
        <a href="1" className={styles.link}>
          About Us
        </a>
        <a href="1" className={styles.link}>
          Contact
        </a>
      </div>
      <div className={styles.sidebarIconHolder}>
        <FaTwitter className={styles.sidebarIconLink} />
        <IoLogoFacebook className={styles.sidebarIconLink} />
        <RiInstagramFill className={styles.sidebarIconLink} />
      </div>
    </div>
  );
};

export default Sidebar;
