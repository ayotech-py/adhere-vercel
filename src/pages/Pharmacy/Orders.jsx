import React, { useState } from "react";
import "./Pharmacy.css";
import "./Orders.css";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { GridCard } from "../../components/GridCard/GridCard";
import pharmaIcon from "../../images/pharma.png";
import { Prescription } from "../../components/Prescription/Prescription";
import { TopNavigation } from "../../components/TopNavigation/TopNavigation";
import CustomButton from "../../components/Button/CustomButton";

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
import PressableButton from "../../components/Button/PressableButton";

export const Orders = () => {
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

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const [checkout, setCheckout] = useState(true);

  return (
    <div className="pharmacy">
      <div className="heading mobile">
        <TopNavigation
          link={"/pharmacy/view-prescriptions"}
          title="My Prescriptions"
        />
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
        <div className="middle-profile">
          <div className={"middle-result-card"}>
            <div className="result-profile-image">
              <img
                src={doctorImage}
                width={"66px"}
                height={"66px"}
                alt=""
                srcset=""
              />
            </div>
            <div className={"result-details"}>
              <div className={"result-profile-info"}>
                <h3>
                  Pharmablaze Pharmacy{" "}
                  <span
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <img
                      src={tickIcon}
                      width={"15px"}
                      height={"15px"}
                      alt=""
                      srcset=""
                    />
                  </span>
                </h3>
                <p>No. 264 Edet Akpan Ave., Uyo.</p>
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
            </div>
          </div>
          <div className="view-profile-button">
            <div className="left-button">
              <CustomButton text={"View profile"} />
            </div>
          </div>
        </div>
        <div className="middle-profile">
          <div className="prescription-order">
            <h3>Prescription Order</h3>
            <div className="prescribed-drugs">
              <div className="drug">
                <p>Lisinopril</p>
                <p>
                  ₦1,000 <span>(2)</span>
                </p>
              </div>
              <div className="drug">
                <p>Amoxicillin</p>
                <p>
                  ₦2,000 <span>(4)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="middle-profile"
          style={{ display: checkout ? "flex" : "none" }}
        >
          <div className="prescription-order">
            <h3>Deliver details</h3>
            <div className="prescribed-drugs">
              <select value={selectedOption} onChange={handleChange}>
                <option value="Home delivery">Home delivery</option>
                <option value="Home delivery">Pickup</option>
              </select>
            </div>
          </div>
          <div className="prescription-order">
            <div className="prescribed-drugs">
              <p>Enter delivery address</p>
              <input type="text" placeholder="Enter here" />
            </div>
          </div>
          <div className="prescription-order">
            <div className="prescribed-drugs">
              <p>Choose city</p>
              <select value={selectedOption} onChange={handleChange}>
                <option value="" disabled>
                  Select
                </option>
                <option value="Home delivery">Oshodi, New York</option>
                <option value="Home delivery">Agege, Florida</option>
                <option value="Home delivery">Mushin, Washington DC</option>
              </select>
            </div>
          </div>
        </div>
        <div
          className="middle-profile"
          style={{ display: !checkout ? "flex" : "none" }}
        >
          <div className="prescription-order">
            <h3>Deliver at</h3>
            <div className="prescribed-drugs">
              <p>18th Floor Bull Plaza Marina, Uyo, Nigeria.</p>
              <Link to={""}>Change</Link>
            </div>
          </div>
        </div>
        <div className="middle-profile">
          <div className="prescription-order">
            <div className="prescribed-drugs">
              <div className="drug">
                <p>Sub Total</p>
                <p>₦3,000</p>
              </div>
              <div className="drug">
                <p>Delivery Charges</p>
                <p>₦500</p>
              </div>
              <div className="drug">
                <p>Service Charges</p>
                <p>₦200</p>
              </div>
              <div className="drug">
                <p>Amount Payable</p>
                <p>3,700</p>
              </div>
            </div>
          </div>
        </div>
        <div className="view-middle-button">
          <div className="middle-button">
            {checkout ? (
              <PressableButton
                text={checkout ? "Checkout >" : "Proceed to pay >"}
                onPress={() => setCheckout(false)}
              />
            ) : (
              <CustomButton
                text={checkout ? "Checkout >" : "Proceed to pay >"}
                link={"/pharmacy/success"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
