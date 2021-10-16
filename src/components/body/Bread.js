import React from "react";
import "./Bread.css";

const Bread = () => {
  return (
    <div className="container">
      <div className="bread">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              News
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Program YESS Tepat Untuk Tanah Laut
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Bread;
