import React, { useState } from "react";
import "./Doctor.css";
import { Link } from "react-router-dom";

import gridIcon from "../../images/grid.png";
import sortIcon from "../../images/sort.png";
import searchIcon from "../../images/home-search.png";
import listIcon from "../../images/listview.png";

import doctorImage from "../../images/badge-image.jpg";
import tickIcon from "../../images/green-tick.png";
import starIcon from "../../images/star.png";

export default function DoctorPage() {
  const [gridView, setGridView] = useState(false);
  const searchResultList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="doctor-page">
      <aside>
        <div className="page-title">
          <h3>Doctor</h3>
          {gridView ? (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setGridView(false)}
            >
              <img src={listIcon} alt="" />
            </div>
          ) : (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setGridView(true)}
            >
              <img src={gridIcon} alt="" />
            </div>
          )}
        </div>
        <div className="home-search">
          <input type="text" placeholder="Search doctor, feeling..." />
          <div className="icon">
            <img src={searchIcon} alt="" srcset="" />
          </div>
          <div className="icon2">
            <img src={sortIcon} alt="" srcset="" />
          </div>
        </div>
      </aside>
      <main>
        <section className="search-result" style={{ display: "flex" }}>
          <div className="search-heading">
            <div className="map-view">
              <p>View on map</p>
            </div>
          </div>
          <div className={gridView ? "result-list-grid" : "result-list"}>
            {searchResultList.map((obj, index) => (
              <Link to={"profile"}>
                <div
                  key={index}
                  className={gridView ? "result-card-grid" : "result-card"}
                >
                  <div className="result-profile-image">
                    <img
                      src={doctorImage}
                      width={"60px"}
                      height={"60px"}
                      alt=""
                      srcset=""
                    />
                    <span style={{ display: gridView ? "block" : "none" }}>
                      <img
                        src={tickIcon}
                        width={"15px"}
                        height={"15px"}
                        alt=""
                        srcset=""
                      />
                    </span>
                  </div>
                  <div className={gridView ? "" : "result-details"}>
                    <div
                      className={
                        gridView
                          ? "result-profile-info-grid"
                          : "result-profile-info"
                      }
                    >
                      <h3>
                        Dr. Sandra Ufuoma{" "}
                        <span
                          style={{
                            display: gridView ? "none" : "inline-block",
                          }}
                        >
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
                      <div className="result-rating">
                        <p>
                          <span>
                            <img
                              src={starIcon}
                              width={"10px"}
                              height={"10px"}
                              alt=""
                            />
                            4.4
                          </span>{" "}
                          (33 Reviews)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
