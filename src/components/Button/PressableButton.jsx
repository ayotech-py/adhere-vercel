import React from "react";
import "./CustomButton.css";
import callIcon from "../../images/white-call.png";
import { Link } from "react-router-dom";

const PressableButton = ({ text, icon, color = "dark", onPress }) => {
  return (
    <div
      onClick={() => {
        onPress();
      }}
      className="custom-button"
      style={{ background: color === "dark" ? "#00ae9a" : "#FFF" }}
    >
      {icon && <img src={icon} alt="" srcset="" />}
      <p style={{ color: color === "dark" ? "#FFF" : "#00ae9a" }}>{text}</p>
    </div>
  );
};

export default PressableButton;
