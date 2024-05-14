"use client";
import { Card, Footer, Navbar } from "@component";
import Image from "next/image";
import landingPagePic from "@/assets/Calendar.webp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1>Simplify the Way You Schedule Meetings </h1>
            <h4>
              Struggling to find a reliable calendar tool that truly understands
              your scheduling needs? Look no further than BookSmart – the
              game-changing event calendar that&apos;s here to revolutionize the
              way you book meetings.
            </h4>

            <a href="#TierPlans" className={styles.link}>
              Get Started
            </a>
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

        <div className={styles.introductionContainer}>
          <h2>
            Why settle for mediocrity when you can upgrade to BookSmart?
            Here&apos;s why it&apos;s miles ahead of the competition:
          </h2>

          <h3>1. Effortless Booking:</h3>
          <p>
            Booking meetings has never been easier. With BookSmart&apos;s
            intuitive interface, you can schedule appointments in seconds. Just
            select your availability, share your calendar link, and let
            attendees pick the perfect time for them. No more endless email
            chains or frustrating phone tag.
          </p>

          <h3>2. Intelligent Scheduling:</h3>
          <p>
            Bid farewell to double bookings and scheduling conflicts.
            BookSmart&apos;s advanced algorithms analyze everyone&apos;s
            calendars and suggest optimal meeting times that suit
            everyone&apos;s availability. Say hello to stress-free scheduling!
          </p>

          <h3>3. Seamless Integration:</h3>
          <p>
            Whether you&apos;re a Google Calendar devotee or an Outlook
            aficionado, BookSmart plays nice with all major calendar platforms.
            Sync events across all your devices and enjoy hassle-free
            organization on the go.
          </p>

          <h3>4. Customizable Invitations:</h3>
          <p>
            Make a lasting impression with personalized meeting invitations.
            Customize your invites with your company logo, colors, and messaging
            to showcase your brand in style.
          </p>

          <h3>5. Real-Time Updates:</h3>
          <p>
            Stay in the loop with instant notifications and updates. Get
            notified of new bookings, changes, and cancellations in real-time,
            so you&apos;re always in control of your schedule. Don&apos;t settle
            for a run-of-the-mill calendar tool. Upgrade to BookSmart today and
            experience the future of event booking!
          </p>
        </div>
        <div className={styles.cards} id="TierPlans">
          <Card title="Free" />
          <Card title="Pro" />
        </div>
      </main>
      <Footer />
    </>
  );
}
