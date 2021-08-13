import React, { useState } from "react";
import styles from "./navbar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <h3 className={styles.logo}>
            <Link to="/" className={styles.logoLink}>
              OneLax
            </Link>
          </h3>
          <svg
            className={styles.flag}
            viewBox="0 0 68 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="68" height="34" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0"
                  transform="scale(0.00314465 0.00628931)"
                />
              </pattern>
              <image
                id="image0"
                width="318"
                height="159"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAolBMVEUAq8kAAAD64EL130MArMYAsdAArswAstH/5kT/6ET940P/5UMAqMYAjqcASFUACw0AlrAAHCEAhJsAOkQAYHEAfJIAnblpXhy9qTIAQ08AKjEAbYAAV2YAc4gAo78AZ3oAFxt2cCQmIgrKtTZcUhiLfCWwni8+OBDr0z7axDp4bCDTvTjw1z8WFAZORhUAMz0AJCoYtcmnlCovKgyYiSiUhCea1dybAAAD4klEQVR4nO2di1oTMRCFOSjQQmsppVxKaxEVREEU9f1fzd2vCr1sdpPMZtPNnP8J2v9rpjtnk8nO5dneDvEGOO3tx/4Q7QUZ430K9CTXh0n/IPbnaClY8O49S6AP+M98hyvYnRd9GIwPKNAVLDE55gp2BCtMWQLdwBpXLIEurOvD8GSPAq3Z0AeMjvkUaEuBvqwE9lgC7SjUB8y4gq0w6MOwT4EWmPQBjLIsMOtjlGVBmb6sj2OUVU6pPkZZVVToY5RVTqU+YM4VbMRCHwbs40zY6AOeGGUVY6ePUZYBW33AFUvgJvb6MDxhmr+Ogz5gdManwFWc9GUlkGH0Co76gBlL4BLO+vCDUdYr7voYZS3how84ZQlc4KcPgzFXcI6nPkZZC7z1McrKEehjlCXUh2vtUZZMX74lQfUKlupTHmXJ9amOsurQpzjKqkVfHmXpXME16dO6JaE2fTqjrBr1ZX2cuqfAOvVlfZy2ElivPnVRVt36lJ2uqV1ffrpGT5QVQJ+mKCuIPj2nawLp0xJlhdKXR1k/36ZOQH3Ah4fOm7QJqg947h7tpkxgfbj52D2M/R0DElof8OlLN/aXDEd4fcDn3U7srxmKJvQBt0eJlsBm9OHuW5olsCF9wHmSJbAxfcCfw/RWcIP6gIvkVnCj+nB3n5jAZvUBX9MqgU3rA36nVAKb14ebhEpgBH3A9/tUVnAUfVkJTKSPi6QPeO6kUAKj6cOvFKKsePqSiLJi6ksgyoqrD4+3nVav4Mj62h5lRdcHnD+0twRugb4293FboQ+Pbe3jtkNf3se18ge4LfqAizb+/rZFH399Alj7JPCfVwCf+wSw6xDAnlcCExcBCezbYNosgu86RPBNmwi+5xXBXQYiuMdFROM7rFrcoRXA/X0iuLtUBPc2i+DOehE81yGCp4pE8EybCJ6oFMHzvCJ4mlwEZxmI4CQNEZzjIiOQPU4REsAZVgI4QU0A5/dJ4PRIAZxdKoCTcyVwbrMATg0XwJn1AnhjggTe1yGAt8UI4F1FApTEUmZE9nhPm0CenljKjLc8TbGUGU95vCF1gZ89ZbGUGR956mIpM+7yeDf5Es72NMZSZhzlTVn0VnCSpzWWMuMgT28sZcbenuJYyoytPNWxlBk7eU+6YykzNvIG2mMpMxb2GEuZqZTHWKqMCnmTPmOpMsqL3pjrtpwyezo3DjhhlnfJDq0ak7whYykbDPZmlGdFobxpj+vWjgJ5I75Ds2az6LFDc2DdnpbzLDWxVvTYobmxLG/CWMqVV3m6zrPUxIu9OYueB//kMZbyY1H0GEt5kttjLOUNYykRjKUk/AX326md11MMMgAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
        </div>
        {/* hamMenu */}
        <svg
          className={styles.hamIcon}
          style={{ display: `${visible ? "" : "none"}` }}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setVisible(false)}
        >
          <rect y="8" width="30" height="2" rx="1" fill="#1A062D" />
          <rect x="8" y="20" width="22" height="2" rx="1" fill="#1A062D" />
        </svg>
        <AiOutlineClose
          style={{ display: `${visible ? "none" : ""}` }}
          className={styles.crossIcon}
          onClick={() => setVisible(true)}
        />
        <Sidebar visible={visible} />
        <div className={styles.linkContainer}>
          <div className={styles.linkHolder}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to="/" className={styles.link}>
              About Us
            </Link>
            <Link to="/contact-us" className={styles.link}>
              Contact
            </Link>
          </div>
          <div className={styles.iconLinkHolder}>
            <a
              href="https://twitter.com"
              rel="noreferrer"
              target="_blank"
              style={{ color: "black" }}
            >
              <FaTwitter className={styles.iconLink} />
            </a>

            <a
              href="https://www.facebook.com/One-Lax-Bahamas-101696601424493/"
              rel="noreferrer"
              target="_blank"
              style={{ color: "black" }}
            >
              <IoLogoFacebook className={styles.iconLink} />
            </a>

            <a
              href="https://instagram.com/1laxbahamas?utm_medium=copy_link"
              rel="noreferrer"
              target="_blank"
              style={{ color: "black" }}
            >
              <RiInstagramFill className={styles.iconLink} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
