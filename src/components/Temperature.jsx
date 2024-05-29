import React from "react";
import { BsUmbrella } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { FaCloudRain } from "react-icons/fa6";
import { BsCloudSleet } from "react-icons/bs";

const Temperature = ({ data, city }) => {
  const getWeatherImage = (WeatherData) => {
    if (WeatherData.includes("cloud")) {
      return <FaCloudShowersHeavy className="text-8xl text-blue-500" />;
    } else if (WeatherData.includes("sunny")) {
      return <TiWeatherSunny className="text-8xl text-blue-500"  />;
    } else if (WeatherData.includes("rain")) {
      return <FaCloudRain className="text-8xl text-blue-500"  />;
    } else if (WeatherData.includes("snow")) {
      return <BsCloudSleet className="text-8xl text-blue-500"  />;
    } else {
      console.log("none");
    }
  };
  return (
    <div className="w-[40%]   flex flex-col justify-center items-center  z-1">
      <div className="flex flex-row justify-between  items-center bg-gray-800 text-gray-300 text-xl  py-3 w-full   ">
        <h4 className="ml-5">Monday</h4>
        <span className="mr-5">6 oct</span>
      </div>
      <div className=" bg-gray-700 h-[300px] w-full  ">
        <h2 className=" text-2xl text-gray-300 mt-8 ml-12  ">
          {city}
        </h2>
        <div className="flex flex-row justify-between mx-12 items-center mt-8 ">
          {data.main ? (
            <h1 className="text-6xl text-white font-bold">{`${data.main.temp} C˚`}</h1>
          ) : null}
          {data.weather ? (
            <a href="">
              {getWeatherImage(data.weather[0].description.toLowerCase())}
            </a>
          ) : null}
        </div>
        <div className="flex flex-row justify-start  items-center mt-20 text-lg font-semibold text-gray-400 ">
          <span className="flex flex-row justify-center items-center text-gray-400 ">
            <BsUmbrella className="text-2xl  text-gray-400 ml-8  mr-1" />
            20%
          </span>
          <span className="flex flex-row justify-center items-center">
            <FaWind className="text-2xl  ml-5  mr-1" />
            18 km/h
          </span>
          <span className="flex flex-row justify-center items-center">
            <FaRegCompass className="text-2xl  ml-5   mr-1" />
            East
          </span>
        </div>
      </div>
    </div>
  );
};
export default Temperature;
