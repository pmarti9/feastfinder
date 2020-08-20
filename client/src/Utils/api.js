import axios from "axios"; 
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
};