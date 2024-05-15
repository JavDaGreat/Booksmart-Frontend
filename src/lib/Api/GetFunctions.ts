export const getAllEvents = async (
  id: string,
  isAdmin: boolean,
  companyId: string,
  accessToken: string
) => {
  const response = await fetch(
    `https://booksmart-backend.onrender.com/appointment`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, isAdmin, companyId }),
    }
  );
  const data = await response.json();

  return data;
};
