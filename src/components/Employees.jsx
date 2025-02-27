// Employee_tracker/client/src/components/Employees.jsx
import React, { useState } from "react";
import "../styles/Employees.css";

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


const Employees = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || employee.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="employees-container">
      <h1>Employees</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search Employee"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="status-filter"
        >
          <option value="all">All Status</option>
          <option value="office">Working from Office</option>
          <option value="home">Working from Home</option>
        </select>
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Project</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.project}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
