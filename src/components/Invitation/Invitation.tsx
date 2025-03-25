import React from "react";
import Section from "../shared/Section";
import styles from "./Invitation.module.css";

const Invitation: React.FC = () => {
  return (
    <Section>
      <div className={styles.invitation}>
        <p className={styles.names}>Алтинцев Олексій та Заблоцька Анастасія</p>
        <p className={styles.invitation}>Запрошують Вас на своє весілля</p>
        <p className={styles.date}>31 травня 2025</p>
        <a className={styles.address} href="https://maps.app.goo.gl/yGBaoupc98bThss8A">
          Welcome DOM, вул. Кільцева 7, село Проліски
        </a>
        <img src="/assets/images/bow.svg" alt="Bow" width={150} className={styles.bow} />
      </div>
    </Section>
  );
};

export default Invitation;
