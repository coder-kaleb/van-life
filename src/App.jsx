import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import Home from "./components/home/Home.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/vans" element={<Vans />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
