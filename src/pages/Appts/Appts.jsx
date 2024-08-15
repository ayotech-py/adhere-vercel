import React, { useState } from "react";
import "./Appts.css";
import { ApptBanner } from "../../components/ApptBanner/ApptBanner";
import { Link } from "react-router-dom";
import { TopNavigation } from "../../components/TopNavigation/TopNavigation";

import userIcon from "../../images/user.png";
import savedIcon from "../../images/saved.png";
import issueIcon from "../../images/issue.png";
import historyIcon from "../../images//history.png";
import leftIcon from "../../images/left-arrow.png";

import doctorImage from "../../images/badge-image.jpg";
import infoIcon from "../../images/info.png";

export const Appts = () => {
  const [apptSelect, setApptSelect] = useState(1);
  const [showApptDetail, setShowApptDetail] = useState(false);

  const apptList = [
    {
      label: "Request an appointment",
      icon: userIcon,
    },
    {
      label: "Saved appointments",
      icon: savedIcon,
    },
    {
      label: "Report an issue",
      icon: issueIcon,
    },
    {
      label: "History",
      icon: historyIcon,
    },
  ];
  return (
    <div className="appts">
      <aside>
        {showApptDetail ? (
          <TopNavigation
            title="My Appointments"
            onPress={() => setShowApptDetail(false)}
          />
        ) : (
          <div className="heading">
            <h3>My Appointments</h3>
          </div>
        )}
        <div className={showApptDetail ? "hide-aside appt-btns" : "appt-btns"}>
          <button
            key={1}
            onClick={() => {
              setApptSelect(1);
              setShowApptDetail(false);
            }}
            className={apptSelect === 1 ? "selected-appt" : "unselected-appt"}
          >
            Doctor Apts.
          </button>
          <button
            key={2}
            onClick={() => {
              setApptSelect(2);
              setShowApptDetail(false);
            }}
            className={apptSelect === 2 ? "selected-appt" : "unselected-appt"}
          >
            Lab Apts.
          </button>
          <button
            key={3}
            onClick={() => {
              setApptSelect(3);
              setShowApptDetail(false);
            }}
            className={apptSelect === 3 ? "selected-appt" : "unselected-appt"}
          >
            Pharmacy Apts.
          </button>
        </div>
        <div
          className={
            showApptDetail ? "appointment-list hide-aside" : "appointment-list"
          }
        >
          {apptList.map((obj, index) => (
            <div key={index} className="appointment-info-card">
              <div className="icon-cover">
                <div className="appointment-icon">
                  <img src={obj.icon} alt="" srcset="" />
                </div>
              </div>
              <div className="app-details">
                <p
                  style={{
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 500,
                  }}
                >
                  {obj.label}
                </p>
                <img src={leftIcon} alt="" srcset="" />
              </div>
            </div>
          ))}
        </div>
      </aside>
      <main>
        <div
          className="upcoming-appointment"
          style={{ display: showApptDetail ? "none" : "block" }}
        >
          <div className="heading">
            <h4>Upcoming Appointments</h4>
          </div>
          <br />
          <div className="appointment-list">
            <ApptBanner
              name={"Dr. Sandra Dharma"}
              image={doctorImage}
              specialization={"Therapist"}
              onPress={() => {
                setShowApptDetail(true);
              }}
            />
            <ApptBanner
              name={"Dr. Sandra Dharma"}
              image={doctorImage}
              specialization={"Therapist"}
              onPress={() => {
                setShowApptDetail(true);
              }}
            />
            <ApptBanner
              name={"Dr. Sandra Dharma"}
              image={doctorImage}
              specialization={"Therapist"}
              onPress={() => {
                setShowApptDetail(true);
              }}
            />
            <ApptBanner
              name={"Dr. Sandra Dharma"}
              image={doctorImage}
              specialization={"Therapist"}
              onPress={() => {
                setShowApptDetail(true);
              }}
            />
            <ApptBanner
              name={"Dr. Sandra Dharma"}
              image={doctorImage}
              specialization={"Therapist"}
              onPress={() => {
                setShowApptDetail(true);
              }}
            />
            <ApptBanner
              name={"Dr. Sandra Dharma"}
              image={doctorImage}
              specialization={"Therapist"}
              onPress={() => {
                setShowApptDetail(true);
              }}
            />
            <ApptBanner
              name={"Dr. Sandra Dharma"}
              image={doctorImage}
              specialization={"Therapist"}
              onPress={() => {
                setShowApptDetail(true);
              }}
            />
          </div>
        </div>
        <div
          className="appointment-details"
          style={{ display: !showApptDetail ? "none" : "flex" }}
        >
          <div className="heading">
            <p>Your appointment details</p>
          </div>
          <div className="doctor-info">
            <div className="left-side">
              <div className="image">
                <img src={doctorImage} alt="" />
              </div>
              <p>Dr. Sandra Kharma</p>
            </div>
            <Link>View profile</Link>
          </div>
          <div className="appt-hightlight">
            <p>
              <span>Specialty:</span> Pediatrician
            </p>
            <p>
              <span>Date:</span> July 21, 2024
            </p>
            <p>
              <span>Time:</span> 10:00AM
            </p>
            <p>
              <span>Consultation Mode:</span> Video Call
            </p>
          </div>
          <div className="appt-prep">
            <h3>Preparation for Your Appointment: </h3>
            <p>
              Ensure you have a stable internet connection and access to a
              device with a camera and microphone. You will receive a link to
              the virtual meeting room 10 minutes before the appointment.
            </p>
          </div>
          <div className="date-cancel">
            <p>15/06/24 • 03:43pm</p>
            <button>Cancel Appointment</button>
          </div>
          <div className="notice">
            <p>
              If you need to cancel your appointment, please do so at least 24
              hours in advance.
            </p>
            <img src={infoIcon} alt="" srcset="" />
          </div>
        </div>
      </main>
    </div>
  );
};
