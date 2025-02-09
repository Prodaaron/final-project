import React from "react";
import { intro } from "./data/intro"; // Adjust the path as needed
import "./introSection.css";

const IntroSection = () => {
  return (
    <div className="intro-section">
      {intro.map((item) => (
        <div key={item.intro_id} className="intro-item">
          <div className="image-container">
            <img src={item.intro_image} alt="intro-image" className="intro-image" />
            <div className="intro-description">{item.intro_description}</div>
          </div>
          <h2>{item.intro_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default IntroSection;