import React, { useState, useEffect } from "react";
// React-Bootstrap elements
import * as ReactBootstrap from "react-bootstrap";
// React-Bootstrap-Table2
import BootstrapTable from "react-bootstrap-table-next";
// React-Bootstrap Table2 Paginator
import paginationFactory from "react-bootstrap-table2-paginator";
// ReactBootstrap spinner
// import Spinner from 'eact-bootstrap/Spinner'
// CSS
import "./IngredientSearch.css";
import App from "../../App";
//Axios
// import axios from "axios";
import logo from '../../logo.svg'

const request = require('request');
const qs = require('qs')

function IngredientSearch() {

  var options = {
    method: 'GET',
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
    headers: { 
      'cache-control': 'no-cache',
      'Content-Type': 'application/json',
      'X-RapidAPI-Host': "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      'X-RapidAPI-Key': "509e21ec31mshde58c454c0b5794p1ef877jsn842050049fd2",
      'header1': 'header-value-1'
    },
    qs: { 
      number: '5',
      ranking: '1',
      ignorePantry: 'false',
      ingredients: 'apples%252Cflour%252Csugar'       
    }
  };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    console.log(options);
    console.log(response);
  });

  return (
<div>
          <ReactBootstrap.Container
            className="justify-content-md-center"
            id="recipeSearchContainer"
          >
            <h1 id="recipeSearchHeader">Search for recipes by ingredient(s).</h1>
            <ReactBootstrap.Form className="recipeSearchForm" id="recipeSearchFormID">
              <ReactBootstrap.FormGroup
                controlId="formRecipeSearch"
                id="recipeSearchFormGrp"
              >
                <ReactBootstrap.InputGroup
                  className="mb-3"
                  id="recipeSearchInputGroup"
                >
                  <ReactBootstrap.InputGroup.Prepend id="searchIconPrepend">
                    <ReactBootstrap.Button
                      variant="outline-secondary"
                      id="searchBtn"
                    >
                      <img
                        src={require('../../Images/Search_Icon_Orange.png')}
                        id="searchIcon"
                      />
                    </ReactBootstrap.Button>
                  </ReactBootstrap.InputGroup.Prepend>
                  <ReactBootstrap.FormControl aria-describedby="basic-addon1" />
                </ReactBootstrap.InputGroup>
              </ReactBootstrap.FormGroup>
            </ReactBootstrap.Form>
            <p id="commaSearch">Separate each ingredient with a comma</p>
          </ReactBootstrap.Container>
        </div>
      );
    }
export default IngredientSearch;
