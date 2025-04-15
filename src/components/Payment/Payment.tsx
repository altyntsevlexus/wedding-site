import Section from "../shared/Section";
import styles from "./Payment.module.css";
import { useState } from "react";

const Payment = () => {
  const [copiedCard, setCopiedCard] = useState<string | null>(null);

  const handleCopy = async (cardNumber: string) => {
    try {
      await navigator.clipboard.writeText(cardNumber);
      setCopiedCard(cardNumber);
      setTimeout(() => setCopiedCard(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Section id="payment" title="Для тих хто залишається на ніч">
      <p className={styles.text}>
        Якщо ви залишаєтесь на ніч, то можете перевести гроші на один з наших рахунків. Вартість номеру 4400 грн. По
        приїзду ви зможете одразу отримати ключі від номеру та занести туди свої речі. Будь ласка, повідомте нам коли ви
        перекинете гроші.
      </p>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <p className={styles.bankName}>Privat24</p>
          <p className={`${styles.cardNumber} ${styles.clickable}`} onClick={() => handleCopy("4149 6090 2592 7213")}>
            4149 6090 2592 7213
            {copiedCard === "4149 6090 2592 7213" && <span className={styles.copied}>Скопійовано!</span>}
          </p>
        </div>
        <div className={styles.block}>
          <p className={styles.bankName}>Monobank</p>
          <p className={`${styles.cardNumber} ${styles.clickable}`} onClick={() => handleCopy("4441 1111 6239 2041")}>
            4441 1111 6239 2041
            {copiedCard === "4441 1111 6239 2041" && <span className={styles.copied}>Скопійовано!</span>}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Payment;
