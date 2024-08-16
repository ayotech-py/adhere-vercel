import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import HomeComplain from "./pages/Home/HomeComplain";
import DoctorPage from "./pages/Doctor/Doctor";
import DoctorProfile from "./pages/Doctor/DoctorProfile";
import { DoctorEnd } from "./pages/Doctor/DoctorEnd";
import { DoctorFeedback } from "./pages/Doctor/DoctorFeedback";
import { Appts } from "./pages/Appts/Appts";
import { Pharmacy } from "./pages/Pharmacy/Pharmacy";
import { ViewPrescriptions } from "./pages/Pharmacy/ViewPrescriptions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Layout children={<Home />} />} />
          <Route
            path="complain/"
            element={<Layout children={<HomeComplain />} />}
          />
        </Route>
        <Route path="/doctor/">
          <Route path="" element={<Layout children={<DoctorPage />} />} />
          <Route
            path="profile"
            element={<Layout children={<DoctorProfile />} />}
          />
          <Route
            path="end-consultation"
            element={<Layout children={<DoctorEnd />} />}
          />
          <Route
            path="feedback"
            element={<Layout children={<DoctorFeedback />} />}
          />
        </Route>
        <Route path="/appointments/">
          <Route path="" element={<Layout children={<Appts />} />} />
        </Route>
        <Route path="/pharmacy/">
          <Route path="" element={<Layout children={<Pharmacy />} />} />
          <Route
            path="view-prescriptions"
            element={<Layout children={<ViewPrescriptions />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
