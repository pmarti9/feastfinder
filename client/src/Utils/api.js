import axios from "axios";
const RECIPESURL = process.env.REACT_APP_RECIPES_URL;
const APIKEY = process.env.REACT_APP_API_KEY;


export default {
  login: function (data) {
    return axios.post("/api/login", data);
  },
  logout: function () {
    return axios.get("/api/logout");
  },
  submitRecipe: function(data) {
    return axios.post("/api/Recipe", data)
  },
  getRecipe: function(id){
    return axios.get("api/getRecipes", id)
  },
  getUserRecipes: function() {
    return axios.get("api/userRecipes")
  }
  // getRecipeData: function(APIKEY) {
  //   return axios.get("api/recipeSearch", APIKEY)
  // }
};