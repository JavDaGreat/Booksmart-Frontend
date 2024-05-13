import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
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
  add?: boolean;
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Input: FC<Props> = ({ label, add, type, ...props }) => {
  const InputElement = type === "textarea" ? "textarea" : "input";
  return (
    <div className={styles.container}>
      {label && <label>{label}:</label>}
      <InputElement {...props} type={type} className={styles.input} rows={4} />
    </div>
  );
};
