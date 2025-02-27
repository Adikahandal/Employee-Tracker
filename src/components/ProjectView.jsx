import React, { useState } from "react";
import "../styles/ProjectView.css";

const employees = [
  { id: 1, name: "Aditya", project: "MERN Stack" },
  { id: 2, name: "Satish", project: "MERN Stack" },
  { id: 3, name: "Tanmay", project: "Dotnet" },
  { id: 4, name: "Pawan", project: "MERN Stack" },
  { id: 5, name: "Saiee", project: "Python Development" },
  { id: 6, name: "Pooja", project: "Python Development" },
  { id: 7, name: "Pranoti", project: "HR" },
  { id: 8, name: "Jayshree", project: "HR" }
];

const projects = ["Dotnet", "HR", "MERN Stack","Python Development"];

const ProjectView = () => {
  const [search, setSearch] = useState("");
  const filteredEmployees = employees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="project-container">
      <h1>Employees by Project</h1>
      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      {projects.map(project => (
        <div key={project} className="project-section">
          <h2>{project}</h2>
          {filteredEmployees.filter(e => e.project === project).map(e => (
            <div key={e.id} className="employee-card">{e.name}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectView;
