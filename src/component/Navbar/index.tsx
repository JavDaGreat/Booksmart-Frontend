"use client";
import { FC, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { Input, Button, Modal } from "@component";
import useUserStore from "@/lib/store";
import { login } from "@/lib/Api/Login";

type Props = {};
export const Navbar: FC<Props> = () => {
  const { user, clearUser } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { push } = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleAuthentication = () => {
    if (user?.name) {
      clearUser();
      push("/");
    }
    if (Object.keys(user).length === 0) {
      setShowModal((prev) => !prev);
    }
  };
  const handleLogin = async () => {
    const userLogin = await login(email, password);
    if (userLogin instanceof Error) {
      setError(userLogin.message);
      return;
    }
    setEmail("");
    setShowModal(false);
    push("/dashbord");
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
        {user?.name && <li>{user?.name}</li>}
        <Button
          label={user?.name ? "Logout" : "Login"}
          onClick={() => handleAuthentication()}
        />
      </ul>
      <Modal
        title="Login"
        isOpen={showModal}
        onClose={() => {
          setShowModal(false), setError("");
        }}>
        <Input
          type="text"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.loginButton}>
          <p>Forget Password</p>
          <Button label="Login" onClick={() => handleLogin()} />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </Modal>
    </nav>
  );
};
