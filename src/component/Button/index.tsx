import { FC } from "react";
import styles from "./styles.module.css";
type Props = {
  label: string;
  onClick?: () => void;
};
export const Button: FC<Props> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};
