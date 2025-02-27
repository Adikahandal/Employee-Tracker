// Employee_tracker/client/src/components/Projects.jsx
import React, { useState } from "react";
import "../styles/Projects.css"; // Ensure you have this CSS file

const projects = [
  { id: 1, name: "MERN Stack", employees: ["Aditya", "Satish","Pawan"] },
  { id: 2, name: "Python Development", employees: ["Saiee", "Pooja"] },
  { id: 3, name: "Dotnet", employees: ["Tanmay"] },
  { id: 4, name: "HR", employees: ["Jayshree","Pranoti"] },
];

const Projects = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <input
        type="text"
        placeholder="Search Projects"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p>Employees: {project.employees.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
