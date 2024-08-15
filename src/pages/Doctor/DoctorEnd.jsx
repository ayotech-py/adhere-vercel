import React from "react";
import endCallIcon from "../../images/call-end.png";
import "./DoctorEnd.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import doctorImage from "../../images/badge-image.jpg";
import CustomButton from "../../components/Button/CustomButton";

export const DoctorEnd = () => {
  return (
    <div className="doctor-end">
      <div className="top-part">
        <div className="call-icon">
          <img
            width={"110%"}
            height={"100%"}
            src={endCallIcon}
            alt=""
            srcset=""
          />
        </div>
        <h3>The consultation session has ended</h3>
        <p>Recordings have been saved in Records</p>
      </div>
      <ProfileCard
        index={1}
        doctorImage={doctorImage}
        imageSize={"115px"}
        name={"Dr. Henry Daniel"}
        specialization={"General Practioner"}
      />
      <div className="bottom-part">
        <CustomButton text={"Back to home"} color="white" link={"/"} />
        <CustomButton text={"Give feedback"} link={"/doctor/feedback"} />
      </div>
    </div>
  );
};
