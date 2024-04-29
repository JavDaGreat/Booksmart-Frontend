import styles from "./styles.module.css";
import { Instagram, X } from "@/assets/icons";
export const Footer = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.links}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.social}>
        <Instagram />
        <X />
      </div>

      <p>@2014 Company AB</p>
    </footer>
  );
};
