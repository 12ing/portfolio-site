import React from "react"
import "./AboutMeContent.css"
import AboutMeData from "../data/projects.json"

function AboutMeContent({ sectionId }) {
  const aboutMeContentData = AboutMeData.AboutMeContent.find((section) => section.id === sectionId)

  if (!aboutMeContentData) {
    console.error(`AboutMeContent with id "${sectionId}" not found`)
    return null
  }

  return (
    <div className="page-container">
      <div className="aboutme-content-container">
        <div className="dot"></div>
        <h2 className="aboutme-content-title">{aboutMeContentData.title}</h2>
        <p className="aboutme-content-subtitle">{aboutMeContentData.subtitle}</p>
      </div>
    </div>
  )
}

export default AboutMeContent
