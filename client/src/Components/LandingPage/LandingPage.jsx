import React from "react";

// react-bootstrap components
import * as ReactBootstrap from "react-bootstrap";
// CSS
import "./LandingPage.css";

function LandingPage() {
    
  return (
    <div>
      {/* <ReactBootstrap.Container fluid className="LandingContainer"> */}
        <ReactBootstrap.Row className="logoRow justify-content-md-center">
          <ReactBootstrap.Col className="logoColumn">
            <br />
            <br />
            <img
              className="logo"
              alt="Feast Finder Logo"
              src="./Images/logo.png"
            />
            <br />
            <br />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>

        <ReactBootstrap.Row className="row searchLinksRow justify-content-md-center">
          <ReactBootstrap.Col className="emptyCol"></ReactBootstrap.Col>
          <ReactBootstrap.Col className="searchRecipe">
            <ReactBootstrap.Button
              variant="warning"
              size="sm"
              className="recipeSearchBtn justify-content-md-center"
            >
              <a className="rsLink" href="#RecipeSearch">
                Recipe Search
              </a>
            </ReactBootstrap.Button>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col className="searchRecipe">
            <ReactBootstrap.Button
              varient="Warning"
              size="sm"
              className="recipeSearchBtn justify-content-md-center"
            >
              <a className="rsLink" href="#IngredientSearch">
                Ingredient Search
              </a>
            </ReactBootstrap.Button>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col className="emptyCol"></ReactBootstrap.Col>
        </ReactBootstrap.Row>
      {/* </ReactBootstrap.Container> */}
    </div>
  );
}

export default LandingPage;
