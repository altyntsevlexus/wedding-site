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
          <a href="#dress-code">Дрес-код</a>
        </li>
        <li>
          <a href="#dog-food">Замість квітів</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
