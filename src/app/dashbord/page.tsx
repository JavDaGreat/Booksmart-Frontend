"use client";
import { Footer, Navbar } from "@/component";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import styles from "./styles.module.css";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Page() {
  const localizer = dayjsLocalizer(dayjs);
  const events = [
    {
      id: 0,
      title: "Board meeting",
      start: new Date(2024, 4, 3, 9, 0, 0),
      end: new Date(2024, 4, 3, 13, 0, 0),
      resourceId: 1,
    },
    {
      id: 1,
      title: "MS training",
      allDay: true,
      start: new Date(2024, 4, 4, 9, 0, 0),
      end: new Date(2024, 4, 4, 13, 0, 0),
      resourceId: 2,
    },
    {
      id: 2,
      title: "Team lead meeting",
      start: new Date(2018, 0, 29, 8, 30, 0),
      end: new Date(2018, 0, 29, 12, 30, 0),
      resourceId: 3,
    },
    {
      id: 11,
      title: "Birthday Party",
      start: new Date(2018, 0, 30, 7, 0, 0),
      end: new Date(2018, 0, 30, 10, 30, 0),
      resourceId: 4,
    },
  ];

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
        />
      </div>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}
