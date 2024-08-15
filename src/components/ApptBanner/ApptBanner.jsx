import React from "react";

import tickIcon from "../../images/green-tick.png";
import aMessageIcon from "../../images/a-message.png";
import callIcon from "../../images/call.png";
import scheduleIcon from "../../images/schedule.png";

export const ApptBanner = ({ name, specialization, image, onPress }) => {
  return (
    <div
      className="card-background"
      style={{ cursor: "pointer" }}
      onClick={onPress}
    >
      <div className="appointment-card">
        <div className="appointment-image">
          <img src={image} alt="" />
        </div>
        <div className="appointment-profile">
          <h3>
            {name}{" "}
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
          <p>{specialization}</p>
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
        <img src={callIcon} width={"38px"} height={"38px"} alt="" srcset="" />
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
  );
};
