import React from "react";
import "./InputOptions.css";

const InputOptions = ({ Icon, title, color }) => {
  return (
    <div className="inputoption">
      <Icon style={{ color: color }} className="inputoption__icon" />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOptions;
