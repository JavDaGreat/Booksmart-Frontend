type Register = {
  name: string;
  email: string;
  tirePlan: string;
  password: string;
  companyId?: string;
  companyName?: string;
};

type Login = Pick<Register, "email" | "password">;

const login = async (email: string, password: string) => {
  try {
    const response = await fetch(
      "https://booksmart-backend.onrender.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("A problem occurred with the fetch operation: ", error);
    throw error;
  }
};

const Register = async (
  name: string,
  email: string,
  password: string,
  tierPlan: string,
  companyId?: string,
  companyName?: string
) => {
  try {
    const response = await fetch(
      "https://booksmart-backend.onrender.com/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
          tierPlan,
          companyId,
          companyName,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("A problem occurred with the fetch operation: ", error);
    throw error;
  }
};

export { login, Register };
