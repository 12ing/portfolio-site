import React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import "./AboutMeSkills.css"

// 아이콘 import (실제 경로에 맞게 수정하세요)
import AeIcon from "../assets/skillsIcons/AeIcon.svg"
import AiIcon from "../assets/skillsIcons/AiIcon.svg"
import CssIcon from "../assets/skillsIcons/cssIcon.svg"
import figmaIcon from "../assets/skillsIcons/figmaIcon.svg"
import GithubIcon from "../assets/skillsIcons/githubIcon.svg"
import HTMLIcon from "../assets/skillsIcons/htmlIcon.svg"
import JiraIcon from "../assets/skillsIcons/jiraIcon.svg"
import JSIcon from "../assets/skillsIcons/JSIcon.svg"
import LottieIcon from "../assets/skillsIcons/lottieIcon.svg"
import MysqlIcon from "../assets/skillsIcons/mysqlIcon.svg"
import NotionIcon from "../assets/skillsIcons/notionIcon.svg"
import PsIcon from "../assets/skillsIcons/psIcon.svg"
import ReactIcon from "../assets/skillsIcons/reactIcon.svg"

function AboutMeSkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  })

  // 아이콘 데이터 배열
  const icons = [
    { id: 1, src: NotionIcon, alt: "Notion", finalX: -830, finalY: -250 },
    { id: 2, src: GithubIcon, alt: "Github", finalX: -550, finalY: 50 },
    { id: 3, src: figmaIcon, alt: "Figma", finalX: -350, finalY: -180 },
    { id: 4, src: ReactIcon, alt: "React", finalX: 100, finalY: -400 },
    { id: 5, src: HTMLIcon, alt: "HTML", finalX: 450, finalY: 350 },
    { id: 6, src: PsIcon, alt: "Photoshop", finalX: 600, finalY: 0 },
    { id: 7, src: AeIcon, alt: "After Effects", finalX: -400, finalY: 380 },
    { id: 8, src: AiIcon, alt: "Illustrator", finalX: -750, finalY: 250 },
    { id: 9, src: JSIcon, alt: "JavaScript", finalX: 30, finalY: 250 },
    { id: 10, src: CssIcon, alt: "CSS", finalX: 850, finalY: 200 },
    { id: 11, src: LottieIcon, alt: "Lottie", finalX: 400, finalY: -220 },
    { id: 12, src: JiraIcon, alt: "Jira", finalX: -600, finalY: -380 },
    { id: 13, src: MysqlIcon, alt: "MySQL", finalX: 780, finalY: -300 },
  ]

  return (
    <div className="aboutme-skills-section" ref={ref}>
      <div className="skills-header">
        <p className="skills-title">wide field of view</p>
        <p className="skills-description">
          기획부터 디자인,
          <br />
          <span className="highlight">{"{ 프론트엔드 개발 }"}</span>
          <br />
          그리고 협업까지.
        </p>
      </div>

      <div className="skills-icons-container">
        {icons.map((icon, index) => (
          <motion.div
            key={icon.id}
            className="skill-icon"
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0.5,
            }}
            animate={
              isInView
                ? {
                    x: icon.finalX,
                    y: icon.finalY,
                    opacity: 1,
                    scale: 1,
                  }
                : {
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0.5,
                  }
            }
            transition={{
              duration: 1.2,
              delay: 0,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <img src={icon.src} alt={icon.alt} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AboutMeSkills
