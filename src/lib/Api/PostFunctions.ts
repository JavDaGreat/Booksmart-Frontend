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

export const editEvent = async (
  eventDetails: Event,
  isAdmin: boolean,
  appointmentId: string,
  userId: string,
  accessToken: string
) => {
  eventDetails.createdBy = userId;

  const response = await fetch(
    `https://booksmart-backend.onrender.com/appointment`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updatedAppointment: eventDetails,
        isAdmin: isAdmin,
        appointmentId: appointmentId,
        userId: userId,
      }),
    }
  );
  const data = await response.json();
  console.log(data);

  return data;
};

export const deleteEvent = async (
  appointmentId: string,
  accessToken: string,
  isAdmin: boolean,
  userId: string
) => {
  console.log(appointmentId, accessToken, isAdmin, userId);

  const response = await fetch(
    `https://booksmart-backend.onrender.com/appointment`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ appointmentId, isAdmin, userId }),
    }
  );
  const data = await response.json();
  return data;
};
