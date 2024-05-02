import { FC } from "react";
import styles from "./styles.module.css";
import { Button } from "../Button";
import { Input } from "../Input";

export const Form: FC = () => {
  return (
    <form className={styles.formContainer}>
      <h1>Sign Up</h1>
      <Input type="text" label="Name" />
      <Input type="email" label="Email" />
      <Input type="password" label="Password" />
      <Input type="password" label="Confirm Password" />
      <Input type="text" label="Company Name" />

      <div className={styles.checkbox}>
        <input type="checkbox" />
        <label htmlFor="">Agree terms</label>
      </div>

      <Button label="Submit" />
    </form>
  );
};
