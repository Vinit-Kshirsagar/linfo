// ProjectList.jsx
import React from "react";

function ProjectList({ projects }) {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => <li key={index}>{project}</li>)
        ) : (
          <li>No projects added yet</li>
        )}
      </ul>
    </div>
  );
}

export default ProjectList;
