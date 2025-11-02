import React from "react"
import "./AboutMe.css"
import Rogo1 from "../assets/Rogo1.svg"
import Picture from "../assets/picture.svg"
import AboutMeContent from "../components/AboutMeContent"
import AboutMeValues from "../components/AboutMeValues"
import AboutMeData from "../data/projects.json"
import AboutMeSkills from "../components/AboutMeSkills"
import AboutMeResume from "../components/AboutMeResume"
import ScrollToTopButton from "../components/ScrollToTopButton"

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
              만나서 반갑습니다. 프론트엔드 개발자 이미림입니다.
            </span>
          </span>
        </p>
        <img src={Picture} alt="Picture" className="Picture" />
      </div>

      {/* Problem 화면 */}
      <div className="aboutme-problem-page">
        <AboutMeContent sectionId="problem" />
      </div>

      {/* Values 화면 */}
      <div className="aboutme-values-wrapper">
        <div className="aboutme-values-full-line"></div>

        {AboutMeData.AboutMeValues.map((value) => (
          <AboutMeValues key={value.id} valueId={value.id} />
        ))}
      </div>

      {/* Sloution 화면 */}
      <div className="aboutme-problem-page">
        <AboutMeContent sectionId="solution" />
      </div>

      {/* Skills 화면 */}
      <AboutMeSkills />
      {/* Resume 화면 */}
      <AboutMeResume />

      <ScrollToTopButton />
    </div>
  )
}

export default AboutMe
