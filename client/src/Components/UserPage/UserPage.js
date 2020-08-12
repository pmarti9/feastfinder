import React, { Component } from "react";
import "./UserPage.css";



import React, { Component } from "react";
import "./LandingPage.css";



function UserPage() {
    return(
    <header />
        <nav className="navbar navbar-expand-md navbar-light bg-light" />
            <img id="altLogo" src="Images/altLogo.png" alt="Alternate Logo" width="5%" height="5%" />
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <button className="btn btn-primary headerBtn" type="button">
                                <a href="#" className="headLink">Register
                                    <span className="sr-only">(current)</span>
                                </a>
                            </button>
                        </li>
                        <li className="nav-item active">
                            <button className="btn btn-primary headerBtn" type="button">
                                <a href="#" className="headLink">Login
                                    <span className="sr-only">(current)</span>
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
    //     < /nav>
    // < /header>