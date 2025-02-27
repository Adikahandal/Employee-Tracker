import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/LocationView.css";

const offices = [
  { id: 1, name: "Hyderabad", lat: 17.43406013111157, lng: 78.37648988421165 },
  { id: 2, name: "Bengaluru", lat: 12.9716, lng: 77.5946 },
  { id: 3, name: "Pune", lat: 18.589927465839004, lng: 73.74800615169852 },
  { id: 4, name: "Loni", lat: 19.577587227732845, lng: 74.46075046891002 },
  { id: 5, name: "Austin, US", lat: 30.2849, lng: -97.7428 },
];
const employees = [
  { id: 1, name: "Aditya",office: 4, status: "office", project: "MERN Stack" },
  { id: 2, name: "Satish",office: 4, status: "office", project: "MERN Stack" },
  { id: 3, name: "Tanmay",office: 3, status: "home", project: "Dotnet" },
  { id: 4, name: "Pawan",office: 1, status: "office", project: "MERN Stack" },
  { id: 5, name: "Saiee",office: 4, status: "home", project: "Python Development" },
  { id: 6, name: "Pooja",office: 2, status: "home", project: "Python Development" },
  { id: 7, name: "Pranoti",office: 3, status: "office", project: "HR" },
  { id: 8, name: "Jayshree",office: 4, status: "office", project: "HR" }
];


const LocationView = () => {
  const { id } = useParams(); // Extract the office ID from the route
  const [search, setSearch] = useState("");

  // Find the office by ID
  const office = offices.find((office) => office.id === parseInt(id));

  if (!office) {
    return <div>Office not found!</div>;
  }

  // Filter employees based on the office ID
  const officeEmployees = employees.filter((employee) => employee.office === office.id);

  // Filter employees based on the search query
  const filteredEmployees = officeEmployees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  // Separate employees into those working from the office and those working from home
  const officeEmployeesList = filteredEmployees.filter((e) => e.status === "office");
  const homeEmployeesList = filteredEmployees.filter((e) => e.status === "home");

  return (
    <div className="location-container">
      <h1>{office.name} Office</h1>
      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Working from Office Table */}
      <h2>Working from Office</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {officeEmployeesList.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.project}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Working from Home Table */}
      <h2>Working from Home</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {homeEmployeesList.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.project}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationView;
