import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./Header.css";

import logoWords from "../../images/logo-word.png";
import { ReactComponent as DoctorIcon } from "../../images/doctor.svg";
import { ReactComponent as ApptsIcon } from "../../images/appt.svg";
import { ReactComponent as PharmIcon } from "../../images/pharm.svg";
import { ReactComponent as ListIcon } from "../../images/list.svg";
import { ReactComponent as HomeIcon } from "../../images/home.svg";

import searchIcon from "../../images/search.png";
import messageIcon from "../../images/message.png";
import profileImage from "../../images/image.jpg";
import copyIcon from "../../images/copy.png";
import arrowIcon from "../../images/arrow.png";

import { Link } from "react-router-dom";

export default function Header() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Group icon" srcset="" />
        <img src={logoWords} alt="Group icon" srcset="" />
      </div>
      <div className="desktop-navigation">
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
            onClick={() => setActiveTab(2)}
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
          <Link
            to={"/pharmacy"}
            className="nav-btn"
            onClick={() => setActiveTab(3)}
          >
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
          <Link
            to={"doctor"}
            className="nav-btn"
            onClick={() => setActiveTab(1)}
          >
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
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <img src={searchIcon} alt="" srcset="" />
        </div>
      </div>
      <div className="user-profile-badge">
        <div className="message-box">
          <img
            src={messageIcon}
            width={"25px"}
            height={"20px"}
            alt=""
            srcset=""
          />
        </div>
        <div className="profile-image">
          <img
            src={profileImage}
            width={"100%"}
            height={"100%"}
            alt=""
            srcset=""
          />
        </div>
        <div className="user-details">
          <p>Sarah Veronica</p>
          <div className="user-id-copy">
            <p>PHN-2024-0321-001</p>
            <img src={copyIcon} alt="" />
          </div>
        </div>
        <div className="arrow-down">
          <img src={arrowIcon} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}
