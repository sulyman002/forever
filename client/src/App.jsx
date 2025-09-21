import React from "react";
import { Routes, Route } from "react-router-dom";
import ForeverLayout from "./layout/foreverLayout";
import HomePage from "./pages/HomePage";
import AllCollections from "./pages/AllCollections";

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<ForeverLayout />}>
        <Route index element={<HomePage />} />
        <Route path="all-collections" element={<AllCollections />} />
      </Route>
    </Routes>
  </>;
};

export default App;
