import React, { Component } from "react";
import "./LandingPage.css";



function LandingPage() {
    return(
    <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <img id="altLogo" src="Images/altLogo.png" alt="Alternate Logo" width="5%" height="5%">
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
        < /nav>
    < /header>
    <div className="row logoRow">
        <div className="col-lg-12 logoColumn">
            <br />
            <br />
            <img className="logo" src="../public/Images/logo.png" />
        </div>
    </div>
    <div className="row emptyRow">
        <div className="col-md-12 emptyCol"><br /><br /></div>
    </div>
    <div className="row searchLinksRow">
        <div className="col-md-3"></div>
        <div className="col-md-3 searchRecipe">
            <button className="btn btn-primary recipeBtn" type="button">
                <a className="rsLink" href="#">Recipe Search</a>
            </button>
        </div>
        <div className="col-md-3 searchIngredient">
            <button className="btn btn-primary recipeBtn" type="button">
                <a className="rsLink" href="#">Ingredient Search</a>
            </button>
        </div>
        <div className="col-md-3"></div>
    </div>
    )
}