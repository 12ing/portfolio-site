import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import AboutMe from "./pages/aboutMe"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const SCROLL_THRESHOLD = 50

function App() {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    // 스크롤 down
    if (currentScrollY > lastScrollY && currentScrollY > SCROLL_THRESHOLD) {
      setShowHeader(false)
    }
    // 스크롤 up
    else if (currentScrollY < lastScrollY) {
      setShowHeader(true)
    }

    // 최상단 이동
    if (currentScrollY <= SCROLL_THRESHOLD) {
      setShowHeader(true)
    }

    // 이전 스크롤 위치 업데이트
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <div className="app-wrapper">
      <Header isVisible={showHeader} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
