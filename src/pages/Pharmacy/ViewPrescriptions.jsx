import React, { useState } from "react";
import "./Pharmacy.css";
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

export const ViewPrescriptions = () => {
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
      <div className="heading mobile">
        <TopNavigation link={"/pharmacy"} title="My Prescriptions" />
      </div>
      <div className="left">
        <div className="heading">
          <TopNavigation link={"/pharmacy"} title="My Prescriptions" />
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
          <h3>Current Prescriptions</h3>
        </div>
        <div className="prescription-container">
          <div className="prescribes">
            <div className="doctor-info">
              <div className="left-side">
                <div className="image">
                  <img src={doctorImage} alt="" />
                </div>
                <p>Dr. Sandra Kharma</p>
              </div>
              <Link to={"/pharmacy/orders"}>View pharmacy</Link>
            </div>
            <Prescription
              medication={"Lisinopril"}
              dosage={"10 mg once daily"}
              date={"June 15, 2024"}
              instruction={
                "Take one tablet by mouth each morning with or without food"
              }
              note={"Monitor blood pressure regularly."}
            />
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
                <p>Dr. Sandra Kharma</p>
              </div>
              <Link to={"/pharmacy/orders"}>View pharmacy</Link>
            </div>
            <Prescription
              medication={"Lisinopril"}
              dosage={"10 mg once daily"}
              date={"June 15, 2024"}
              instruction={
                "Take one tablet by mouth each morning with or without food"
              }
              note={"Monitor blood pressure regularly."}
            />
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
