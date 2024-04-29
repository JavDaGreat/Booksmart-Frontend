import { Button, Card, Footer, Navbar } from "@component";
import Image from "next/image";
import landingPagePic from "@/assets/Calendar.webp";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
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
        <Card title="Pro" />
        <Card title="Free" />
      </div>

      <Footer />
    </main>
  );
}
