"use client";
import { Footer, Navbar, Modal, Input } from "@/component";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/sass/styles.scss";
import { useState } from "react";
import "./styles.css";
import { Edit } from "@/assets/icons";
import { title } from "process";
import { on } from "events";

type Event = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  desc?: string;
  Creator?: string;
  Guests?: string[];
};

type ModalType = "new" | "edit" | "show" | null;

export default function Page() {
  const localizer = dayjsLocalizer(dayjs);
  const [showModal, setShowModal] = useState<ModalType>(null);
  const [calEvent, setCalEvent] = useState<Event | null>(null);
  const [myEvents, setEvents] = useState<Event[]>([
    {
      id: 2,
      title: "Team lead meeting",
      start: new Date(2024, 4, 4, 8, 30, 0),
      end: new Date(2024, 4, 4, 12, 30, 0),
    },
  ]);
  const events = [
    ,
    {
      id: 2,
      title: "Team lead meeting",
      start: new Date(2018, 0, 29, 8, 30, 0),
      end: new Date(2018, 0, 29, 12, 30, 0),
    },
    {
      id: 11,
      title: "Birthday Party",
      start: new Date(2018, 0, 30, 7, 0, 0),
      end: new Date(2018, 0, 30, 10, 30, 0),
    },
  ];

  const test = (calEvent: Event) => {
    setShowModal("show");
    setCalEvent(calEvent);
  };

  const modalConfig = {
    show: {
      title: calEvent?.title,
      children: (
        <>
          <p>{`${dayjs(calEvent?.start).format(
            "dddd, MMMM D ⋅ h:mm A"
          )} - ${dayjs(calEvent?.end).format("h:mm A")}`}</p>
          <p>{calEvent?.desc}</p>
          <h3>Guests:</h3>
          <ul>
            {calEvent?.Guests?.map((guest, index) => (
              <li key={index}>{guest}</li>
            ))}
          </ul>
          <h3>Created By:</h3>
          <span>{calEvent?.Creator}</span>
        </>
      ),
      onClose: () => setShowModal(null),
      isOpen: showModal === "show",
      onEdit: () => setShowModal("edit"),
      type: "show",
    },
    edit: {
      title: "Edit Event",
      children: (
        <>
          <Input label="Title" type="text" value={calEvent?.title} />
        </>
      ),
      onClose: () => setShowModal(null),
      isOpen: showModal === "edit",
      type: "edit",
    },
    new: {
      title: "New Event",
      children: <Edit />,
      onClose: () => setShowModal(null),
      isOpen: showModal === "new",
    },
    type: "new",
  };
  const modalProps = showModal && modalConfig[showModal];

  const addEvent = () => {
    setShowModal("new");
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
        />
      </div>
      <div className="footerWrapper">
        <Footer />
      </div>
      <Modal {...modalProps} />
    </div>
  );
}
