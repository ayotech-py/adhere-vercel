import React from "react";
import "./Prescription.css";
import doctorImage from "../../images/badge-image.jpg";
import { Link } from "react-router-dom";

export const Prescription = () => {
  return (
    <div className="prescription-details" style={{ display: "flex" }}>
      <div className="appt-hightlight">
        <p>
          <span>Medication Name:</span> Pediatrician
        </p>
        <p>
          <span>Dosage:</span> July 21, 2024
        </p>
        <p>
          <span>Prescribed On:</span> 10:00AM
        </p>
        <p>
          <span>Prescribed On:</span> Video Call
        </p>
        <p>
          <span>Instructions:</span> Video Call
        </p>
        <p>
          <span>Notes:</span> Video Call
        </p>
      </div>
    </div>
  );
};
