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
            <li>
              <Link to={`/movie/${path}/1`} style={{ textDecoration: 'none', color: "black" }}>{title}</Link>
            </li>
        ))}
      </ul>
      <div className="admin"><span>로그인</span> <span>좋아요</span></div>
    </nav>
  )
}

export default NavBar;