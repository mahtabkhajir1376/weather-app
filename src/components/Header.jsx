import React from "react";
import Input from "./Input";
import Temperature from "./Temperature";
import axios from "axios";
import { useState } from "react";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { FaCloudRain } from "react-icons/fa6";
import { BsCloudSleet } from "react-icons/bs";
import TempModel2 from "./TempModel2";

const Header = () => {
  const arrayTemp = [
    {
      today: "Tusday",
      icon: <FaCloudShowersHeavy />,
      temp1: 23,
      temp2: 18,
      bgColorh: "bg-gray-900",
      bgColorb: "bg-gray-950",
    },
    {
      today: "Wednesday",
      icon: <TiWeatherSunny />,
      temp1: 25,
      temp2: 20,
      bgColorh: "bg-gray-800",
      bgColorb: "bg-gray-700",
    },
    {
      today: "Thursday",
      icon: <FaCloudRain />,
      temp1: 28,
      temp2: 18,
      bgColorh: "bg-gray-900",
      bgColorb: "bg-gray-950",
    },
    {
      today: "Friday",
      icon: <BsCloudSleet />,
      temp1: 18,
      temp2: 22,
      bgColorh: "bg-gray-800",
      bgColorb: "bg-gray-700",
    },
    {
      today: "Saturday",
      icon: <FaCloudShowersHeavy />,
      temp1: 30,
      temp2: 21,
      bgColorh: "bg-gray-900",
      bgColorb: "bg-gray-950",
    },
    {
      today: "Sunday",
      icon: <TiWeatherSunny />,
      temp1: 29,
      temp2: 20,
      bgColorh: "bg-gray-800",
      bgColorb: "bg-gray-700",
    },
  ];

  const [data, setdata] = useState({});
  const [location, setlocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2e90f1bb27945e69987bc2ff920e9731`;

  const searchLocation = () => {
    axios.get(url).then((Response) => {
      setdata(Response.data);
      console.log(Response.data);
    });
  };

  return (
    <div className=" relative -z-1">
      <img
        src="public/town.jpg"
        className="h-[650px] filter blur-sm  w-full "
        alt=""
      />
      <Input
        location={location}
        setlocation={setlocation}
        searchLocation={searchLocation}
      />
  
        <div className="flex flex-row mx-auto my-0 w-[80%] mt-[-200px] z-10 absolute ml-44 rounded-lg ">
        <Temperature
          day={"Monday"}
          city={data.name}
          temp={data.main}
          temperature={"23  "}
          date={"oct 6"}
          data={data}
        />
          {arrayTemp.map((item) => {
            return (
              <TempModel2
                today={item.today}
                temp1={item.temp1}
                temp2={item.temp2}
                icon={item.icon}
                bgColorh={item.bgColorh}
                bgColorb={item.bgColorb}
              />
            );
          })}
        </div>
      </div>
  );
};
export default Header;
