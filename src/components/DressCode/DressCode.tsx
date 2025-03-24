import React from "react";
import Section from "../shared/Section";
import styles from "./DressCode.module.css";

const DressCode: React.FC = () => {
  return (
    <Section id="dress-code" title="Дрес-код">
      <a href="/" className={styles.linkBlock}>
        Леді ♀
      </a>
      <a href="/" className={styles.linkBlock}>
        Джентельмени ♂
      </a>
    </Section>
  );
};

export default DressCode;
