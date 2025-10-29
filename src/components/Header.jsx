import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"
import Rogo4 from "../assets/Rogo4.svg"

function Header({ isVisible }) {
  const location = useLocation()

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div className="header__logo">
        <Link to="/">
          <img src={Rogo4} alt="Rim Rogo" className="Rogo4" />
        </Link>
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
