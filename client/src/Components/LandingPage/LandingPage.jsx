import React from "react";

// react-bootstrap components
import * as ReactBootstrap from "react-bootstrap";
// CSS
import "./LandingPage.css";

function LandingPage() {
    
  return (
    <div>
      {/* <ReactBootstrap.Container fluid className="LandingContainer"> */}
        <ReactBootstrap.Row id="logoRow" className="justify-content-md-center">
          <ReactBootstrap.Col id="logoColumn">
            <br />
            <br />
            <img
              id="logo"
              alt="Feast Finder Logo"
              src="./Images/logo.png"
            />
            <br />
            <br />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>

        <ReactBootstrap.Row className="row justify-content-md-center" id="searchLinksRow">
          <ReactBootstrap.Col id="emptyCol"></ReactBootstrap.Col>
          <ReactBootstrap.Col id="searchRecipe">
            <ReactBootstrap.Button
              variant="warning"
              size="sm"
              className="justify-content-md-center"
              id="recipeSearchBtn">
              <a id="rsLink" href="#RecipeSearch">
                Recipe Search
              </a>
            </ReactBootstrap.Button>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col id="searchIngredient">
            <ReactBootstrap.Button
              varient="Warning"
              size="sm"
              className="justify-content-md-center"
              id="ingredientSearchBtn"
            >
              <a id="rsLink" href="#IngredientSearch">
                Ingredient Search
              </a>
            </ReactBootstrap.Button>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col id="emptyCol"></ReactBootstrap.Col>
        </ReactBootstrap.Row>
      {/* </ReactBootstrap.Container> */}
    </div>
  );
}

export default LandingPage;
