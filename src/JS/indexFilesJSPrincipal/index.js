import { calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

document.addEventListener("DOMContentLoaded", () => {
  let calendarEl = document.getElementById("calendar");
  let draggableEl = document.getElementById("draggable-el");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: "dayGridMonth,dayGridWeek",
    selectable: true,
    droppable: true
  });
  calendar.render();
});
