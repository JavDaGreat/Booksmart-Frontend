"use client";
import { Footer, Navbar, Modal } from "@/component";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/sass/styles.scss";
import { useState } from "react";
import "./styles.css";

type Event = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  desc?: string;
  Creator?: string;
  Guests?: string[];
};

export default function Page() {
  const localizer = dayjsLocalizer(dayjs);
  const [isOpen, setIsOpen] = useState(false);
  const [calEvent, setCalEvent] = useState<Event | null>(null);
  const events = [
    {
      id: 0,
      title: "Board meeting",
      start: new Date(2024, 4, 3, 9, 0, 0),
      end: new Date(2024, 4, 3, 13, 0, 0),
      desc: "This is a board meeting.",
      Creator: "Javad S.",
      Guests: ["Jane Doe", "John Smith"],
    },
    {
      id: 1,
      title: "MS training",
      allDay: true,
      start: new Date(2024, 4, 4, 9, 0, 0),
      end: new Date(2024, 4, 4, 13, 0, 0),
      Creator: "John Doe",
    },
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
    isOpen ? setIsOpen(false) : setIsOpen(true);
    console.log(calEvent);
    setCalEvent(calEvent);
  };

  return (
    <div>
      <Navbar />
      <div className="calendarWrapper">
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          events={events}
          style={{ height: 500 }}
          showMultiDayTimes
          onSelectEvent={test}
        />
      </div>
      <div className="footerWrapper">
        <Footer />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={calEvent?.title}>
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
      </Modal>
    </div>
  );
}
