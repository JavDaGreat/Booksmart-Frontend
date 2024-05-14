"use client";
import { FC, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { Button } from "../Button";

type Props = {};
export const Navbar: FC<Props> = () => {
  const { push } = useRouter();
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.navTitle}>
        <h3 onClick={() => push("/")}>BookSmart</h3>
      </div>
      <ul className={styles.navList}>
        <li onClick={() => push("/")}>Home</li>
        <li onClick={() => push("/")}>About</li>
        <li onClick={() => push("/")}>Contact</li>
      </ul>
      <ul className={styles.navList}>
        <li onClick={() => setShowModal((prev) => !prev)}>Login</li>
      </ul>
      <Modal
        title="Login"
        isOpen={showModal}
        onClose={() => setShowModal(false)}>
        <Input type="text" label="Email" />
        <Input label="Password" type="password" />
        <div className={styles.loginButton}>
          <p>Forget Password</p>
          <Button label="Login" />
        </div>
      </Modal>
    </nav>
  );
};
