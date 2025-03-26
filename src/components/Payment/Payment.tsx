import Section from "../shared/Section";
import styles from "./Payment.module.css";

const Payment = () => {
  return (
    <Section id="payment" title="Для тих то залишаються на ніч">
      <p className={styles.text}>
        Якщо ви залишаєтеся на ніч, то можете перевести гроші на один з наших рахунків. Вартість номеру 4400 грн. По
        приїду ви зможете одразу отримати ключі від номеру та занести туди свої речі.
      </p>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <p className={styles.bankName}>Privat24</p>
          <a
            href="https://www.privat24.ua/send/g4lra/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Privat"
            className={styles.link}
          />
          <img src="/assets/images/privat.jpg" width={300} height={300} alt="Privat" className={styles.image} />
        </div>
        <div className={styles.block}>
          <p className={styles.bankName}>Monobank</p>
          <a
            href="https://send.monobank.ua/7de5drAuUa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mono"
            className={styles.link}
          />
          <img src="/assets/images/mono.jpg" width={300} height={300} alt="Mono" className={styles.image} />
        </div>
      </div>
    </Section>
  );
};

export default Payment;
