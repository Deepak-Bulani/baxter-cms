// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import FlagSVG from "../svg/flag.svg?react";
// import CurrentDateSVG from "../svg/currentDate.svg?react";

// const CalendarComponent = () => {
//   const [date, setDate] = useState(new Date());
//   const [activeStartDate, setActiveStartDate] = useState(new Date());
//   const [events, setEvents] = useState({});

//   const handleDayClick = (value) => {
//     if (value < new Date()) {
//       alert("You can't select a previous date.");
//       return;
//     }
//     const selectedDate = value.toDateString();
//     const content = prompt("Enter content for this date:", "");
//     if (content) {
//       setEvents((prevEvents) => ({
//         ...prevEvents,
//         [selectedDate]: content,
//       }));
//     }
//     setDate(value);
//   };

//   const tileClassName = ({ date }) => {
//     const today = new Date().toDateString();
//     const dateString = date.toDateString();

//     return dateString === today
//       ? "react-calendar__tile react-calendar__tile--current react-calendar__navigation react-calendar__month-view__weekdays react-calendar__month-view__days__day--neighboringMonth react-calendar__month-view__weekNumbers react-calendar__navigation__arrow react-calendar__month-view__weekdays__weekday text-gray-500 text-left"
//       : "react-calendar__tile react-calendar__navigation react-calendar__month-view__weekdays react-calendar__month-view__days__day--neighboringMonth react-calendar__month-view__weekNumbers react-calendar__navigation__arrow react-calendar__month-view__weekdays__weekday text-gray-500 text-left";
//   };
  
//   const tileContent = ({ date }) => {
//     const dateString = date.toDateString();
//     const today = new Date().toDateString();

//     return (
//       <div className = "flex items-center justify-center">
//         {dateString === today ? (
//           <CurrentDateSVG />
//         ) : events[dateString] ? (
//           <FlagSVG />
//         ) : (
//           <span>--</span>
//         )}
//       </div>
//     );
//   };

//   const changeMonth = (direction) => {
//     const newDate = new Date(activeStartDate);
//     newDate.setMonth(activeStartDate.getMonth() + direction);
//     setActiveStartDate(newDate);
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center bg-blue-500 p-4 text-white">
//         <button onClick={() => changeMonth(-1)} className="hover:underline">
//           &lt;
//         </button>
//         <h2 className="text-lg font-semibold">
//           {activeStartDate.toLocaleString("default", {
//             month: "long",
//             year: "numeric",
//           })}
//         </h2>
//         <button onClick={() => changeMonth(1)} className="hover:underline">
//           &gt;
//         </button>
//       </div>
//       <Calendar
//         onClickDay={handleDayClick}
//         tileContent={tileContent}
//         onChange={setDate}
//         value={date}
//         view="month"
//         calendarType="iso8601"
//         tileClassName={tileClassName}
//         activeStartDate={activeStartDate}
//         onActiveStartDateChange={({ activeStartDate }) =>
//           setActiveStartDate(activeStartDate)
//         }
//         tileDisabled={({ date }) =>
//           date.getMonth() < new Date().getMonth() ||
//           date.getMonth() > new Date().getMonth()
//         }
//         nextLabel={null}
//         prevLabel={null}
//         showNavigation={false}
//       />
//     </div>
//   );
// };

// export default CalendarComponent;