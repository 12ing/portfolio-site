import React from "react"
import "./aboutMe.css"
import Rogo1 from "../assets/rogo1.svg"
import Picture from "../assets/picture.svg"

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
    </div>
  )
}

export default AboutMe
