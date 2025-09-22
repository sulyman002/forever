import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllCollections from "./pages/AllCollections";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PulsePoint from "./layout/PulsePoint.jsx";
import { Provider } from "react-redux";
import Store, { persistor } from "./Redux/Store.js";
import { PersistGate } from "redux-persist/integration/react";
import ProductPage from "./pages/ProductPage.jsx";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path="/" element={<PulsePoint />}>
              <Route index element={<HomePage />} />
              <Route path="all-collections" element={<AllCollections />} />
              {/* contact us */}
              <Route path="contact-us" element={<ContactUs />} />
              {/* About us */}
              <Route path="about-us" element={<AboutUs />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="all-collections/:id" element={<ProductPage />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
