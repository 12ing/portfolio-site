import React from "react"
import ProjectIconButton from "./ProjectIconButton"
import projectsData from "../data/projects.json"
import ProjectSkillTags from "./ProjectSkillTags"

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

const ProjectDetail = ({ currentProjectId, setActiveProject }) => {
  const activeProject = currentProjectId

  const currentProject = projectsData.projects.find((project) => project.id === activeProject)

  if (!currentProject) {
    return <div>프로젝트를 찾을 수 없습니다.</div>
  }

  const projectLogoMap = {
    moda: ModaRogo,
    chaing: ChainGLogo,
    tooning: TTRogo,
  }

  const currentLogo = projectLogoMap[activeProject] || ModaRogo

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

  const projectColorMap = {
    moda: "#000000",
    chaing: "#3B82F6",
    tooning: "#FF6699",
  }

  const currentColor = projectColorMap[activeProject] || "#000000"

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
        <ProjectSkillTags tags={currentProject.tags} color={currentColor} />

        {/* 설명 */}
        <p className="description">{currentProject.description}</p>

        {/* 프로젝트 정보 */}
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
