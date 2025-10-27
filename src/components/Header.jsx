import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">alreay Lim</Link>
      </div>

      <nav className="header__nav">
        <Link to="/aboutMe" className={location.pathname === "/aboutMe" ? "active" : ""}>
          about me
        </Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
          projects
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
