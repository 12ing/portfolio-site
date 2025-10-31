import React from "react"
import "./AboutMeValues.css"
import AboutMeData from "../data/projects.json"
import InsightIcon from "../assets/insight.svg"
import ActionIcon from "../assets/action.svg"
import RepeatIcon from "../assets/repeat.svg"

const iconMap = {
  1: InsightIcon,
  2: ActionIcon,
  3: RepeatIcon,
}

function AboutMeValues({ valueId }) {
  const valueData = AboutMeData.AboutMeValues.find((value) => value.id === valueId)

  if (!valueData) {
    return null
  }

  return (
    <section className="aboutme-values-section">
      <div className="aboutme-values-container">
        {/* 아이콘 + 타이틀 */}
        <div className="aboutme-values-left">
          <div className="aboutme-values-icon-area">
            <div className="aboutme-values-icon-wrapper">
              <img src={iconMap[valueData.id]} alt={valueData.title} className="aboutme-values-icon" />
              <h2 className="aboutme-values-title">{valueData.title}</h2>
            </div>
          </div>
        </div>

        {/* 오른쪽 텍스트 */}
        <div className="aboutme-values-right">
          <span className="aboutme-values-tag">{valueData.tag}</span>
          <h3 className="aboutme-values-subtitle">{valueData.subtitle}</h3>
          <p className="aboutme-values-description">{valueData.description}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMeValues
