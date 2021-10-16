import React from "react";
import "./TopLogo.css";
import Logo1 from "../../image/logo1.jpg";
import Logo2 from "../../image/logo2.jpg";

const TopLogo = () => {
  return (
    <div className="toplog">
      <div className="kiri">
        <img src={Logo2} className="logo2" alt="logo2" />
      </div>
      <div className="kanan">
        <img src={Logo1} className="logo1" alt="logo1" />
      </div>
    </div>
  );
};

export default TopLogo;
