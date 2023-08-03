import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-van-link">
        <Link to="/">#VANLIFE</Link>
      </div>
      <div className="about-vans-link">
        <Link to="/about">About</Link>
        <Link href="/vans">Van</Link>
      </div>
    </header>
  );
};

export default Header;
