import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Employee Tracker</h2>
      <h3>Dashboard</h3>
      <nav>
        {/* <Link to="/dashboard">Dashboard</Link> */}
        <Link to="/employees">Employees</Link>
        <Link to="/projects">Projects</Link>
   
      </nav>
    </div>
  );
};

export default Dashboard;