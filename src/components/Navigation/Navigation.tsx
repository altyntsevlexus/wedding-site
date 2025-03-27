import React from "react";
import styles from "./Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <a href="#schedule">Розклад</a>
        </li>
        <li>
          <a href="#dress-code">Dress-code</a>
        </li>
        <li>
          <a href="#dog-food">Інше</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
