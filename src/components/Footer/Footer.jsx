import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import logoWords from "../../images/logo-word.png";
import { ReactComponent as DoctorIcon } from "../../images/doctor.svg";
import { ReactComponent as ApptsIcon } from "../../images/appt.svg";
import { ReactComponent as PharmIcon } from "../../images/pharm.svg";
import { ReactComponent as ListIcon } from "../../images/list.svg";
import { ReactComponent as HomeIcon } from "../../images/home.svg";

export const Footer = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="Footer">
      <div className="desktop-nav-btn">
        <Link to={"/"} className="nav-btn" onClick={() => setActiveTab(0)}>
          <HomeIcon
            color={activeTab === 0 ? "#00AE9A" : "#9C9C9C"}
            style={{ width: "20px", height: "20px" }}
          />
          <p
            className="nav-label"
            style={{ color: activeTab === 0 ? "#00AE9A" : "#9C9C9C" }}
          >
            Home
          </p>
        </Link>
        <Link
          to={"/doctor"}
          className="nav-btn"
          onClick={() => setActiveTab(1)}
        >
          <DoctorIcon
            color={activeTab === 1 ? "#00AE9A" : "#9C9C9C"}
            style={{ width: "20px", height: "20px" }}
          />
          <p
            className="nav-label"
            style={{ color: activeTab === 1 ? "#00AE9A" : "#9C9C9C" }}
          >
            Doctors
          </p>
        </Link>
        <Link
          to={"/appointments"}
          className="nav-btn"
          onClick={() => setActiveTab(1)}
        >
          <ApptsIcon
            color={activeTab === 2 ? "#00AE9A" : "#9C9C9C"}
            style={{ width: "20px", height: "20px" }}
          />
          <p
            className="nav-label"
            style={{ color: activeTab === 2 ? "#00AE9A" : "#9C9C9C" }}
          >
            Appts.
          </p>
        </Link>
        <Link to={"doctor"} className="nav-btn" onClick={() => setActiveTab(1)}>
          <PharmIcon
            color={activeTab === 3 ? "#00AE9A" : "#9C9C9C"}
            style={{ width: "20px", height: "20px" }}
          />
          <p
            className="nav-label"
            style={{ color: activeTab === 3 ? "#00AE9A" : "#9C9C9C" }}
          >
            Pharm.
          </p>
        </Link>
        <Link to={"doctor"} className="nav-btn" onClick={() => setActiveTab(1)}>
          <ListIcon
            color={activeTab === 4 ? "#00AE9A" : "#9C9C9C"}
            style={{ width: "20px", height: "20px" }}
          />
          <p
            className="nav-label"
            style={{ color: activeTab === 4 ? "#00AE9A" : "#9C9C9C" }}
          >
            Lab
          </p>
        </Link>
      </div>
    </div>
  );
};
