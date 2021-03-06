import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  const navList = [{
    title: "Animation",
    path: "genre=animation"
  }, {
    title: "Romance",
    path: "genre=romance"
  }, {
    title: "Comedy",
    path: "genre=comedy"
  }, {
    title: "Biography",
    path: "genre=biography"
  }]

  return (
    <nav className="navigation">
      <div style={{ display: "flex" }}><h1><Link to="/" style={{ textDecoration: 'none', color: "black" }}>GETFLEX</Link></h1></div>
      <ul className="menu">
        {navList.map(({ title, path }) => (
            <li key={title}>
              <Link to={`/movie/${path}/1`} style={{ textDecoration: 'none', color: "black" }}>{title}</Link>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar;