import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import Modal from "./components/Modal";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
    console.log(monthIndex);
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen w-full bg-bg  flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <div className="mobile:hidden desktop:block">
            <Sidebar />
          </div>
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
