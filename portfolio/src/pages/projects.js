import React, { useState } from "react";

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (project) => {
    setExpandedProject(expandedProject === project ? null : project);
  };

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <p>Here are some of my recent works.</p>
      <div className="project-grid">
        <div
          className={`project-box ${expandedProject === "magic" ? "expanded" : ""}`}
          onClick={() => toggleProject("magic")}
        >
          <h3>Magic the Gathering</h3>
          {expandedProject === "magic" && (
            <p>This is a card game project where I built a deck builder app.</p>
          )}
        </div>
        <div
          className={`project-box ${expandedProject === "cms" ? "expanded" : ""}`}
          onClick={() => toggleProject("cms")}
        >
          <h3>CMS System</h3>
          {expandedProject === "cms" && (
            <p>A content management system for managing blogs and articles.</p>
          )}
        </div>
        <div
          className={`project-box ${expandedProject === "sorting" ? "expanded" : ""}`}
          onClick={() => toggleProject("sorting")}
        >
          <h3>Sorting Library</h3>
          {expandedProject === "sorting" && (
            <p>A library that implements various sorting algorithms.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;