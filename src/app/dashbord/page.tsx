"use client";
import { Footer, Navbar, Modal, Input } from "@/component";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/sass/styles.scss";
import { useCallback, useState, useEffect, use } from "react";
import "./styles.css";
import { createEvent, deleteEvent, editEvent } from "@/lib/Api/PostFunctions";
import useUserStore from "@/lib/store";
import { getAllEvents } from "@/lib/Api/GetFunctions";
import { Clock, Creator, Description, Guests } from "@/assets/icons";
import { on } from "events";

export type Event = {
  _id?: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  createdBy?: string;
  authorizedUsers?: string[];
  companyId?: string;
};

type ModalType = "new" | "edit" | "existingEvent" | null;

export default function Page() {
  const localizer = dayjsLocalizer(dayjs);
  const [calEvent, setCalEvent] = useState<Event | null>(null);
  const { user } = useUserStore();
  const [eventDetails, setEventDetails] = useState<Event>({
    title: "",
    description: "",
    createdBy: "",
    authorizedUsers: [],
    start: calEvent?.start || new Date(),
    end: new Date(),
    companyId: "",
  });

  const [showModal, setShowModal] = useState<ModalType>(null);
  const [time, setTime] = useState("");
  const [myEvents, setEvents] = useState<Event[]>([]);
  const guestsList = user.colleagues || [];
  const fetchEvents = async () => {
    const events = await getAllEvents(user.id, user.accessToken);
    const formattedEvents = events.map((event: Event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
    setEvents(formattedEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, [user]);

  const test = (calEvent: Event) => {
    setShowModal("existingEvent");
    setCalEvent(calEvent);
    setEventDetails(calEvent);
  };

  const saveNewEvent = useCallback(async () => {
    setShowModal(null);
    await createEvent(eventDetails, user.accessToken);
    await fetchEvents();
    setEventDetails({
      title: "",
      description: "",
      createdBy: "",
      authorizedUsers: [],
      start: new Date(),
      end: new Date(),
      companyId: "",
    });
  }, [eventDetails]);

  const saveEditedEvent = useCallback(async () => {
    setShowModal(null);
    if (!calEvent) return;
    await editEvent(
      eventDetails,
      user.isAdmin,
      calEvent?._id || "",
      user.id,
      user.accessToken
    );
    await fetchEvents();
  }, [eventDetails]);

  const onClose = () => {
    setShowModal(null);
    setEventDetails({
      title: "",
      description: "",
      createdBy: "",
      authorizedUsers: [],
      start: calEvent?.start || new Date(),
      end: calEvent?.end || new Date(),
      companyId: "",
    });
  };

  const onDelete = async () => {
    if (!eventDetails._id) return;
    setShowModal(null);

    await deleteEvent(
      eventDetails._id,
      user.accessToken,
      user.isAdmin,
      user.id
    );
    await fetchEvents();
  };

  const modalConfig = {
    existingEvent: {
      title: calEvent?.title,
      children: (
        <div className="existingEventContainer">
          <p style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Clock />
            {`${dayjs(calEvent?.start).format(
              "dddd, MMMM D ⋅ h:mm A"
            )} - ${dayjs(calEvent?.end).format("h:mm A")}`}
          </p>
          <div
            style={{
              display: "flex",
              listStyle: "none",
              alignContent: "center",
              gap: 4,
            }}>
            <Guests />
            {calEvent?.authorizedUsers?.map((guest, index) => (
              <li key={index}>{guest}</li>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Description />
            <p>{calEvent?.description}</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Creator />
            <span>{calEvent?.createdBy}</span>
          </div>
        </div>
      ),
      onClose: () => onClose(),
      isOpen: showModal === "existingEvent",
      onEdit: () => setShowModal("edit"),
      type: "show",
      onDelete: onDelete,
    },
    edit: {
      title: "Edit Event",
      children: (
        <>
          <Input
            label="Title"
            type="text"
            defaultValue={calEvent?.title}
            onChange={(e) =>
              setEventDetails({
                ...eventDetails,
                title: e.target.value,
              })
            }
          />
          <Input
            list="guests"
            label="Guests"
            type="text"
            placeholder="Add by email"
            defaultValue={calEvent?.authorizedUsers}
            onChange={(e) =>
              setEventDetails({
                ...eventDetails,
                authorizedUsers: [e.target.value],
              })
            }
          />
          <datalist id="guests">
            {guestsList.map((guest, index) => (
              <option key={index} value={guest} />
            ))}
          </datalist>

          <Input
            label="Start"
            type="datetime-local"
            defaultValue={
              calEvent?.start
                ? calEvent?.start.toISOString().substring(0, 16)
                : undefined
            }
            onChange={(e) => {
              setEventDetails({
                ...eventDetails,
                start: new Date(e.target.value),
              });
            }}
          />
          <Input
            label="End"
            type="datetime-local"
            defaultValue={
              calEvent?.end
                ? calEvent?.end.toISOString().substring(0, 16)
                : undefined
            }
            onChange={(e) =>
              setEventDetails({
                ...eventDetails,
                end: new Date(e.target.value),
              })
            }
          />
          <Input
            label="Description"
            type="textarea"
            defaultValue={calEvent?.description}
            onChange={(e) =>
              setEventDetails({
                ...eventDetails,
                description: e.target.value,
              })
            }
          />
        </>
      ),
      onClose: () => onClose(),
      isOpen: showModal === "edit",
      type: "edit",
      onSave: saveEditedEvent,
      onDelete: onDelete,
    },
    new: {
      title: "New Event",
      children: (
        <>
          <Input
            label="Title"
            type="text"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, title: e.target.value })
            }
          />

          <Input
            label="Guests"
            type="text"
            list="guests"
            placeholder="Add by email"
            onChange={(e) =>
              setEventDetails({
                ...eventDetails,
                authorizedUsers: [e.target.value],
              })
            }
          />
          <datalist id="guests">
            {guestsList.map((guest, index) => (
              <option key={index} value={guest} />
            ))}
          </datalist>
          <Input
            label="Start"
            type="datetime-local"
            value={time}
            onChange={(e) => {
              const newTime = e.target.value;
              setTime(newTime);
              setEventDetails({
                ...eventDetails,
                start: new Date(newTime),
              });
            }}
          />

          <Input
            label="End"
            type="datetime-local"
            onChange={(e) =>
              setEventDetails({
                ...eventDetails,
                end: new Date(e.target.value),
              })
            }
          />
          <Input
            label="Description"
            type="textarea"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, description: e.target.value })
            }
          />
        </>
      ),
      onClose: () => onClose(),
      isOpen: showModal === "new",
      type: "new",
      onSave: saveNewEvent,
    },
  };
  const modalProps = showModal && modalConfig[showModal];

  const addEvent = (info: any) => {
    setShowModal("new");

    const formattedDate = dayjs(info.start).format("YYYY-MM-DDTHH:mm");
    setTime(formattedDate);
  };

  return (
    <div>
      <Navbar />
      <div className="calendarWrapper">
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          events={myEvents}
          style={{ height: 500 }}
          showMultiDayTimes
          onSelectEvent={test}
          onSelectSlot={addEvent}
          selectable
        />
      </div>
      <div className="footerWrapper">
        <Footer />
      </div>
      {modalProps && <Modal {...modalProps} />}
    </div>
  );
}
