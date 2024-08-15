import React, { useState } from "react";
import "./HomeComplain.css";

import doctorImage from "../../images/badge-image.jpg";
import tickIcon from "../../images/green-tick.png";

import successIcon from "../../images/success.png";
import { Link } from "react-router-dom";

export default function HomeComplain() {
  const [sendState, setSendState] = useState(false);

  const sendComplaint = () => {
    setSendState(true);
  };

  return (
    <div className="complain">
      <div
        className="complain-card"
        style={{ display: sendState ? "none" : "flex" }}
      >
        <div className="profile">
          <div className="profile-image">
            <img src={doctorImage} alt="" />
          </div>
          <div className="profile-data">
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
          </div>
        </div>
        <div className="form-fields">
          <div className="input-field">
            <label htmlFor="about complain">
              What is your complaint today?
            </label>
            <input type="text" />
          </div>
          <div className="input-field">
            <label htmlFor="about complain">Symptoms start date </label>
            <input type="text" />
          </div>
          <div className="input-field">
            <label htmlFor="about complain">
              Any premeditation or self treatment?{" "}
            </label>
            <input type="text" />
          </div>
          <div className="input-field">
            <button onClick={sendComplaint}>Send</button>
          </div>
        </div>
      </div>
      <div
        className="complain-success"
        style={{ display: !sendState ? "none" : "flex" }}
      >
        <img src={successIcon} alt="" />
        <h2>Message Sent</h2>
        <p>Dr. Henry will have an appointment with you shortly</p>
        <Link to={"/"} className="input-field">
          <button>Go to home</button>
        </Link>
      </div>
    </div>
  );
}
