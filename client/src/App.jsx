import React from "react";
import { Routes, Route } from "react-router-dom";
import ForeverLayout from "./layout/foreverLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<ForeverLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </>;
};

export default App;
