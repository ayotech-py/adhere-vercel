import React from "react";
import "./Prescription.css";
import doctorImage from "../../images/badge-image.jpg";
import { Link } from "react-router-dom";

export const Prescription = ({
  medication,
  dosage,
  date,
  instruction,
  note,
}) => {
  return (
    <div className="prescription-details" style={{ display: "flex" }}>
      <div className="appt-hightlight">
        <p>
          <span>Medication Name:</span> {medication}
        </p>
        <p>
          <span>Dosage:</span> {dosage}
        </p>
        <p>
          <span>Prescribed On:</span> {date}
        </p>
        <p>
          <span>Instructions:</span> {instruction}
        </p>
        <p>
          <span>Notes:</span> {note}
        </p>
      </div>
    </div>
  );
};
