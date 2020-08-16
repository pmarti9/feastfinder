import React from "react";
import "./RecipeSearch.css";
import API from "../../Utils/api";

const URL = "https://url.com";
const apiKey = "customkey";

function RecipeSearch() {
  function searchRecipe(e) {
    API.getRecipe({}).then((response) => {
      console.log(response);
    });
  }
  return (
    <div>
      {/* <button type="submit"
        className="btn btn-default"
        onClick={(e)=> {searchRecipe(e);
        }}
       >
        Search for Recipes
      </button> */}
    </div>
  );
}

export default RecipeSearch;
