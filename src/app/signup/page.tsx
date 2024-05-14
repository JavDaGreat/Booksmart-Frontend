"use client";
import { Footer, Form, Navbar } from "@/component";
import styles from "./styles.module.css";
import { useState } from "react";
export type SignUpForm =
  | {
      name: string;
      email: string;
      password: string;
      terms: boolean;
      confirmPassword: string;
      companyName?: string;
      companyId?: string;
    }
  | undefined;

export default function SignUp() {
  const [signUpForm, setSignUpForm] = useState<SignUpForm>(undefined);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.formWrapper}>
        <Form setSignUpForm={setSignUpForm} signUpForm={signUpForm} />
      </div>
      <Footer />
    </div>
  );
}
