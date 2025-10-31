import React from "react"
import "./AboutMeResume.css"
import resumeData from "../data/projects.json"

function AboutMeResume() {
  return (
    <div className="resume-container">
      <div className="resume-left">
        {/* 수상 */}
        <div className="resume-section">
          <h3 className="resume-title">수상</h3>
          {resumeData.awards.map((item, index) => (
            <div key={index} className="resume-item">
              <span className="resume-year">{item.year}</span>
              <span className="resume-content">{item.name}</span>
            </div>
          ))}
        </div>

        {/* 대외활동 */}
        <div className="resume-section">
          <h3 className="resume-title">대외활동</h3>
          {resumeData.activities.map((item, index) => (
            <div key={index} className="resume-item">
              <span className="resume-year">{item.year}</span>
              <span className="resume-content">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="resume-right">
        {/* 자격증 */}
        <div className="resume-section">
          <h3 className="resume-title">자격증</h3>
          {resumeData.certifications.map((item, index) => (
            <div key={index} className="resume-item">
              <span className="resume-year">{item.year}</span>
              <span className="resume-content">{item.name}</span>
            </div>
          ))}
        </div>

        {/* 경력 */}
        <div className="resume-section">
          <h3 className="resume-title">경력</h3>
          {resumeData.experience.map((item, index) => (
            <div key={index} className="resume-item">
              <span className="resume-year">{item.period}</span>
              <span className="resume-content">{item.role}</span>
            </div>
          ))}
        </div>

        {/* 학력 */}
        <div className="resume-section">
          <h3 className="resume-title">학력</h3>
          {resumeData.education.map((item, index) => (
            <div key={index} className="resume-item">
              <span className="resume-year">{item.period}</span>
              <span className="resume-content">{item.school}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutMeResume
