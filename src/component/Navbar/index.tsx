"use client";
import { FC } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export const Navbar: FC = () => {
  const { push } = useRouter();
  return (
    <nav className={styles.container}>
      <div className={styles.navTitle}>
        <h3>BookSmart</h3>
      </div>
      <ul className={styles.navList}>
        <li onClick={() => push("/")}>Home</li>
        <li onClick={() => push("/")}>About</li>
        <li onClick={() => push("/")}>Contact</li>
      </ul>
      <ul className={styles.navList}>
        <li>Get Started</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};
