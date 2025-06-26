// SkillsList.jsx
import React from "react";

function SkillsList({ skills }) {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills && skills.length > 0 ? (
          skills.map((skill, index) => <li key={index}>{skill}</li>)
        ) : (
          <li>No skills added yet</li>
        )}
      </ul>
    </div>
  );
}

export default SkillsList;
