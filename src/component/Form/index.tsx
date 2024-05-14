"use client";
import { FC } from "react";
import styles from "./styles.module.css";
import { Button } from "../Button";
import { Input } from "../Input";
import { useSearchParams } from "next/navigation";
import { SignUpForm } from "@/app/signup/page";
type Props = {
  setSignUpForm: (
    value: SignUpForm | ((prevState: SignUpForm) => SignUpForm)
  ) => void;
  signUpForm: SignUpForm;
};

export const Form: FC<Props> = ({ setSignUpForm, signUpForm }) => {
  const query = useSearchParams();
  const defaultTierPlan = query.get("tierPlan") || "Free";

  const handleInputChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSignUpForm(
      (prevState: SignUpForm) =>
        ({
          ...prevState,
          [e.target.name]: e.target.value,
        } as SignUpForm)
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signUpForm?.password !== signUpForm?.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <p>Get started with BookSmart today</p>
      <h3>Tier Plan</h3>
      <div className={styles.radioWrapper}>
        <Input
          type="radio"
          name="tierPlan"
          label="Free"
          value={"Free"}
          checked={defaultTierPlan === "Free"}
          onChange={handleInputChanges}
        />
        <Input
          type="radio"
          name="tierPlan"
          label="Pro"
          value={"Pro"}
          checked={defaultTierPlan === "Pro"}
          onChange={handleInputChanges}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          type="text"
          label="Name"
          name="name"
          onChange={handleInputChanges}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          onChange={handleInputChanges}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          onChange={handleInputChanges}
        />
        <Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          onChange={handleInputChanges}
        />
        <Input
          type="text"
          label="Company Name"
          name="companyName"
          onChange={handleInputChanges}
        />
      </div>

      <div className={styles.checkbox}>
        <input type="checkbox" onChange={handleInputChanges} />
        <label htmlFor="">Agree terms</label>
      </div>

      <Button label="Submit" />
    </form>
  );
};
