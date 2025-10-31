import React, { useState, useEffect } from "react"
import ArrowUp from "../assets/arrowUp.svg"
import "./ScrollToTopButton.css"

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button className={`scroll-to-top ${visible ? "show" : ""}`} onClick={scrollToTop}>
      <img src={ArrowUp} alt="Go to top" />
    </button>
  )
}

export default ScrollToTopButton
