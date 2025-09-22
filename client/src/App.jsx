import React from "react";
import { Routes, Route } from "react-router-dom";
import ForeverLayout from "./layout/ForeverLayout.jsx";
import HomePage from "./pages/HomePage";
import AllCollections from "./pages/AllCollections";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<ForeverLayout />}>
        <Route index element={<HomePage />} />
        <Route path="all-collections" element={<AllCollections />} />
        {/* contact us */}
        <Route path="contact-us" element={<ContactUs />} />
        {/* About us */}
        <Route path="about-us" element={<AboutUs />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />

      </Route>
    </Routes>
  </>;
};

export default App;
