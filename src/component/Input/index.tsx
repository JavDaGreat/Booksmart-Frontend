import { FC } from "react";
import styles from "./styles.module.css";

type Props = {
  label: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "textarea";
};

export const Input: FC<Props> = ({ label, type }) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input type={type} className={styles.input} />
    </div>
  );
};
