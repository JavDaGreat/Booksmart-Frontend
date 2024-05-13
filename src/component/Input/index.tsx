import { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

type Props = {
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "textarea"
    | "datetime-local";
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<Props> = ({ label, type, ...props }) => {
  return (
    <div className={styles.container}>
      {label && <label>{label}:</label>}
      <input {...props} type={type} className={styles.input} />
    </div>
  );
};
