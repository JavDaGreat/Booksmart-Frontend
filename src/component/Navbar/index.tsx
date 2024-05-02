import { FC } from "react";
import styles from "./styles.module.css";
import logo from "@/assets/logo.png";
import Image from "next/image";

export const Navbar: FC = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.navTitle}>
        <h3>BookSmart</h3>
      </div>
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
