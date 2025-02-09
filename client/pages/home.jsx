import React, { useEffect, useState } from "react";
import FirstSection from "../components/firstSection/firstSection";
import SecondSection from "../components/secondSection/secondSection";
import "./css/home.css";

const Home = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  // Switch between sections every 5 seconds (change time as needed)
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % 2); // Toggle between 0 and 1
    }, 5000); // Wait for 5 seconds before scrolling

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-content" style={{ transform: `translateX(-${scrollIndex * 100}vw)` }}>
        <FirstSection />
        <SecondSection />
      </div>
    </div>
  );
};

export default Home;
