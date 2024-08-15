import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import searchIcon from "../../images/home-search.png";

import gpIcon from "../../images/gp.png";
import therapistIcon from "../../images/therapist.png";
import careIcon from "../../images/care.png";

import dentistIcon from "../../images/dentist.png";
import dermaIcon from "../../images/derma.png";
import cardioIcon from "../../images/cardio.png";
import neuroIcon from "../../images/neurologist.png";
import psychiIcon from "../../images/psychatrist.png";
import surgeonIcon from "../../images/surgeun.png";
import otherIcon from "../../images/others.png";

import tip1Image from "../../images/tip1.png";
import tip2Image from "../../images/tip2.png";
import tip3Image from "../../images/tip3.png";
import tip4Image from "../../images/tip4.png";

import doctorImage from "../../images/badge-image.jpg";
import tickIcon from "../../images/green-tick.png";
import aMessageIcon from "../../images/a-message.png";
import callIcon from "../../images/call.png";
import scheduleIcon from "../../images/schedule.png";

import recordIcon from "../../images/documentrecord.png";
import drugsIcon from "../../images/drugs.png";
import callSolidIcon from "../../images/call-solid.png";
import inboxIcon from "../../images/direct-inbox.png";
import messageSolidIcon from "../../images/message-solid.png";

import leftIcon from "../../images/left-arrow.png";

import longLeftIcon from "../../images/long-left-arrow.png";
import starIcon from "../../images/star.png";

export default function Home() {
  const [searchView, setSearchView] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchView(true);
    }
  };

  const searchResultList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const appointmentList = [
    {
      label: "Check your health record and care plan",
      icon: recordIcon,
    },
    {
      label: "Request repeat prescription",
      icon: drugsIcon,
    },
    {
      label: "Check my inbox",
      icon: inboxIcon,
    },
    {
      label: "Check my laboratory appointments and test results",
      icon: messageSolidIcon,
    },
    {
      label: "Call emergency number 911",
      icon: callSolidIcon,
    },
  ];

  const specialistList = [
    {
      icon: dentistIcon,
      label: "Dentist",
    },
    {
      icon: dermaIcon,
      label: "Dermatologist",
    },
    {
      icon: cardioIcon,
      label: "Cardiologist",
    },
    {
      icon: neuroIcon,
      label: "Neurologist",
    },
    {
      icon: psychiIcon,
      label: "Psychiatrists",
    },
    {
      icon: surgeonIcon,
      label: "Surgeon",
    },
    {
      icon: otherIcon,
      label: "Others",
    },
  ];

  const images = [tip1Image, tip2Image, tip3Image, tip4Image];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    console.log("width", width);
    const index = Math.round(scrollLeft / width);
    setCurrentIndex(index);
  };
  return (
    <div className="home">
      <main>
        <div className="home-user-name">
          <p>
            Hi Veronica! <span>PHN-2024-0321-001</span>
          </p>
        </div>
        <div className="home-description">
          <h3>Feeling a litle sick?</h3>
          <p>Let’s find you a doctor, choose a category</p>
        </div>
        <div className="home-search">
          <input
            type="text"
            placeholder="Search doctor, feeling..."
            onKeyPress={handleKeyPress}
          />
          <div className="icon">
            <img src={searchIcon} alt="" srcset="" />
          </div>
        </div>
        <section
          className="search-result"
          style={{ display: searchView ? "flex" : "none" }}
        >
          <div className="search-heading">
            <div className="result-no">
              <p>18 result found</p>
            </div>
            <div className="map-view">
              <p>View on map</p>
            </div>
          </div>
          <div className="result-list">
            {searchResultList.map((obj, index) => (
              <div key={index} className="result-card">
                <div className="result-profile-image">
                  <img src={doctorImage} alt="" srcset="" />
                </div>
                <div className="result-details">
                  <div className="result-profile-info">
                    <h3>
                      Dr. Sandra Ufuoma{" "}
                      <span>
                        <img
                          src={tickIcon}
                          width={"15px"}
                          height={"15px"}
                          alt=""
                          srcset=""
                        />
                      </span>
                    </h3>
                    <p>Therapist</p>
                    <div className="result-rating">
                      <p>
                        <span>
                          <img
                            src={starIcon}
                            width={"10px"}
                            height={"10px"}
                            alt=""
                          />
                          4.4
                        </span>{" "}
                        (33 Reviews)
                      </p>
                    </div>
                  </div>
                  <Link
                    to={"complain"}
                    className="more-arrow"
                    style={{ padding: "5px" }}
                  >
                    <img src={longLeftIcon} alt="" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          className="home-specialist-tip-container"
          style={{ display: searchView ? "none" : "flex" }}
        >
          <section className="special-section">
            <div className="service-list">
              <div className="service">
                <img src={gpIcon} alt="" />
                <p>G.P.</p>
              </div>
              <div className="service">
                <img src={therapistIcon} alt="" />
                <p>Therapist</p>
              </div>
              <div className="service">
                <img src={careIcon} alt="" />
                <p>Care Giver</p>
              </div>
            </div>
          </section>
          <div className="specialist">
            <div className="specialist-section">
              <h3>Specialist/Consultant</h3>
            </div>
            <div className="service-list">
              {specialistList.map((specialist, index) => (
                <div className="service">
                  <img src={specialist.icon} alt="" />
                  <p>{specialist.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-container">
            <div className="tips-heading">
              <h3>Tips for you</h3>
            </div>
            <div className="carousel" onScroll={handleScroll}>
              {images.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img src={image} alt={`Tip ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="carousel-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <aside className={searchView ? "disable-aside" : "show-aside"}>
        <div className="upcoming-appointment">
          <div className="heading">
            <h4>Upcoming Events</h4>
            <p>See all</p>
          </div>
          <br />
          <div className="card-background">
            <div className="appointment-card">
              <div className="appointment-image">
                <img src={doctorImage} alt="" />
              </div>
              <div className="appointment-profile">
                <h3>
                  Dr. Sandra Ufuoma{" "}
                  <span>
                    <img
                      src={tickIcon}
                      width={"20px"}
                      height={"20px"}
                      alt=""
                      srcset=""
                    />
                  </span>
                </h3>
                <p>Therapist</p>
              </div>
            </div>
            <div className="call-message">
              <img
                src={aMessageIcon}
                width={"38px"}
                height={"38px"}
                alt=""
                srcset=""
              />
              <img
                src={callIcon}
                width={"38px"}
                height={"38px"}
                alt=""
                srcset=""
              />
            </div>
            <div className="divide-line"></div>
            <div className="schedule-container">
              <img
                src={scheduleIcon}
                width={"18px"}
                height={"18px"}
                alt=""
                srcset=""
              />
              <p>12 Mar 2024 • 8:00am - 10:00am</p>
            </div>
          </div>
        </div>
        <div className="appointment-list">
          {appointmentList.map((obj, index) => (
            <div key={index} className="appointment-info-card">
              <div className="icon-cover">
                <div className="appointment-icon">
                  <img src={obj.icon} alt="" srcset="" />
                </div>
              </div>
              <div className="app-details">
                <p>{obj.label}</p>
                <img src={leftIcon} alt="" srcset="" />
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
