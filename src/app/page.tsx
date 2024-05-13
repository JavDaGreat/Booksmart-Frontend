"use client";
import { Button, Card, Footer, Input, Modal, Navbar } from "@component";
import Image from "next/image";
import landingPagePic from "@/assets/Calendar.webp";
import styles from "./page.module.css";
import { useState } from "react";
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className={styles.main}>
      <Navbar onLogin={() => setShowModal((prev) => !prev)} />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Simplify the Way You Schedule Meetings </h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea
            repellat facilis a, cumque aliquam magnam distinctio accusantium.
            Beatae autem excepturi, quae voluptatum voluptates molestiae culpa
            quibusdam. Nisi, deserunt commodi?
          </h3>
          <Button label="Get Started" />
        </div>
        <div className={styles.LandingPageImageWrapper}>
          <Image
            src={landingPagePic}
            alt="logo"
            layout="responsive"
            sizes="(max-width: 768px) 70vw, (max-width: 1200px) 55vw, 50vw"
          />
        </div>
      </div>
      <div className={styles.cards}>
        <Card title="Free" />
        <Card title="Pro" />
      </div>
      <Footer />
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
    </main>
  );
}
