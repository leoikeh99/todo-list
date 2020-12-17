import React, { useEffect, useState } from "react";
import "./overview.css";
import moonIcon from "../../images/icon-moon.svg";
import sunIcon from "../../images/icon-sun.svg";
import image1 from "../../images/bg-desktop-light.jpg";
import image2 from "../../images/bg-desktop-dark.jpg";

const Overview = ({ title }) => {
  const [mode, setMode] = useState(1);

  const trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 600);
  };

  useEffect(() => {
    trans();
    if (mode === 1) {
      document.documentElement.setAttribute("theme", "light");
    }
    if (mode === 2) {
      document.documentElement.setAttribute("theme", "dark");
    }
  }, [mode]);
  return (
    <div className="overview">
      <div className="topImage">
        <img src={mode === 1 ? image1 : image2} alt="" />
        <div className="bottomBg"></div>
      </div>

      <h1 className="overview__header">{title}</h1>
      <div className="overview__image">
        {mode === 1 ? (
          <img src={moonIcon} alt="moon icon" onClick={() => setMode(2)} />
        ) : (
          <img src={sunIcon} alt="sun icon" onClick={() => setMode(1)} />
        )}
      </div>
    </div>
  );
};

export default Overview;
