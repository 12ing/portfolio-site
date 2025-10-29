import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

// header 숨기는 값
const SCROLL_THRESHOLD = 50

function App() {
  // 1. 헤더 표시 상태 (기본은 표시)
  const [showHeader, setShowHeader] = useState(true)
  // 2. 이전 스크롤 위치 기록
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    // 현재 스크롤 위치
    const currentScrollY = window.scrollY

    // A. 스크롤 다운 (아래로 내릴 때)
    if (currentScrollY > lastScrollY && currentScrollY > SCROLL_THRESHOLD) {
      // 아래로 스크롤 중이며, 충분히 내려왔을 때: 숨김
      setShowHeader(false)
    }
    // B. 스크롤 업 (위로 올릴 때)
    else if (currentScrollY < lastScrollY) {
      // 위로 스크롤 중일 때: 표시
      setShowHeader(true)
    }

    // C. 최상단으로 이동했을 때 (스크롤 0 이하): 무조건 표시
    if (currentScrollY <= SCROLL_THRESHOLD) {
      setShowHeader(true)
    }

    // 이전 스크롤 위치 업데이트
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll)
    return () => {
      // 컴포넌트 언마운트 시 리스너 제거
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY]) // lastScrollY가 변경될 때마다 훅 재실행

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
