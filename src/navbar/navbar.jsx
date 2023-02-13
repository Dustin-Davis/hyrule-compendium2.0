import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
export default function NavBar() {
  return(

    <nav className="navbar navbar-expand-lg bg-body-tertiary background-c">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
            <Link to='/equipment' className="nav-link">Equipment</Link>
            <Link to='/monster' className="nav-link">Monster</Link>
            <a className="nav-link" href="#">Creatures</a>
            <Link to='/Materials' className="nav-link">Materials</Link>
            <a className="nav-link" href="#">Treasure</a>
          </div>
        </div>
      </div>
    </nav>

  )
}
