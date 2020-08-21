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
        id="header"
      >
        <ReactBootstrap.Navbar.Brand href="/">
          <img
            src="./Images/altLogo.png"
            alt="Alternate logo"
            id="altLogo"
          ></img>
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav" className="collapseMenu">
          <ReactBootstrap.Nav className="mr-auto" id="mr-autoId">
            <ReactBootstrap.Nav.Link href="/Register" id="navbarLink">
              Register
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="/Login" id="navbarLink">
              Login
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
}

export default Navbar;
