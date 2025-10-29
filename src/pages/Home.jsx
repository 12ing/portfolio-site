import React from "react"
import "./Home.css"
import Rogo1 from "../assets/Rogo1.svg"
import ArrowDown from "../assets/arrow_down.svg"

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
            <img src={Rogo1} alt="Rim Rogo" className="Rogo1" />
          </span>
        </h1>

        <img src={ArrowDown} alt="ArrowDown" className="ArrowDown" />
      </div>

      {/* About me 화면 */}
      <div id="AboutMe" className="page-container">
        <p>페이지 하단</p>
      </div>
    </div>
  )
}

export default Home
