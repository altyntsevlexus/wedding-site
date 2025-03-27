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
              Дорогі гості, пропоную Вам взяти участь у благодійній ініціативі - <br />
              <b>принести собачий корм замість квітів.</b>
            </p>
            <p>
              Притулок попросив купити корм фірми <span className={styles.accent}>Josera</span>.
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
