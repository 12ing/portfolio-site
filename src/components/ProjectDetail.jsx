import React, { useState } from "react"
import ProjectIconButton from "./ProjectIconButton"
import projectsData from "../data/projects.json"
import ProjectSkillTags from "./ProjectSkillTags"

// 로고 SVG import
import ModaRogo from "../assets/modaRogo.svg"
import ChainGLogo from "../assets/chaingRogo.svg"
import TTRogo from "../assets/TTRogo.svg"

import ModaIconDefault from "../assets/modaDefault.svg"
import ModaIconActive from "../assets/modaActive.svg"

import ChainGIconDefault from "../assets/chaingDefault.svg"
import ChainGIconActive from "../assets/chaingActive.svg"

import TTIconDefault from "../assets/TTDefault.svg"
import TTIconActive from "../assets/TTActive.svg"

import "./ProjectDetail.css"

/**
 * 프로젝트 상세 페이지 컴포넌트
 */
const ProjectDetail = ({ currentProjectId = "moda" }) => {
  const [activeProject, setActiveProject] = useState(currentProjectId)

  // 현재 프로젝트 데이터 가져오기
  const currentProject = projectsData.projects.find((project) => project.id === activeProject)

  if (!currentProject) {
    return <div>프로젝트를 찾을 수 없습니다.</div>
  }

  // 중앙 로고 매핑
  const projectLogoMap = {
    moda: ModaRogo,
    chaing: ChainGLogo,
    tooning: TTRogo,
  }

  const currentLogo = projectLogoMap[activeProject] || ModaRogo

  // 버튼 아이콘 매핑
  const projectIconMap = {
    moda: {
      default: ModaIconDefault,
      active: ModaIconActive,
    },
    chaing: {
      default: ChainGIconDefault,
      active: ChainGIconActive,
    },
    tooning: {
      default: TTIconDefault,
      active: TTIconActive,
    },
  }

  return (
    <div className="project-detail-page">
      <main className="main-content">
        {/* 뱃지 */}
        <div className="badge">
          <span>{currentProject.badge}</span>
        </div>

        {/* 서브타이틀 */}
        <p className="subtitle">{currentProject.subtitle}</p>

        {/* 중앙 로고 */}
        <div className="project-logo">
          <img src={currentLogo} alt={`${currentProject.title} logo`} />
        </div>

        {/* 기술 스택 태그 */}
        <ProjectSkillTags tags={currentProject.tags} color={currentProject.id === "moda" ? "#000000" : currentProject.id === "chaing" ? "#3B82F6" : "#FF6699"} />

        {/* 설명 */}
        <p className="description">{currentProject.description}</p>

        {/* 정보 */}
        <div className="project-info">
          <div className="info-row">
            <span className="info-label">개발 기간</span>
            <span className="info-value">{currentProject.period}</span>
          </div>
          <div className="info-row">
            <span className="info-label">참여 인원</span>
            <span className="info-value">{currentProject.team}</span>
          </div>
          <div className="info-row">
            <span className="info-label">담당 역할</span>
            <span className="info-value">{currentProject.role}</span>
          </div>
        </div>
      </main>

      {/* 하단 아이콘 버튼 */}
      <div className="project-icons-nav">
        {projectsData.projects.map((project) => {
          const isActive = activeProject === project.id
          const iconSet = projectIconMap[project.id]

          return (
            <ProjectIconButton key={project.id} isActive={isActive} onClick={() => setActiveProject(project.id)} size={80}>
              <img src={isActive ? iconSet.active : iconSet.default} alt={`${project.title} icon`} />
            </ProjectIconButton>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectDetail
