import React from "react"
import "./ProjectSkillTags.css"

const FRONTEND_STACKS = ["Kotlin", "React", "Redux", "TypeScript", "Next.js", "Angular", "Ionic Framework"]
const BACKEND_STACKS = ["SpringBoot", "FastAPI", "JPA", "Node.js", "GraphQL", "Yjs"]

function ProjectSkillTags({ tags = [], color = "#000000" }) {
  return (
    <div className="skill-tags-container">
      {tags.map((tag, index) => {
        const isFrontend = FRONTEND_STACKS.includes(tag)
        const isBackend = BACKEND_STACKS.includes(tag)

        return (
          <span
            key={index}
            className={`skill-tag ${isFrontend ? "frontend" : ""} ${isBackend ? "backend" : ""}`}
            style={{
              borderColor: color,
              color: isFrontend ? "#fff" : color,
              backgroundColor: isFrontend ? color : "#fff",
            }}
          >
            {tag}
          </span>
        )
      })}
    </div>
  )
}

export default ProjectSkillTags
