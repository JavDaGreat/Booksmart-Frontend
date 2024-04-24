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
      <div className={styles.navList}>
        <div>Get Started</div>
        <div>Login</div>
      </div>
    </nav>
  );
};
