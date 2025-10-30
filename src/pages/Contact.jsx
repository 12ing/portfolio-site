import React from "react"
import "./Contact.css"
import Rogo1 from "../assets/Rogo1.svg"
import MailIconBig from "../assets/mailBlack.svg"
import GithubIconBig from "../assets/githubBlack.svg"
import VelogIconBig from "../assets/velogBlack.svg"

function Contact() {
  return (
    <div className="page-container">
      <div className="contact-hero">
        <p>
          The choice
          <br />
          is
          <br />
          <span>
            Already
            <span className="space">&nbsp;</span>
            <img src={Rogo1} alt="Rim" className="Rogo1" />
          </span>
        </p>

        <div className="contact-icons">
          <a href="https://velog.io/@riming/posts" target="_blank" rel="" label="MailIconBig">
            <img src={MailIconBig} alt="MailIconBig" className="MailIconBig" />
          </a>

          <a href="https://github.com/12ing" target="_blank" rel="" label="GithubIconBig">
            <img src={GithubIconBig} alt="GithubIconBig" className="GithubIconBig" />
          </a>

          <a href="https://velog.io/@riming/posts" target="_blank" rel="" label="VelogIconBig">
            <img src={VelogIconBig} alt="VelogIconBig" className="VelogIconBig" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
