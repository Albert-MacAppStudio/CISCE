import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-content">
        <div className="spinner"></div>
        <p>loading please wait</p>
      </div>
    </div>
  );
};

export default Spinner;
