"use client";
import { FC, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { Input, Button, Modal } from "@component";
import useUserStore from "@/lib/store";

type Props = {};
export const Navbar: FC<Props> = () => {
  const { user, clearUser } = useUserStore();

  const { push } = useRouter();
  const [showModal, setShowModal] = useState(false);
  console.log(user);

  const handleAuthentication = () => {
    if (user?.name) {
      clearUser();
      window.location.reload();
    }
    if (Object.keys(user).length === 0) {
      setShowModal((prev) => !prev);
    }
  };

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
        <Button
          label={user?.name ? "Logout" : "Login"}
          onClick={() => handleAuthentication()}
        />
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
