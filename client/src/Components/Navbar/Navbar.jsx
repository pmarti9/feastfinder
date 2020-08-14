import React from "react";

// React-Bootstrap elements
import * as ReactBootstrap from "react-bootstrap";
// CSS
import "./Navbar.css";



function Navbar() {
  return (
    <div>
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <ReactBootstrap.Navbar.Brand href="#LandingPage">
          <img
            src="./Images/altLogo.png"
            alt="Alternate logo"
            className="altLogo"
          ></img>
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
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
