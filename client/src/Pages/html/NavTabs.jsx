import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={
            location.pathname === "/LandingPage"
              ? "nav-link active"
              : "nav-link"
          }
        >
          LandingPage
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/LandingPage"
          className={
            location.pathname === "/LandingPage"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Feast Finder
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/RecipeSearch"
          className={
            location.pathname === "/RecipeSearch"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Recipe Search
        </Link>
        <li className="nav-item">
          <Link
            to="/UserPage"
            className={
              location.pathname === "/UserPage" ? "nav-link active" : "nav-link"
            }
          >
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/MyRecipes"
            className={
              location.pathname === "/MyRecipes" ? "nav-link active" : "nav-link"
            }
          >
            View My Recipes
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Register"
            className={
              location.pathname === "/Register" ? "nav-link active" : "nav-link"
            }
          >
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Login"
            className={
              location.pathname === "/Login" ? "nav-link active" : "nav-link"
            }
          >
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="IngredientSearch"
            className={
              location.pathname === "/IngredientSearch" ? "nav-link active" : "nav-link"
            }
          >
            Search for Ingredients
          </Link>
        </li>
      </li>
    </ul>
  );
}

export default NavTabs
