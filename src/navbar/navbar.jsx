import React from "react";
import "./navbar.css"


export default function NavBar() {

  return (
  <>
    <nav class="navbar">
      <div class="left">
        <h1>Navbar</h1>
      </div>
      <div class="right">
        <input type="checkbox" id="check" />
          <label for="check" class="checkBtn">
            <i class="fa fa-bars"></i>
          </label>
          <ul class="list">
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
