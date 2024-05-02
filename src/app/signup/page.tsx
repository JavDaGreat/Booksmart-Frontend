import { Footer, Form, Navbar } from "@/component";
import styles from "./styles.module.css";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.formWrapper}>
        <Form />
      </div>
      <Footer />
    </div>
  );
}
