import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
