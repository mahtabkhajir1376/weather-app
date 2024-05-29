import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-gray-900 text-white  flex flex-row justify-around items-center  w-full h-[180px]">
      <div className="flex flex-row justify-between items-center w-[12%]">
        <img src="public/logo.png" className=""/> 
        <div className="flex flex-col justify-center items-start">
        <a className=" text-xl mb-1 font-bold">Company name</a>
        <a >tagline goes here</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex w-[33%]">
        <ul className="flex flex-row justify-around items-center w-full px-1">
          <li className="text-xl  hover:border-blue-400 hover:border-[3px] hover:rounded-full hover:text-blue-400 px-7 py-1">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-xl  hover:border-blue-400 hover:border-[3px] hover:rounded-full hover:text-blue-400 px-7 py-1">
            <Link to={"/news"}>News</Link>
          </li>
          <li className="text-xl  hover:border-blue-400 hover:border-[3px] hover:rounded-full hover:text-blue-400 px-7 py-1">
            <Link to={"/livecamera"}>Live cameras</Link>
          </li>
          <li className="text-xl  hover:border-blue-400 hover:border-[3px] hover:rounded-full hover:text-blue-400 px-7 py-1">
            <Link to={"/photos"}>Photos</Link>
          </li>
          <li className="text-xl  hover:border-blue-400 hover:border-[3px] hover:rounded-full hover:text-blue-400 px-7 py-1">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    
    </div>
  );
};
export default Navbar;
