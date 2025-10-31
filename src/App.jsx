import React, { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import useScrollToTop from "./hooks/useScrollToTop"

import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import "./App.css"

const SCROLL_THRESHOLD = 50

function App() {
  useScrollToTop()

  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // 🔹 헤더 표시 제어
  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY && currentScrollY > SCROLL_THRESHOLD) {
      setShowHeader(false) // 스크롤 내릴 때 숨김
    } else if (currentScrollY < lastScrollY) {
      setShowHeader(true) // 스크롤 올릴 때 표시
    }

    if (currentScrollY <= SCROLL_THRESHOLD) {
      setShowHeader(true)
    }

    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  // 🔹 이미지 우클릭 / 드래그 / 복사 방지
  useEffect(() => {
    // 이미지 우클릭 방지
    const handleContextMenu = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault()
      }
    }

    // 이미지 드래그 방지
    const handleDragStart = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault()
      }
    }

    // 복사(Ctrl+C) 방지
    const handleCopy = (e) => {
      e.preventDefault()
    }

    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("dragstart", handleDragStart)
    document.addEventListener("copy", handleCopy)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("dragstart", handleDragStart)
      document.removeEventListener("copy", handleCopy)
    }
  }, [])

  return (
    <div className="app-wrapper">
      <Header isVisible={showHeader} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Navigate to="/projects/moda" replace />} />
          <Route path="/projects/:projectId" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
