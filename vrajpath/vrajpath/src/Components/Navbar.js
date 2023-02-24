import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./images/Frame6.png"
const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    

  {/* <a class="navbar-brand" to="#">
   
  </a> */}
  <img src={logo} width="30" height="30" alt=""/>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/client">Our Clients</Link>
        </li>

      </ul>
    
      <form className="d-flex" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Sale</Link>
        </li>
        </ul>
      </form>
    </div>
  </div>
</nav>
   
   
   
   
   
   
   
   </>
  )
}

export default Navbar
