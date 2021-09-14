import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import img1 from "../images/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <img className="logo-image"
            src={img1}
            alt="Canvas Logo"
          />
          <NavLink exact to="/PharmaHome" className="nav-logo">
            <p>Pharmacy Locator</p>
          </NavLink>


          <li className="nav-item">
            <NavLink
              exact to="/login"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}>
              <i class="fas fa-user-circle"></i>
            </NavLink>
          </li>

        </div>
      </nav>
    </>
  )
}

export default Navbar
