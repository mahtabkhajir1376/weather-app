import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../screen/Home'
import Contact from "../screen/Contact";
import LiveCamera from '../screen/LiveCamera'
import News from '../screen/News'
import Photos from '../screen/Photos'
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Root = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livecamera" element={<LiveCamera />} />
        <Route path="/news" element={<News />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Root;