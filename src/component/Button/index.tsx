import { FC } from "react";
import styles from "./styles.module.css";
type Props = {
  label: string;
};
export const Button: FC<Props> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};
