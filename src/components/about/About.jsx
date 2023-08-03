import React from "react";
import "./about.css";
import aboutImg from "../../assets/about img.png";
const About = () => {
  return (
    <div className="about-container">
      <img src={aboutImg} />
      <h2 className="about-title">
        Don't squeeze in a sedan when you could relax in a van.
      </h2>
      <div className="txt-container">
        <p className="about-txt">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-foot">
        <p>Your destination is waiting. Your van is ready.</p>
        <button className="about-btn">Explore our vans</button>
      </div>
    </div>
  );
};

export default About;
