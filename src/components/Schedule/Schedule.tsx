import React from "react";
import styles from "./Schedule.module.css";
import Section from "../shared/Section";

const scheduleItems = [
  {
    time: "13:00",
    title: "Збір гостей",
    description: `Приїзд гостей на локацію,
     велкам дрінки та закуски`,
  },
  {
    time: "14:00",
    title: "Церемонія",
    description: 'Початок святкування, перше "гірко"',
  },
  {
    time: "15:00",
    title: "Початок банкету",
    description: "Смачно їмо, п'ємо, розігріваємось",
  },
  {
    time: "17:00",
    title: "Вечірка продовжується",
    description: "Вечірка продовжується: танцюємо, сміємось, вітаємо",
  },
  {
    time: "19:30",
    title: "Тооооорт!!!",
    description: "Всі дивляться як ми ріжемо торт",
  },
  {
    time: "21:00",
    title: "Останній ривок!",
    description: "Танцюють всі, хто ще стоїть на ногах",
  },
  {
    time: "22:00",
    title: "Вечірка закінчується",
    description: "Ми хотіли б потусити ще...",
  },
];

const Schedule: React.FC = () => {
  return (
    <Section id="schedule" title="Розклад">
      <div className={styles.timeline}>
        <div className={styles.timelineLine} />
        {scheduleItems.map((item, index) => (
          <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.timelineContent}>
              <p className={styles.time}>{item.time}</p>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
            <div className={styles.timelineDot} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Schedule;
