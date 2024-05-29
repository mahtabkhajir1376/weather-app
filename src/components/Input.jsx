import React from "react";
import { FaSearchLocation } from "react-icons/fa";
const Input = ({ location, setlocation, searchLocation }) => {
  return (
    <div className="absolute  top-[40%] left-[15%] w-[70%]">
      <div className="flex flex-row justify-around items-center bg-gray-900 rounded-full relative py-6 ">
        <input
          type="text"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          className="bg-gray-900  rounded-full w-[70%] outline-none text-white text-2xl text-center"
        />
        <button
          className="text-white text-2xl py-4 px-6 rounded-full absolute right-2 items-center bg-blue-400 w-[10%] cursor-pointer"
          onClick={searchLocation}
        >
          Find
        </button>
      </div>
    </div>
  );
};

export default Input;
