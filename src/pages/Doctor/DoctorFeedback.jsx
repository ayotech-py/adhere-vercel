import React, { useState } from "react";
import "./DoctorFeedback.css";
import { TopNavigation } from "../../components/TopNavigation/TopNavigation";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import doctorImage from "../../images/badge-image.jpg";
import ratingIcon from "../../images/rate.png";
import CustomButton from "../../components/Button/CustomButton";
import successIcon from "../../images/success.png";
import { Link } from "react-router-dom";
import PressableButton from "../../components/Button/PressableButton";

export const DoctorFeedback = () => {
  const [feedback, setFeedback] = useState({
    consultation: "",
    attention: "",
    time: "",
    confortable: "",
    consult_again: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback:", feedback);
  };
  const ratings = ["Very Poor", "Poor", "Fair", "Very Good", "Excellent"];
  const feedbacks = [
    {
      title: "Are you satisfied with your consultation?",
      tag: "consultation",
    },
    {
      title: "Do you feel the doctor paid attention to your complaints?",
      tag: "attention",
    },
    {
      title: "Did the doctor keep to time?",
      tag: "time",
    },
    {
      title: "⁠Did the doctor make you feel comfortable?",
      tag: "comfortable",
    },
    {
      title: "Would you like to consult with this doctor again?",
      tag: "consult_again",
    },
  ];

  const [sendState, setSendState] = useState(false);

  const sendComplaint = () => {
    setSendState(true);
    console.log("doneeeeee");
  };

  return (
    <div
      className="doctor-feedback"
      style={{ justifyContent: sendState ? "center" : "flex-start" }}
    >
      <aside style={{ display: sendState ? "none" : "flex" }}>
        <TopNavigation />
      </aside>
      <main style={{ display: sendState ? "none" : "flex" }}>
        <ProfileCard
          index={1}
          doctorImage={doctorImage}
          imageSize={"115px"}
          name={"Dr. Henry Daniel"}
          specialization={"General Practioner"}
        />
        <form className="feedback-form">
          <div className="form-div">
            <p>How would you rate Dr. Henry?</p>
            <div className="rating-form">
              {ratings.map((rate, index) => (
                <div className="rate">
                  <img src={ratingIcon} alt="" srcset="" />
                  <p style={{ fontSize: "10px" }}>{rate}</p>
                </div>
              ))}
            </div>
          </div>
          {feedbacks.map((obj, index) => (
            <div className="form-div">
              <p>{obj.title}</p>
              <div className="form-inputs">
                <div className="input-option">
                  <label>
                    <input
                      type="radio"
                      name={obj.tag}
                      value="yes"
                      checked={feedback[obj.tag] === "yes"}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                </div>
                <div className="input-option">
                  <label>
                    <input
                      type="radio"
                      name={obj.tag}
                      value="No"
                      checked={feedback[obj.tag] === "No"}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
                <div className="input-option">
                  <label>
                    <input
                      type="radio"
                      name={obj.tag}
                      value="Not really"
                      checked={feedback[obj.tag] === "Not really"}
                      onChange={handleChange}
                    />
                    Not really
                  </label>
                </div>
              </div>
            </div>
          ))}
          <div className="form-div">
            <p>How would you rate Adhere?</p>
            <div className="rating-form">
              {ratings.map((rate, index) => (
                <div className="rate">
                  <img src={ratingIcon} alt="" srcset="" />
                  <p style={{ fontSize: "10px" }}>{rate}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="form-div">
            <p>Leave a comment</p>
            <p style={{ fontSize: "12px", color: "#C3C9D0" }}>
              Your feedback would help us provide you with improved services
            </p>
            <div className="comment">
              <input type="text" placeholder="Write here" />
            </div>
            <PressableButton
              onPress={sendComplaint}
              text={"Submit Feedback"}
              color="dark"
            />
          </div>
        </form>
      </main>
      <div
        className="complain-success"
        style={{ display: !sendState ? "none" : "flex" }}
      >
        <img src={successIcon} alt="" />
        <h2>Successful</h2>
        <p>Your feedback has been successfully submitted</p>
        <CustomButton text={"Go to home"} link={"/"} />
      </div>
    </div>
  );
};
