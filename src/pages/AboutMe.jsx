import React from "react"
import "./aboutMe.css"
import Rogo1 from "../assets/rogo1.svg"
import Picture from "../assets/picture.svg"
import AboutMeContent from "../components/AboutMeContent"
import AboutMeValues from "../components/AboutMeValues"
import AboutMeData from "../data/projects.json"
import AboutMeSkills from "../components/AboutMeSkills"
import AboutMeResume from "../components/AboutMeResume"

function AboutMe() {
  return (
    <div className="page-container">
      {/* Hero 화면 */}
      <div className="Picture-section">
        <p className="Picture-text">
          I'm ready.
          <br />
          <span>
            <span className="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            LeeMi
            <span className="space">&nbsp;</span>
            <img src={Rogo1} alt="Rim" className="Rogo-aboutMe" />
            <br />
            <span className="greeting">
              <span className="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              만나서 반갑습니다 프론트엔드개발자 이미림입니다.
            </span>
          </span>
        </p>
        <img src={Picture} alt="Picture" className="Picture" />
      </div>

      {/* Problem 화면 */}
      <div className="aboutme-problem-page">
        {/* "philosophy" ID로 AboutMeContent 데이터 사용 */}
        <AboutMeContent sectionId="problem" />
      </div>

      {/* Values 화면 */}
      <div className="aboutme-values-wrapper">
        {/* 1. 먼저 긴 선 그리기 */}
        <div className="aboutme-values-full-line"></div>

        {/* 2. 컴포넌트들을 선 위에 올리기 */}
        {AboutMeData.AboutMeValues.map((value) => (
          <AboutMeValues key={value.id} valueId={value.id} />
        ))}
      </div>

      {/* Sloution 화면 */}
      <div className="aboutme-problem-page">
        {/* "philosophy" ID로 AboutMeContent 데이터 사용 */}
        <AboutMeContent sectionId="solution" />
      </div>

      {/* Skills 화면 */}
      <AboutMeSkills />
      {/* Resume 화면 */}
      <AboutMeResume />
    </div>
  )
}

export default AboutMe
