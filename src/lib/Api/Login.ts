import { SignUpForm } from "@/app/signup/page";
import useUserStore from "@/lib/store";

const login = async (email: string, password: string) => {
  const response = await fetch("https://booksmart-backend.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const responseBody = await response.json();
    const serverErrorMessage = responseBody.message;
    return new Error(serverErrorMessage);
  }

  const data = await response.json();
  console.log(data);

  useUserStore.getState().setUser(data);
  return data;
};

const createAccount = async (signUpForm: SignUpForm) => {
  console.log(signUpForm);

  const response = await fetch(
    "https://booksmart-backend.onrender.com/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpForm),
    }
  );

  if (!response.ok) {
    const responseBody = await response.json();
    const serverErrorMessage = responseBody.message;
    return new Error(serverErrorMessage);
  }
  const data = await response.json();
  useUserStore.getState().setUser(data);
  return data;
};

export { login, createAccount };
