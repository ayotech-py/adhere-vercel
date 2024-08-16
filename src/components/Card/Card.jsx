import React from "react";
import { Link } from "react-router-dom";
import leftIcon from "../../images/left-arrow.png";

export const Card = ({ icon, label, link, selected }) => {
  return (
    <Link
      to={link}
      className={
        selected
          ? "appointment-info-card card-selected-dark"
          : "appointment-info-card"
      }
    >
      <div className="icon-cover">
        <div
          className={
            selected
              ? "card-selected-bright appointment-icon"
              : "appointment-icon"
          }
        >
          {icon}
        </div>
      </div>
      <div className="app-details">
        <p
          style={{
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: 500,
            color: selected ? "#fff" : "",
          }}
        >
          {label}
        </p>
        <img src={leftIcon} alt="" srcset="" />
      </div>
    </Link>
  );
};
