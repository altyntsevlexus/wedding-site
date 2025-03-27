import React from "react";
import Section from "../shared/Section";
import styles from "./DogFood.module.css";

const DogFood: React.FC = () => {
  return (
    <Section id="dog-food" title="Гав!">
      {/* Paw prints */}
      {[...Array(14)].map((_, i) => (
        <div key={i} className={styles.pawPrint} />
      ))}
      <div className={styles.container}>
        <div className={styles.message}>
          <p>Всім привіт, говорить Дора</p>
          <img src="/assets/images/dora.webp" alt="Dora" className={styles.dora} width={250} />
          <div className={styles.messageContainer}>
            <p>
              Дорогі гості весілля, пропоную Вам взяти участь у благодійній ініціативі - <br />
              <b>принести собачий корм замість квітів.</b>
            </p>
            <p>
              {" "}
              <a
                href="https://docs.google.com/spreadsheets/d/10JfebBTQLy4zajd7VyZ2eXK7hS_Fjfz9uHeNqzm2DOI/edit?gid=1728759405#gid=1728759405"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Посилання на потреби притулку
              </a>
            </p>
            <p>Згодом, мої батьки передадуть його до притулку для моїх сестер та братів.</p>
            <p>P.S. А ще я не відмовлюсь від смаколиків в подарунок!</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DogFood;
