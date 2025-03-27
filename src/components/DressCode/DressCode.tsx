import React from "react";
import Section from "../shared/Section";
import styles from "./DressCode.module.css";

const DressCode: React.FC = () => {
  return (
    <Section id="dress-code" title="Dress-code">
      <p className={styles.tip}>Натисніть на зображення, щоб подивитися підбірку</p>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <a
            href="https://www.canva.com/design/DAGi8AmFAlc/B9Ued8tZ0WVW_nTJN9vsvw/view"
            aria-label="Ladies"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          />
          <p className={styles.text}>Ladies</p>
          <img src="/assets/images/ladies.webp" alt="Ladies" className={styles.image} />
        </div>
        <div className={styles.block}>
          <a
            href="https://www.canva.com/design/DAGi8LSAeZU/2ZcLV96MiTUePMuY0zbDtw/view"
            aria-label="Gentlemen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          />
          <p className={styles.text}>Gentlemen</p>
          <img src="/assets/images/gentlemen.jpg" alt="Gentlemen" className={styles.image} />
        </div>
      </div>
    </Section>
  );
};

export default DressCode;
