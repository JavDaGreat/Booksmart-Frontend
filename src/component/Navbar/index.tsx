import { FC } from "react";
import styles from "./styles.module.css";

export const Navbar: FC = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.navTitle}>Home</div>
      <ul className={styles.navList}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className={styles.navList}>
        <li>Get Started</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};
