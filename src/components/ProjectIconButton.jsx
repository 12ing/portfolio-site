import React from "react";
import "./ProjectIconButton.css";

const ProjectIconButton = ({ children, isActive, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`project-icon-button ${isActive ? "active" : ""} ${className}`}
    >
      {children}
    </button>
  );
};

export default ProjectIconButton;
