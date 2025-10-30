import React from "react"
import "./Footer.css"
import Rogo4White from "../assets/Rogo4White.svg"
import MailIcon from "../assets/mailWhite.svg"
import GithubIcon from "../assets/githubWhite.svg"
import VelogIcon from "../assets/velogWhite.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={Rogo4White} alt="Rim Rogo" className="Rogo4White" />
          <p className="footer-tagline">피드백은 언제나 환영입니다</p>
        </div>

        <div className="footer-icons">
          <a href="https://velog.io/@riming/posts" target="_blank" rel="" label="MailIcon">
            <img src={MailIcon} alt="MailIcon" className="MailIcon" />
          </a>

          <a href="https://github.com/12ing" target="_blank" rel="" label="GithubIcon">
            <img src={GithubIcon} alt="Rim GithubIcon" className="GithubIcon" />
          </a>

          <a href="https://velog.io/@riming/posts" target="_blank" rel="" label="VelogIcon">
            <img src={VelogIcon} alt="VelogIcon" className="VelogIcon" />
          </a>
        </div>

        <p>© 2025 Rim. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
