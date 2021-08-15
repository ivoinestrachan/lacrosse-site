import React from "react";
import styles from "./event.module.css";
import TooPng from "../../assets/lacrosseEvent.png";
import smallPlayer from "../../assets/smallPlayer.png";

const index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          {/* <TooSvg /> */}
          <img src={TooPng} alt="tool.png" className={styles.toolSvg} />
          <div className={styles.textContent}>
            <p className={styles.para}>
              Something for <br /> About Programe
            </p>
            <button className={styles.button}>Learn more +</button>
          </div>
        </div>
        <div className={styles.placeInfoContainer}>
          <div className={styles.placeInfo}>
            <div className={styles.playerImgHolder}>
              <img
                className={styles.playerImg}
                src={smallPlayer}
                alt={smallPlayer}
              />
            </div>
            <div className={styles.verticleLine}></div>
            <span className={styles.paraWrapper}>
              <p>Event: Lacroose camp</p>
              <p>Nassau, Bahamas</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
