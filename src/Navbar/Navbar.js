import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import "./Navbar.css";
import img1 from "../images/logo2.png";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';

function Navbar() {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory()
  const logout = () => {
    window.localStorage.removeItem("token");
    history.push('/')
  }
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <img className="logo-image"
            src={img1}
            alt="Canvas Logo"
            style={{ marginTop: '0px' }}
          />
          <NavLink exact to="/home/:id" className="nav-logo" style={{ textDecoration: "none" }}>
            <p style={{ marginTop: "12px", fontSize: "xxx-large", fontFamily: "sans-serif", fontWeight: "700px", marginLeft: "50px", width: "max-content" }}>Pharmacy Locator</p>
          </NavLink>
          <div className="nav-item">
            <div className="nav-links" onClick={handleShow} style={{ width: "max-content" }}>
              <ExitToAppIcon />
              Logout
            </div>
          </div>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm logout</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ marginLeft: "100px" }}>Are you sure you want to Logout ?
              <br />
              <br />
              <Button variant="secondary" onClick={logout} style={{ marginLeft: "30px" }}>
                Logout
              </Button>
              <Button variant="primary" onClick={handleClose} style={{ marginLeft: "40px" }}>
                Close
              </Button>
            </Modal.Body>

          </Modal>
        </div>
      </nav>
    </>
  )
}

export default Navbar
