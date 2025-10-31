import React, { useRef, useEffect } from "react"
import "./Home.css"
import Rogo1 from "../assets/Rogo1.svg"
import ArrowDown from "../assets/arrowDown.svg"
import InteractiveButton from "../components/button"
import ProjectCard from "../components/ProjectCard"
import RimBig from "../assets/RimBig.svg"
import ScrollToTopButton from "../components/ScrollToTopButton"

import HomeData from "../data/projects.json"

function Home() {
  const projectsWrapperRef = useRef(null)
  const projectsSectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = projectsWrapperRef.current
      const section = projectsSectionRef.current
      if (!wrapper || !section) return

      const wrapperRect = wrapper.getBoundingClientRect()

      if (wrapperRect.top <= 0 && wrapperRect.bottom >= window.innerHeight) {
        // 세로 스크롤 → 가로 스크롤로 변환
        const scrollProgress = Math.abs(wrapperRect.top) / (wrapper.offsetHeight - window.innerHeight)
        const maxScroll = section.scrollWidth - section.offsetWidth
        section.scrollLeft = scrollProgress * maxScroll
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="page-container">
      {/* Hero 섹션 */}
      <section className="hero-section">
        <h1>
          I'm ready.
          <br />
          <span>
            Already&nbsp;
            <img src={Rogo1} alt="Rim" className="Rogo1" />
          </span>
        </h1>
        <img src={ArrowDown} alt="ArrowDown" className="arrowDown" />
      </section>

      {/* About Me 섹션 */}
      <section className="aboutMe-section">
        <div className="aboutMe-content">
          {HomeData.HomeAboutMe.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="contact-header-container">
          <div className="contact-header">
            <span className="contact-from">from</span>
            <span className="contact-insight">Insight</span>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-header">
            <span className="contact-to">to</span>
            <span className="contact-action">Action</span>
          </div>
        </div>

        <div className="aboutMe-button-wrapper">
          <InteractiveButton targetId="aboutMe">
            About
            <br />
            me
          </InteractiveButton>
        </div>
      </section>

      {/* Projects 섹션 */}
      <section className="projects-wrapper" ref={projectsWrapperRef} style={{ height: `${HomeData.HomeProjectList.length * 160}vh` }}>
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
                projectId={project.projectId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact 섹션 */}
      <section className="contact-section">
        <div className="contact-main">
          <h2 className="contact-title">The Choice is Already</h2>
          <img src={RimBig} alt="Rim" className="contact-rim-image" />
        </div>

        <div className="contact-button-wrapper">
          <InteractiveButton targetId="contact">Contact</InteractiveButton>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}

export default Home
