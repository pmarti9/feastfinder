import React from "react";

// React-Bootstrap elements
import * as ReactBootstrap from "react-bootstrap";
// CSS
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <ReactBootstrap.Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        className="header"
      >
        <ReactBootstrap.Navbar.Brand href="#LandingPage">
          <img
            src="./Images/altLogo.png"
            alt="Alternate logo"
            className="altLogo"
          ></img>
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav" className="collapseMenu">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="#Register">
              Register
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#Login">
              Login
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
}

export default Navbar;
