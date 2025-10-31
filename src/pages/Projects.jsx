import React, { useState, useEffect, useCallback, useRef } from "react"
import "./Projects.css"
import ProjectDetail from "../components/ProjectDetail"
import { motion, AnimatePresence } from "framer-motion"
import { useParams } from "react-router-dom"

// ============================
// 이미지 import
// ============================
import moda1 from "../assets/projects/moda1.png"
import moda2 from "../assets/projects/moda2.png"
import moda3 from "../assets/projects/moda3.png"

import chainG1 from "../assets/projects/chainG1.png"
import chainG2 from "../assets/projects/chainG2.png"
import chainG3 from "../assets/projects/chainG3.png"
import chainG4 from "../assets/projects/chainG4.png"

import TT1 from "../assets/projects/TT1.png"
import TT2 from "../assets/projects/TT2.png"
import TT3 from "../assets/projects/TT3.png"

function Projects() {
  // ✅ URL에서 projectId 받아오기
  const { projectId } = useParams()

  // ✅ 초기값을 projectId로 설정 (없으면 moda)
  const [activeProject, setActiveProject] = useState(projectId || "moda")
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)

  // ✅ URL이 바뀔 때마다 activeProject 동기화
  useEffect(() => {
    if (projectId) {
      setActiveProject(projectId)
    }
  }, [projectId])

  // ============================
  // 프로젝트별 이미지 데이터
  // ============================
  const projectImages = {
    moda: [moda1, moda2, moda3],
    chaing: [chainG1, chainG2, chainG3, chainG4],
    tooning: [TT1, TT2, TT3],
  }

  const total = projectImages[activeProject]?.length || 0

  // ============================
  // 이미지 슬라이드 이동
  // ============================
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % total)
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total)

  // ============================
  // 키보드 이벤트 (좌우/ESC)
  // ============================
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") setSelectedImage(null)
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrev()
    },
    [total]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // ============================
  // 마우스 드래그로 이미지 전환
  // ============================
  const handleMouseDown = (e) => {
    setIsDragging(true)
    startXRef.current = e.clientX
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const diff = e.clientX - startXRef.current
    if (diff > 100) {
      handlePrev()
      setIsDragging(false)
    } else if (diff < -100) {
      handleNext()
      setIsDragging(false)
    }
  }

  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  // ============================
  // 모달 열기 / 닫기
  // ============================
  const openModal = (index) => {
    setCurrentIndex(index)
    setSelectedImage(projectImages[activeProject][index])
  }

  const closeModal = () => setSelectedImage(null)

  // ============================
  // 렌더링
  // ============================
  return (
    <div className="page-container">
      <div className="projects-container">
        {/* ✅ 선택된 프로젝트 정보 */}
        <ProjectDetail currentProjectId={activeProject} setActiveProject={setActiveProject} />

        {/* ✅ 이미지 리스트 */}
        <div className="project-images">
          {projectImages[activeProject]?.map((img, idx) => (
            <img key={idx} src={img} alt={`${activeProject}-img-${idx}`} className="project-image" onClick={() => openModal(idx)} />
          ))}
        </div>

        {/* ✅ 이미지 모달 */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="image-modal"
              onClick={closeModal}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img src={projectImages[activeProject][currentIndex]} className="modal-image" alt="project enlarged" onClick={(e) => e.stopPropagation()} />

              <div className="image-counter">
                {currentIndex + 1} / {total}
              </div>

              <button
                className="arrow left"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
              >
                &#10094;
              </button>
              <button
                className="arrow right"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
              >
                &#10095;
              </button>

              <button className="close-btn" onClick={closeModal}>
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Projects
