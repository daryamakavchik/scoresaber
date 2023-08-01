import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../home-page/home-page";
import { MainPage } from "../main-page/main-page";

function App() {
  return (
      <Router>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/:userId" element={<MainPage />} />
        </Routes>
    </Router>
  );
}

export default App;


// sample ids: 76561198187936410, 76561198333869741