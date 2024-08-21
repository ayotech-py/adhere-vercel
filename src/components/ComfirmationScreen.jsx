import React from "react";
import CustomButton from "./Button/CustomButton";
import successIcon from "../images/success.png";

export const ComfirmationScreen = () => {
  return (
    <div
      className="doctor-feedback"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="complain-success" style={{ display: "flex" }}>
        <img src={successIcon} alt="" />
        <h2>Payment Successful</h2>
        <p>
          Your order has been placed successfully. Your order is on its way.
        </p>
        <CustomButton text={"Go to home"} link={"/"} />
      </div>
    </div>
  );
};
