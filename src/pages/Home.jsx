import React, { useRef, useEffect } from "react"
import "./Home.css"
import Rogo1 from "../assets/Rogo1.svg"
import ArrowDown from "../assets/arrowDown.svg"
import InteractiveButton from "../components/button"
import ProjectCard from "../components/ProjectCard"

import HomeData from "../data/projects.json"

function Home() {
  const projectsWrapperRef = useRef(null)
  const projectsSectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (projectsWrapperRef.current && projectsSectionRef.current) {
        const wrapper = projectsWrapperRef.current
        const section = projectsSectionRef.current
        const wrapperRect = wrapper.getBoundingClientRect()

        if (wrapperRect.top <= 0 && wrapperRect.bottom >= window.innerHeight) {
          // 스크롤 진행도 계산
          const scrollProgress = Math.abs(wrapperRect.top) / (wrapper.offsetHeight - window.innerHeight)

          // 가로 스크롤 거리 계산
          const maxScroll = section.scrollWidth - section.offsetWidth
          const scrollAmount = scrollProgress * maxScroll

          section.scrollLeft = scrollAmount
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="page-container">
      {/* Hero 화면 */}
      <div className="hero-section">
        <h1>
          I'm ready.
          <br />
          <span>
            Already
            <span className="space">&nbsp;</span>
            <img src={Rogo1} alt="Rim" className="Rogo1" />
          </span>
        </h1>
        <img src={ArrowDown} alt="ArrowDown" className="arrowDown" />
      </div>

      {/* About me 화면 */}
      <div className="aboutMe-section">
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

      {/* projects 화면 */}
      <div className="projects-wrapper" ref={projectsWrapperRef} style={{ height: `${HomeData.HomeProjectList.length * 160}vh` }}>
        <div className="projects-sticky">
          <div className="projects-section" ref={projectsSectionRef}>
            {HomeData.HomeProjectList.map((project, index) => (
              <ProjectCard
                key={project.id}
                number={project.number}
                title={project.title}
                description={project.description}
                color={project.color}
                imageUrl={project.imageUrl}
                cardIndex={index}
                totalCards={HomeData.HomeProjectList.length}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact 화면 */}
      <div className="contact-section">
        <div className="contact-header-container">
          <div className="contact-header">
            <span className="contact-from">from</span>
            <span className="contact-insight">Insight</span>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-header">
            <span className="contact-to">to</span>
            <sapn className="contact-action">Action</sapn>
          </div>
        </div>

        <div className="contact-main">
          <h2 className="contact-title">The Choice is Already</h2>
        </div>

        <div className="contact-button-wrapper">
          <InteractiveButton targetId="contact-section">Contact</InteractiveButton>
        </div>

        {/* <div className="contact-arrow-up">↑</div> */}
      </div>
    </div>
  )
}

export default Home
