import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-7 flex items-center bg-bg text-white">
      <h2 className="ml-4 desktop:text-4xl tablet:text-2xl mobile:text-xl text-white font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <div className="pl-10">
        <button onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer  mx-2">
            ＜
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer  mx-2">
            ＞
          </span>
        </button>
      </div>

      <button
        onClick={handleReset}
        className="border rounded text-sm bg-bg2 text-bg py-0 px-5 mx-5"
      >
        Today
      </button>
    </header>
  );
}
