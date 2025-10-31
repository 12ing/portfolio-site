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
          <a href="https://mail.google.com/mail/?view=cm&to=lll123kong2mm@gmail.com" target="_blank" rel="" label="MailIconBig">
            <img src={MailIconBig} alt="메일 보내기" className="MailIconBig" />
          </a>

          <a href="https://github.com/12ing" target="_blank" rel="" label="GithubIconBig">
            <img src={GithubIconBig} alt="Github 링크" className="GithubIconBig" />
          </a>

          <a href="https://velog.io/@riming/posts" target="_blank" rel="" label="VelogIconBig">
            <img src={VelogIconBig} alt="Velog 링크" className="VelogIconBig" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
