"use client";
import { Footer, Navbar } from "@/component";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import styles from "./styles.module.css";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Modal } from "@/component/Modal";
import { useState } from "react";

type Event = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  desc?: string;
};

export default function Page() {
  const localizer = dayjsLocalizer(dayjs);
  const [isOpen, setIsOpen] = useState(false);
  const events = [
    {
      id: 0,
      title: "Board meeting",
      start: new Date(2024, 4, 3, 9, 0, 0),
      end: new Date(2024, 4, 3, 13, 0, 0),
      desc: "This is a board meeting.",
    },
    {
      id: 1,
      title: "MS training",
      allDay: true,
      start: new Date(2024, 4, 4, 9, 0, 0),
      end: new Date(2024, 4, 4, 13, 0, 0),
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
  };

  return (
    <div>
      <Navbar />
      <div className={styles.calendarWrapper}>
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
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={"Event"}>
        <h1>Hi</h1>
      </Modal>
    </div>
  );
}
