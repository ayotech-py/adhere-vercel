import React from "react";
import "./ProfileCard.css";

import tickIcon from "../../images/green-tick.png";
import starIcon from "../../images/star.png";

const ProfileCard = ({
  index,
  doctorImage,
  imageSize,
  name,
  specialization,
  reviews,
  ratings,
}) => {
  return (
    <div key={index} className="profile-card">
      <div className="image">
        <img
          src={doctorImage}
          width={imageSize}
          height={imageSize}
          alt=""
          srcset=""
        />
      </div>
      <div className="info">
        <h3>
          {name}{" "}
          <span
            style={{
              display: "inline-block",
            }}
          >
            <img
              src={tickIcon}
              width={"15px"}
              height={"16px"}
              alt=""
              srcset=""
            />
          </span>
        </h3>
        <p>{specialization}</p>
        {reviews && (
          <div className="rating">
            <p>
              <span>
                <img src={starIcon} width={"10px"} height={"10px"} alt="" />
                {reviews}
              </span>{" "}
              {ratings}33 Reviews
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
