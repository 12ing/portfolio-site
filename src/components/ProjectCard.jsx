import React, { useState, useEffect, useRef } from "react"
import "./ProjectCard.css"
import InteractiveButton from "../components/button"

const ProjectCard = ({ number, title, description, color, imageUrl, onClick, cardIndex, totalCards }) => {
  const descriptionLines = description.split("\n")
  const cardRef = useRef(null)
  const lastProgress = useRef(0)
  const rafId = useRef(null)

  const [visibleItems, setVisibleItems] = useState({
    header: false,
    description: false,
    button: false,
    image: false,
  })

  useEffect(() => {
    let ticking = false

    const updateVisibility = () => {
      if (!cardRef.current) {
        ticking = false
        return
      }

      const card = cardRef.current
      const cardRect = card.getBoundingClientRect()
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      let cardProgress = 0

      // 세로
      const firstCardThresholds = {
        header: 0.3, // 세로 20%
        description: 0.5, // 세로 40%
        button: 0.8, // 세로 60%
        image: 0.7, // 세로 80%
      }
      // 가로
      const otherCardThresholds = {
        header: 0.15,
        description: 0.3,
        button: 0.6,
        image: 0.7,
      }

      const thresholds = cardIndex === 0 ? firstCardThresholds : otherCardThresholds

      if (cardIndex === 0) {
        // ========================================
        // 첫 번째 카드: 세로 스크롤 진행도 사용
        // ========================================
        const wrapper = card.closest(".projects-wrapper")
        if (!wrapper) {
          ticking = false
          return
        }

        const wrapperRect = wrapper.getBoundingClientRect()

        const sectionProgress = Math.max(0, Math.min(1, (windowHeight - wrapperRect.top) / windowHeight))

        cardProgress = sectionProgress
      } else {
        // ========================================
        // 두/세 번째 카드: 가로 스크롤 진행도 사용
        // ========================================
        const distanceFromRight = windowWidth - cardRect.left
        const cardWidth = card.offsetWidth
        cardProgress = Math.max(0, Math.min(1, distanceFromRight / cardWidth))
      }

      const isScrollingDown = cardProgress > lastProgress.current
      const isScrollingUp = cardProgress < lastProgress.current

      if (isScrollingDown) {
        setVisibleItems((prev) => ({
          header: prev.header ? true : cardProgress >= thresholds.header,
          description: prev.description ? true : cardProgress >= thresholds.description,
          button: prev.button ? true : cardProgress >= thresholds.button,
          image: prev.image ? true : cardProgress >= thresholds.image,
        }))
      } else if (isScrollingUp) {
        setVisibleItems((prev) => ({
          header: prev.header && cardProgress >= thresholds.header,
          description: prev.description && cardProgress >= thresholds.description,
          button: prev.button && cardProgress >= thresholds.button,
          image: prev.image && cardProgress >= thresholds.button,
        }))
      }

      lastProgress.current = cardProgress
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        rafId.current = requestAnimationFrame(updateVisibility)
        ticking = true
      }
    }

    updateVisibility()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [cardIndex, totalCards])

  return (
    <div className="project-card" ref={cardRef} onClick={onClick}>
      <div className="project-card-container">
        <div className="project-card-content">
          <div className={`project-card-header ${visibleItems.header ? "visible" : ""}`}>
            <span className="project-card-number">{number}</span>
            <h2 className="project-card-title">{title}</h2>
          </div>

          <div className={`project-card-description ${visibleItems.description ? "visible" : ""}`}>
            {descriptionLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className={`project-card-image ${visibleItems.image ? "visible" : ""}`}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} />
          ) : (
            <div className="project-card-image-placeholder">
              <span>이미지 준비중</span>
            </div>
          )}
        </div>
      </div>

      <div className={`projects-button-wrapper ${visibleItems.button ? "visible" : ""}`}>
        <InteractiveButton targetId="projects-section">Details</InteractiveButton>
      </div>
    </div>
  )
}

export default ProjectCard
