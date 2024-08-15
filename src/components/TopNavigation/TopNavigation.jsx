import React from "react";
import "./TopNavigation.css";
import backIcon from "../../images/Close.png";
import { Link } from "react-router-dom";

export const TopNavigation = ({ title = "Give Feedback", link, onPress }) => {
  return (
    <Link to={link} onClick={onPress} className="top-navigation">
      <div className="nav-icon">
        <img src={backIcon} alt="" srcset="" />
      </div>
      <div className="nav-title">
        <p>{title}</p>
      </div>
    </Link>
  );
};
