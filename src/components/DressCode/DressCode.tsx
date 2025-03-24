import React from "react";
import Section from "../shared/Section";
import styles from "./DressCode.module.css";

const DressCode: React.FC = () => {
  return (
    <Section id="dress-code" title="Dress-code">
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <a href="/" aria-label="Ladies" className={styles.link} />
          <p className={styles.text}>Ladies</p>
          <img src="/assets/images/ladies.webp" alt="Ladies" className={styles.image} />
        </div>
        <div className={styles.block}>
          <a href="/" aria-label="Gentlemen" className={styles.link} />
          <p className={styles.text}>Gentlemen</p>
          <img src="/assets/images/gentlemen.jpg" alt="Gentlemen" className={styles.image} />
        </div>
      </div>
    </Section>
  );
};

export default DressCode;
