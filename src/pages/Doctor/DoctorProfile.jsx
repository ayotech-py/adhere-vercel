import React, { useState } from "react";
import "./DoctorProfile.css";
import { Link } from "react-router-dom";

import gridIcon from "../../images/grid.png";
import sortIcon from "../../images/sort.png";
import searchIcon from "../../images/home-search.png";
import listIcon from "../../images/listview.png";

import doctorImage from "../../images/badge-image.jpg";

import ProfileCard from "../../components/ProfileCard/ProfileCard";

import patientIcon from "../../images/DoctorProfileImages/patient.png";
import experienceIcon from "../../images/DoctorProfileImages/experience.png";
import ratingIcon from "../../images/DoctorProfileImages/rating.png";

import CustomButton from "../../components/Button/CustomButton";

import callIcon from "../../images/white-call.png";
import chatIcon from "../../images/green-chat.png";
import videoChatIcon from "../../images/video-call.png";

export default function DoctorProfile() {
  const [gridView, setGridView] = useState(false);
  const searchResultList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const profileInfo = [
    {
      icon: patientIcon,
      value: "20+",
      label: "Patients",
    },
    {
      icon: experienceIcon,
      value: "6yrs",
      label: "Experience",
    },
    {
      icon: ratingIcon,
      value: "4.5",
      label: "Ratings",
    },
  ];

  return (
    <div className="doctor-profile-page">
      <aside>
        <div className="page-title">
          <h3>Doctor</h3>
          {gridView ? (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setGridView(false)}
            >
              <img src={listIcon} alt="" />
            </div>
          ) : (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setGridView(true)}
            >
              <img src={gridIcon} alt="" />
            </div>
          )}
        </div>
        <div className="home-search">
          <input type="text" placeholder="Search doctor, feeling..." />
          <div className="icon">
            <img src={searchIcon} alt="" srcset="" />
          </div>
          <div className="icon2">
            <img src={sortIcon} alt="" srcset="" />
          </div>
        </div>
      </aside>
      <main>
        <div className="profile">
          <ProfileCard
            index={1}
            doctorImage={doctorImage}
            imageSize={"115px"}
            name={"Dr. Henry Daniel"}
            specialization={"General Practioner"}
          />
          <div className="info">
            {profileInfo.map((obj, index) => (
              <div className="info-box">
                <img src={obj.icon} alt="" />
                <h2>{obj.value}</h2>
                <p>{obj.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="profile-description">
          <div>
            <h2>About Doctor</h2>
            <p>
              Dr. Johnson Meshach is a top specialist at Domingo Specialist
              Hospital at Uyo. He has achieved several awards and recognition
              for his contribution and service in his own field. He is available
              for private consultation.
            </p>
          </div>
          <div>
            <h2>Working time</h2>
            <p>Mon - Sat (08:30am - 9:00pm)</p>
          </div>
        </div>
        <div className="bottom-div">
          <div className="button-div">
            <CustomButton text={"Call"} icon={callIcon} />
            <CustomButton text={"Chat"} icon={chatIcon} color="white" />
          </div>
          <Link to={"/doctor/end-consultation"} className="video-chat-div">
            <img src={videoChatIcon} alt="" />
            <p>Start a Video Consultation</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
