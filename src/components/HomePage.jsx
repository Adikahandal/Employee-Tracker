import React from "react";
import Dashboard from "../components/Dashboard";
import LandingPage from "../components/LandingPage";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <aside className="sidebar">
        <Dashboard />
      </aside>
      <main className="main-content">
        <LandingPage />
      </main>
    </div>
  );
};

export default HomePage;
