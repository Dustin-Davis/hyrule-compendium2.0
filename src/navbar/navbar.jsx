import React from "react";

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
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Equipment</a>
            <a className="nav-link" href="#">Monsters</a>
            <a className="nav-link" href="#">Creatures</a>
            <a className="nav-link" href="#">Materials</a>
            <a className="nav-link" href="#">Treasure</a>
          </div>
        </div>
      </div>
    </nav>

  )
}
