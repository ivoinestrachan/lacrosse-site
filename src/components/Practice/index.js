import React from "react";
import styles from "./prac.module.css";
import Hero from "../Hero/";

const data = [
  {
    heading: "Perfection Through Practice",
    para: "Sit dignissim bibendum fermentum tellus nulla lobortis congue. In cursus dui duis sed blandit augue quam. Massa ipsum, cras erat in. Sed semper quis tortor, malesuada ipsum. Eu amet lectus scelerisque mauris pharetra aenean platea suspendisse.",
    order: "first",
  },
  {
    heading: "Perfection Through Practice",
    para: "Sit dignissim bibendum fermentum tellus nulla lobortis congue. In cursus dui duis sed blandit augue quam. Massa ipsum, cras erat in. Sed semper quis tortor, malesuada ipsum. Eu amet lectus scelerisque mauris pharetra aenean platea suspendisse.",
    classname: true,
  },
  {
    heading: "Perfection Through Practice",
    para: "Sit dignissim bibendum fermentum tellus nulla lobortis congue. In cursus dui duis sed blandit augue quam. Massa ipsum, cras erat in. Sed semper quis tortor, malesuada ipsum. Eu amet lectus scelerisque mauris pharetra aenean platea suspendisse.",
    order: "first",
  },
];

const Practice = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.sHeading}>HOW WE MAKE THIS HAPPEN?</h3>
      <h1 className={styles.heading}>Perfection Through Practice</h1>
      {data.map(({ heading, para, classname }) => (
        <Hero heading={heading} para={para} classname={classname} />
      ))}
    </div>
  );
};

export default Practice;
