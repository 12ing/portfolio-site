import React from "react"
import "./ProjectCard.css"
import InteractiveButton from "../components/button"

const ProjectCard = ({ number, title, description, color, imageUrl, onClick }) => {
  const descriptionLines = description.split("\n")

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-container">
        {/* 왼쪽 영역: 텍스트 콘텐츠 */}
        <div className="project-card-content">
          <div className="project-card-header">
            <span className="project-card-number">{number}</span>
            <h2 className="project-card-title">{title}</h2>
          </div>

          <div className="project-card-description">
            {descriptionLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        {/* 오른쪽 영역: 이미지 */}
        <div className="project-card-image">
          {imageUrl ? (
            <img src={imageUrl} alt={title} />
          ) : (
            <div className="project-card-image-placeholder">
              <span>이미지 준비중</span>
            </div>
          )}
        </div>
      </div>

      <div className="projects-button-wrapper">
        <InteractiveButton targetId="projects-section">Details</InteractiveButton>
      </div>
    </div>
  )
}

export default ProjectCard
