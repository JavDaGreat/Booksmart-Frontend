import { Event } from "@/app/dashbord/page";
import useUserStore from "../store";

export const createEvent = async (eventDetails: Event, accessToken: string) => {
  eventDetails.createdBy = useUserStore.getState().user.id;
  eventDetails.companyId = useUserStore.getState().user.companyId;
  console.log(eventDetails);

  const response = await fetch(
    `https://booksmart-backend.onrender.com/appointment`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventDetails),
    }
  );
  const data = await response.json();

  return data;
};
