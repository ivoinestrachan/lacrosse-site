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
        <a href="/" className={styles.link}>
          Home
        </a>
        <a href="/" className={styles.link}>
          About Us
        </a>
        <a href="/contact-us" className={styles.link}>
          Contact
        </a>
      </div>
      <div className={styles.sidebarIconHolder}>
        <a
          href="https://twitter.com/BahamasLax"
          rel="noreferrer"
          target="_blank"
          style={{ color: "black" }}
        >
          <FaTwitter className={styles.sidebarIconLink} />
        </a>
        <a
          href="https://www.facebook.com/One-Lax-Bahamas-101696601424493/"
          rel="noreferrer"
          target="_blank"
          style={{ color: "black" }}
        >
          <IoLogoFacebook className={styles.sidebarIconLink} />
        </a>

        <a
          href="https://instagram.com/1laxbahamas?utm_medium=copy_link"
          rel="noreferrer"
          target="_blank"
          style={{ color: "black" }}
        >
          <RiInstagramFill className={styles.sidebarIconLink} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
