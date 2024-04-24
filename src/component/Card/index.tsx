import styles from "./styles.module.css";
import { FC } from "react";

type Props = {
  title: "Pro" | "Free";
};

const proDetails = {
  description:
    "For teams who need advanced features such as reporting, meeting distribution, and automations.",
  price: "99 Kr",
  buttonText: "Get Pro",
  benefits: [
    "Unlimited meetings",
    "Unlimited participants",
    "Advanced scheduling",
    "Custom branding",
  ],
};

const freeDetails = {
  description: "For individuals starting out with basic scheduling.",
  price: "0 Kr",
  buttonText: "Try Free",
  benefits: [
    "scheduling meetings",
    "Connect one calendar ",
    "basic integrations",
    "Max 3 participants ",
  ],
};

export const Card: FC<Props> = ({ title = "Pro" }) => {
  const details = title === "Pro" ? proDetails : freeDetails;

  return (
    <div className={styles.cardContainer}>
      <h3>{title}</h3>
      <p className={styles.description}>{details.description}</p>
      <div className={styles.cardPrice}>
        <h2>{details.price}</h2>
        <p>/month</p>
      </div>
      <button>{details.buttonText}</button>
      <ul className={styles.cardBenefits}>
        {details.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};
