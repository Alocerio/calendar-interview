import React from "react";
import Porfile from "../assets/porfileExample.png";
const Modal = ({}) => {
  return (
    <div className="bg-bg">
      <div className="inline-flex  flex-col space-y-0.5 items-start  pl-10 pr-11 pt-14 pb-8 bg-white rounded-2xl">
        <div className="grid grid-cols-1  ">
          <div className="flex flex-col  ">
            <p className="text-4xl font-bold leading-9 text-gray-800">
              Speaking class
            </p>
            <p className="text-xl pt-3 font-medium leading-tight text-gray-800">
              Topic: Food
            </p>
          </div>
          <div className="flex items-center absolute  right-36 ">
            <img src={Porfile} alt={Porfile} />
            <p className="text-2xl pl-3 font-medium leading-normal text-gray-800">
              Liam
            </p>
          </div>
        </div>

        <div className="pt-12 grid grid-cols-3  grid-rows-1">
          <p className="text-xl font-medium leading-tight text-gray-800">
            {daySelected.format("dddd, MMMM DD")}
          </p>
          <p className="text-xl font-medium leading-tight text-gray-800">
            Time
          </p>
          <p className="text-xl font-medium leading-tight text-gray-800">
            Duration
          </p>
          <p className="text-xl font-bold pr-4 leading-tight text-join">date</p>
          <p className="text-xl font-bold leading-tight text-join">time</p>
          <p className="text-xl font-bold leading-tight text-join">
            45 minutes
          </p>
        </div>
        <button className="text-xl w-full py-4 bg-join rounded font-semibold leading-tight text-center text-white">
          JOIN
        </button>

        <div className="text-center pt-4 w-full">
          <p className="text-xl absolute text-left font-medium leading-tight text-gray-800">
            Material:
          </p>
          <p className="text-xl leading-tight underline text-gray-800">
            Video Listening Introduzione
          </p>
          <p className="text-xl leading-tight underline text-gray-800">
            Video Listening Introduzione
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
