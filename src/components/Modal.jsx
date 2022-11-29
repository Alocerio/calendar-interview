import React from "react";

const Modal = () => {
  return (
    <div
      className="inline-flex flex-col space-y-0.5 items-start justify-end pl-10 pr-11 pt-14 pb-8 bg-white rounded-2xl"
      style={{ width: 662, height: 434 }}
    >
      <p className="text-4xl font-bold leading-9 text-gray-800">
        Speaking class
      </p>
      <p className="text-2xl font-medium leading-normal text-gray-800">Liam</p>
      <p className="text-xl font-medium leading-tight text-gray-800">
        Topic: Food
      </p>
      <p className="text-xl font-medium leading-tight text-gray-800">Data</p>
      <p className="text-xl font-medium leading-tight text-gray-800">Time</p>
      <p className="text-xl font-medium leading-tight text-gray-800">
        Duration
      </p>
      <p className="text-xl font-bold leading-tight text-pink-700">
        Tuesday 16th October 2022
      </p>
      <p className="text-xl font-bold leading-tight text-pink-700">09:00</p>
      <p className="text-xl font-bold leading-tight text-pink-700">
        45 minutes
      </p>
      <div
        className="bg-pink-700 rounded-xl"
        style={{ width: 577, height: 59 }}
      />
      <p
        className="text-xl font-semibold leading-tight text-center text-white"
        style={{ width: 577 }}
      >
        JOIN
      </p>
      <p className="text-xl font-medium leading-tight text-gray-800">
        Material:
      </p>
      <p className="text-xl leading-tight underline text-gray-800">
        Video Listening Introduzione
      </p>
      <p className="text-xl leading-tight underline text-gray-800">
        Video Listening Introduzione
      </p>
    </div>
  );
};

export default Modal;
