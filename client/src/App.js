import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./Recipe.js";
import { createWorker } from "tesseract.js";
import * as ReactBootstrap from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';

// Start Importing Components
import Header from "./Components/Navbar/Navbar";
import UserPage from "./Components/UserPage/UserPage";
import RecipesWidget from "./Components/RecipesWidget/RecipesWidget";
import MyRecipes from "./Components/MyRecipes/MyRecipes";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";
import IngredientSearch from "./Components/IngredientSearch/IngredientSearch";
import RecipeSearch from "./Components/RecipeSearch/RecipeSearch";
// End Importing Components

require('dotenv').config();

console.log(process.env.REACT_APP_API_KEY);
console.log(process.env.REACT_APP_HOST_URL);
console.log(process.env.REACT_APP_RECIPES_URL);
console.log(process.env.REACT_APP_INGREDIENTS_URL);



function App() {
    return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div>
        <Header />
        <Switch>
          <Route exact path={["/RecipeSearch"]}>
            <RecipeSearch />
          </Route>
          <Route exact path={["/","/Home"]}>
            <LandingPage />
          </Route>
          <Route exact path={["/UserPage"]}>
            <UserPage />
          </Route>
          <Route exact path={["/MyRecipes"]}>
            <MyRecipes />
          </Route>
          <Route exact path={["/Register"]}>
            <Register />
          </Route>
          <Route exact path={["/Login"]}>
            <Login />
          </Route>
          <Route exact path={["/IngredientSearch"]}>
            <IngredientSearch />
          </Route>
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
