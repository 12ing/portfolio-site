import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./button.css"
import ArrowButton from "../assets/arrowButton.svg"

const InteractiveButton = ({ children, targetId }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef(null)
  const containerRef = useRef(null)
  const navigate = useNavigate()

  const handleContainerMouseMove = (e) => {
    if (containerRef.current && buttonRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()

      const centerX = containerRect.width / 2
      const centerY = containerRect.height / 2
      const mouseX = e.clientX - containerRect.left
      const mouseY = e.clientY - containerRect.top

      const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2))

      const activeRange = 300

      if (distance < activeRange) {
        const deltaX = (mouseX - centerX) * 0.6
        const deltaY = (mouseY - centerY) * 0.6
        setMousePosition({ x: deltaX, y: deltaY })
      } else {
        setMousePosition({ x: 0, y: 0 })
      }
    }

    // 마우스 위치 CSS 변수에 업데이트
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      buttonRef.current.style.setProperty("--mouse-x", `${x}px`)
      buttonRef.current.style.setProperty("--mouse-y", `${y}px`)
    }
  }

  const handleContainerMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const handleButtonMouseEnter = () => {
    setIsHovered(true)
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (targetId) {
      navigate(`/${targetId}`)
    }
  }

  return (
    <div ref={containerRef} onMouseMove={handleContainerMouseMove} onMouseLeave={handleContainerMouseLeave} className="interactive-button-container">
      <a
        href={`#${targetId}`}
        ref={buttonRef}
        className={`interactive-button ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={() => {
          setIsHovered(false)
          setMousePosition({ x: 0, y: 0 })
        }}
        onClick={handleClick}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        }}
      >
        <span className="button-content">
          <span className="button-text">{children}</span>
          <img src={ArrowButton} alt="ArrowButton" className="ArrowButton" />
        </span>
      </a>
    </div>
  )
}

export default InteractiveButton
