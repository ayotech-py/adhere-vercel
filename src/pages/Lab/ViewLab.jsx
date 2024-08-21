import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { GridCard } from "../../components/GridCard/GridCard";
import pharmaIcon from "../../images/pharma.png";
import { Prescription } from "../../components/Prescription/Prescription";
import { TopNavigation } from "../../components/TopNavigation/TopNavigation";

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

export const ViewLab = () => {
  const images = [tip1Image, tip2Image, tip3Image, tip4Image];
  const [searchView, setSearchView] = useState(false);
  const gridView = true;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchView(true);
    }
  };

  const pharmList = [
    { label: "View my lab investigations", icon: RecordIcon },
    { label: "View verified laboratories", icon: SettingIcon },
    {
      label: "Book a lab investigation in a laboratory near you",
      icon: DrugsIcon,
    },
    { label: "Consult a lab scientist", icon: MessageSolidIcon },
    { label: "Call a laboratory", icon: CallSolidIcon },
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
      <div className="heading mobile">
        <TopNavigation link={"/lab"} title="Laboratory" />
      </div>
      <div className="left">
        <div className="heading">
          <TopNavigation link={"/lab"} title="Laboratory" />
        </div>
        <div className="pharmacy-list desktop">
          {pharmList.map((obj, index) => (
            <Card
              key={index}
              selected={index === 0 ? true : false}
              label={obj.label}
              icon={<obj.icon color={index === 0 ? "#00AE9A" : "#E2E6E9"} />}
            />
          ))}
        </div>
      </div>
      <div className="middle">
        <div className="prescription-heading">
          <h3>Laboratory Investigation Details</h3>
        </div>
        <div className="prescription-container">
          <div className="prescribes">
            <div className="doctor-info">
              <div className="left-side">
                <div className="image">
                  <img src={doctorImage} alt="" />
                </div>
                <p>Bela Medical Laboratories Facilities</p>
              </div>
              <Link to={""}>View lab</Link>
            </div>
            <div className="prescription-details" style={{ display: "flex" }}>
              <div className="appt-hightlight">
                <p>
                  <span>Investigation:</span> Liver Function Test (LFT)
                </p>
                <p>
                  <span>Test recommended by:</span> Dr. John Smith
                </p>
                <p>
                  <span>Date of lab appointment:</span> July 24, 2024
                </p>
                <p>
                  <span>Time of lab appointment:</span> 2:00pm
                </p>
                <p>
                  <span>Located at:</span> Liver Function Test (LFT)
                </p>
                <p>
                  <span>Overview:</span> <br />
                  This blood test is used to assess the overall health of your
                  liver and detect any liver damage or disease. It measures
                  various enzymes, proteins, and substances produced or
                  processed by the liver.
                  <span> Parameters included:</span> <br />
                  Alanine Aminotransferase (ALT) <br />
                  Aspartate Aminotransferase (AST) <br />
                  Alkaline Phosphatase (ALP) <br />
                  Bilirubin (Total and Direct) <br />
                  Albumin <br />
                  Total Protein <br />
                  Gamma-Glutamyl Transferase (GGT) <br />
                  Prothrombin Time (PT) <br />
                  <span>Preparation:</span> <br />
                  Fasting time: 8-12 hours <br />
                  Sample collection: 1 <br />
                  Report time: 1 <br />
                  Age range: 5 - 99 years <br />
                  <span>Additional information:</span> <br />
                  If you have any questions about your test results, please
                  contact your healthcare provider through the Adhere app.
                </p>
              </div>
            </div>
            <div className="date">
              <p>15/06/24 • 03:43pm</p>
              <span>
                <p>See all</p>
              </span>
            </div>
          </div>
          <div className="prescribes">
            <div className="doctor-info">
              <div className="left-side">
                <div className="image">
                  <img src={doctorImage} alt="" />
                </div>
                <p>Bela Medical Laboratories Facilities</p>
              </div>
              <Link to={"/lab/orders"}>View lab</Link>
            </div>
            <div className="prescription-details" style={{ display: "flex" }}>
              <div className="appt-hightlight">
                <p>
                  <span>Investigation:</span> Liver Function Test (LFT)
                </p>
                <p>
                  <span>Test recommended by:</span> Dr. John Smith
                </p>
                <p>
                  <span>Date of lab appointment:</span> July 24, 2024
                </p>
                <p>
                  <span>Time of lab appointment:</span> 2:00pm
                </p>
                <p>
                  <span>Located at:</span> Liver Function Test (LFT)
                </p>
                <p>
                  <span>Overview:</span> <br />
                  This blood test is used to assess the overall health of your
                  liver and detect any liver damage or disease. It measures
                  various enzymes, proteins, and substances produced or
                  processed by the liver.
                  <span> Parameters included:</span> <br />
                  Alanine Aminotransferase (ALT) <br />
                  Aspartate Aminotransferase (AST) <br />
                  Alkaline Phosphatase (ALP) <br />
                  Bilirubin (Total and Direct) <br />
                  Albumin <br />
                  Total Protein <br />
                  Gamma-Glutamyl Transferase (GGT) <br />
                  Prothrombin Time (PT) <br />
                  <span>Preparation:</span> <br />
                  Fasting time: 8-12 hours <br />
                  Sample collection: 1 <br />
                  Report time: 1 <br />
                  Age range: 5 - 99 years <br />
                  <span>Additional information:</span> <br />
                  If you have any questions about your test results, please
                  contact your healthcare provider through the Adhere app.
                </p>
              </div>
            </div>
            <div className="date">
              <p>15/06/24 • 03:43pm</p>
              <span>
                <p>See all</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
