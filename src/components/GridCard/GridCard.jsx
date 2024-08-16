import React from "react";
import { Link } from "react-router-dom";
import "./GridCard.css";
import doctorImage from "../../images/badge-image.jpg";
import tickIcon from "../../images/green-tick.png";
import starIcon from "../../images/star.png";

export const GridCard = ({ image, name, address }) => {
  const gridView = true;
  return (
    <Link to={"profile"} className="grid-card">
      <div className={"result-card-grid"}>
        <div className="result-profile-image">
          <img src={image} width={"60px"} height={"60px"} alt="" srcset="" />
          <span style={{ display: "block" }}>
            <img
              src={tickIcon}
              width={"15px"}
              height={"15px"}
              alt=""
              srcset=""
            />
          </span>
        </div>
        <div>
          <div className={"result-profile-info-grid"}>
            <h3>{name}</h3>
            <p>{address}</p>
            <div className="result-rating">
              <p>
                <span>
                  <img src={starIcon} width={"10px"} height={"10px"} alt="" />
                  4.4
                </span>{" "}
                (33 Reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
