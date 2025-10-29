import React from "react"
import "./Home.css"
import Rogo1 from "../assets/Rogo1.svg"
import ArrowDown from "../assets/arrowDown.svg"
import InteractiveButton from "../components/button"

import HomeData from "../data/projects.json"

function Home() {
  return (
    <div className="page-container">
      {/* 메인 화면 */}
      <div id="hero-section" className="page-container">
        <h1>
          I'm ready.
          <br />
          <span>
            Already
            <span className="space">&nbsp;</span>
            <img src={Rogo1} alt="Rim Rogo" className="Rogo1" />
          </span>
        </h1>

        <img src={ArrowDown} alt="ArrowDown" className="arrowDown" />
      </div>

      {/* About me 화면 */}
      <div id="aboutMe-section" className="page-container">
        <div className="aboutMe-content">
          {HomeData.HomeAboutMe.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="aboutMe-button-wrapper">
          <InteractiveButton targetId="aboutMe-section">
            About
            <br />
            me
          </InteractiveButton>
        </div>
      </div>

      {/* Projects 화면 */}

      {/* Contact 화면 */}
    </div>
  )
}

export default Home
