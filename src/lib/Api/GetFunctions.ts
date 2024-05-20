export const getAllEvents = async (id: string, accessToken: string) => {
  const response = await fetch(
    `https://booksmart-backend.onrender.com/appointment?id=${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 204) {
    return [];
  }

  const data = await response.json();

  console.log(data);

  return data;
};
