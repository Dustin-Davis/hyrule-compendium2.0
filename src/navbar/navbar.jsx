import React from "react";
import "./navbar.css"


export default function NavBar() {

  return (
  <>
    <nav className="navbar">
        <div className="left">
        <h1>Navbar</h1>
      </div>
        <div className="right">
        <input type="checkbox" id="check" />
          <label for="check" className="checkBtn">
            <i className="fa fa-bars"></i>
          </label>
          <ul className="list">
            <li><a href="#">Creatures</a></li>
            <li><a href="#">Equipment</a></li>
            <li><a href="#">Materials</a></li>
            <li><a href='#monster'>Monster</a></li>
            <li><a href="#">Treasure</a></li>
          </ul>
      </div>
    </nav>
  </>
  )
}
