import axios from "axios";
const APIKEY = process.env.REACT_APP_API_KEY;
const HOSTURL = process.env.REACT_APP_HOST_URL;
const RECIPESURL = process.env.REACT_APP_RECIPES_URL;

export default {
  recipeSearch: function (query) {
    return axios.get(process.env.REACT_APP_RECIPES_URL, {
      params: {
        diet: "",
        excludeIngredients: "",
        intolerances: "",
        number: "10",
        offset: "0",
        type: "",
        query: "",
      },
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_HOST_URL,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        useQueryString: true,
      },
    });
  },
};
