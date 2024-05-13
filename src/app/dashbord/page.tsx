"use client";
import { Footer, Navbar, Modal, Input } from "@/component";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/sass/styles.scss";
import { useCallback, useState } from "react";
import "./styles.css";

type Event = {
  id?: number;
  title: string;
  start: Date;
  end: Date;
  desc?: string;
  Creator?: string;
  Guests?: string[];
};

type ModalType = "new" | "edit" | "existingEvent" | null;

export default function Page() {
  const localizer = dayjsLocalizer(dayjs);
  const [eventDetails, setEventDetails] = useState<Event>({
    title: "",
    desc: "",
    Creator: "",
    Guests: [],
    start: new Date(),
    end: new Date(),
  });
  const [showModal, setShowModal] = useState<ModalType>(null);
  const [time, setTime] = useState("");
  const [calEvent, setCalEvent] = useState<Event | null>(null);
  const [myEvents, setEvents] = useState<Event[]>([
    {
      id: 2,
      title: "Team lead meeting",
      Guests: ["John", "Jane", "Doe"],
      start: new Date(2024, 4, 4, 8, 30, 0),
      end: new Date(2024, 4, 4, 12, 30, 0),
      desc: "Discuss the new project",
      Creator: "John",
    },
  ]);
  const guestsList = [
    "guest1@example.com",
    "guest2@example.com",
    "guest3@example.com",
  ];

  const test = (calEvent: Event) => {
    setShowModal("existingEvent");
    setCalEvent(calEvent);
  };
  const onSave = useCallback(() => {
    setEvents((prevEvents) => [...prevEvents, eventDetails]);
    setShowModal(null);
    console.log(eventDetails);
  }, [eventDetails]);

  const modalConfig = {
    existingEvent: {
      title: calEvent?.title,
      children: (
        <div className="existingEventContainer">
          <p>{`${dayjs(calEvent?.start).format(
            "dddd, MMMM D ⋅ h:mm A"
          )} - ${dayjs(calEvent?.end).format("h:mm A")}`}</p>

          <p>{calEvent?.desc}</p>
          <h3>Guests:</h3>

          {calEvent?.Guests?.map((guest, index) => (
            <li key={index}>{guest}</li>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <p>Created By:</p>
            <span>{calEvent?.Creator}</span>
          </div>
        </div>
      ),
      onClose: () => setShowModal(null),
      isOpen: showModal === "existingEvent",
      onEdit: () => setShowModal("edit"),
      type: "show",
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
              setEventDetails({ ...eventDetails, title: e.target.value })
            }
          />
          <Input
            list="guests"
            label="Guests"
            type="text"
            placeholder="Add by email"
            defaultValue={calEvent?.Guests}
            add
            onChange={(e) =>
              setEventDetails({
                ...eventDetails,
                Guests: [e.target.value],
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
            defaultValue={calEvent?.desc}
            onChange={(e) =>
              setEventDetails({ ...eventDetails, desc: e.target.value })
            }
          />
        </>
      ),
      onClose: () => setShowModal(null),
      isOpen: showModal === "edit",
      type: "edit",
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
            placeholder="Add by email"
            onChange={(e) =>
              setEventDetails({
                ...eventDetails,
                Guests: [e.target.value],
              })
            }
          />
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
              setEventDetails({ ...eventDetails, desc: e.target.value })
            }
          />
        </>
      ),
      onClose: () => setShowModal(null),
      isOpen: showModal === "new",
      type: "new",
      onSave: onSave,
    },
  };
  const modalProps = showModal && modalConfig[showModal];

  const addEvent = (info: any) => {
    setShowModal("new");
    console.log(info.start);

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
