// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Employees from "./components/Employees";
import Projects from "./components/Projects";
import LocationView from "./components/LocationView"; // Import LocationView

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/projects" element={<Projects />} />
        {/* Define the dynamic route for office details */}
        <Route path="/office/:id" element={<LocationView />} />
      </Routes>
    </Router>
  );
};

export default App;
