import React, { useState } from "react";
import "./Pharmacy.css";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { GridCard } from "../../components/GridCard/GridCard";
import pharmaIcon from "../../images/pharma.png";
import { Prescription } from "../../components/Prescription/Prescription";

import { ReactComponent as HomeIcon } from "../../images/home.svg";

import { ReactComponent as RecordIcon } from "../../images/documentrecord.svg";
import { ReactComponent as DrugsIcon } from "../../images/drugs.svg";
import { ReactComponent as CallSolidIcon } from "../../images/call-solid.svg";
import { ReactComponent as MessageSolidIcon } from "../../images/message-solid.svg";
import { ReactComponent as SettingIcon } from "../../images/setting.svg";

import longLeftIcon from "../../images/long-left-arrow.png";
import starIcon from "../../images/star.png";

import tip1Image from "../../images/tip1.png";
import tip2Image from "../../images/tip2.png";
import tip3Image from "../../images/tip3.png";
import tip4Image from "../../images/tip4.png";

import doctorImage from "../../images/badge-image.jpg";
import tickIcon from "../../images/green-tick.png";

import dentistIcon from "../../images/dentist.png";
import dermaIcon from "../../images/derma.png";
import cardioIcon from "../../images/cardio.png";
import neuroIcon from "../../images/neurologist.png";
import psychiIcon from "../../images/psychatrist.png";
import surgeonIcon from "../../images/surgeun.png";
import otherIcon from "../../images/others.png";
import searchIcon from "../../images/home-search.png";
import { specialCharMap } from "@testing-library/user-event/dist/keyboard";

export const Pharmacy = () => {
  const images = [tip1Image, tip2Image, tip3Image, tip4Image];
  const [searchView, setSearchView] = useState(false);
  const gridView = true;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchView(true);
    }
  };

  const pharmList = [
    { label: "View My Drug Prescriptions", icon: RecordIcon },
    { label: "View My Drug Prescriptions", icon: SettingIcon },
    {
      label: "Get your over the counter medications in pharmacies near you",
      icon: DrugsIcon,
    },
    { label: "Consult a pharmacist", icon: MessageSolidIcon },
    { label: "Call a pharmacy", icon: CallSolidIcon },
  ];
  const searchResultList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    console.log("width", width);
    const index = Math.round(scrollLeft / width);
    setCurrentIndex(index);
  };

  return (
    <div className="pharmacy">
      <div className="left">
        <div className="heading">
          <h3>Pharmacy</h3>
        </div>
        <div className="pharmacy-list desktop">
          {pharmList.map((obj, index) => (
            <Card
              label={obj.label}
              icon={<obj.icon />}
              link={"/pharmacy/view-prescriptions"}
            />
          ))}
        </div>
      </div>
      <div className="middle">
        <div>
          <div className="home-user-name">
            <p>
              Hi Veronica! <span>PHN-2024-0321-001</span>
            </p>
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
        </div>
        <section>
          <div className="pharmacy-list mobile">
            {pharmList.map((obj, index) => (
              <Card label={obj.label} icon={<obj.icon />} />
            ))}
          </div>
        </section>
        <section className="pharmacy-outlets">
          <div className="title">
            <h3>Verified Pharmacies</h3>
            <p>See all</p>
          </div>
          <div className="pharmacy-outlet-list">
            {specialistList.map((obj, index) => (
              <GridCard
                name={"RootCare Pharmatical"}
                image={pharmaIcon}
                address={"89 Obio imo str., just by Kilimanjaro Uyo"}
              />
            ))}
          </div>
        </section>
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
          <div className="specialist">
            <div className="title">
              <h3>Shop by category</h3>
              <p>See all</p>
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
        </section>
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
      </div>
      {/* <div className="right">
        <div className="carousel-container">
          <div className="tips-heading">
            <h3>Tips for you</h3>
          </div>
          <div className="carousel">
            {images.map((image, index) => (
              <div key={index} className="carousel-item">
                <img src={image} alt={`Tip ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};
