import React, { useState, useEffect } from "react";
// React-Bootstrap elements
import * as ReactBootstrap from "react-bootstrap";
// React-Bootstrap-Table2
import BootstrapTable from "react-bootstrap-table-next";
// React-Bootstrap Table2 Paginator
import paginationFactory from "react-bootstrap-table2-paginator";
// ReactBootstrap spinner
import Spinner from 'react-bootstrap/Spinner'
// CSS
import "./RecipeSearch.css";
//Axios
import axios from "axios";
// API Headers
import API from "../../Utils/RecipeSearchAPI"
import logo from '../../logo.svg'


const request = require('request');
const qs = require('qs');

function RecipeSearch() {

  var options = {
    method: 'GET',
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
    headers: { 
      'cache-control': 'no-cache',
      'Content-Type': 'application/json',
      'X-RapidAPI-Host': "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      'X-RapidAPI-Key': "509e21ec31mshde58c454c0b5794p1ef877jsn842050049fd2",
      'header1': 'header-value-1'
    },
    qs: { 
      diet: "",
      excludeIngredients: '1',
      intolerances: 'false',
      number: '10',
      offset: '0',
      type: "main course",
      query: 'burger'   
    }
  };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    console.log(options);
  });
  return (
        <div>
          <ReactBootstrap.Container
            className="justify-content-md-center"
            id="recipeSearchContainer"
          >
            <h1 id="recipeSearchHeader">Recipe Search</h1>
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
          </ReactBootstrap.Container>
        </div>
      );
    }


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//           >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class RecipeSearchContainer extends Component {
//   state = {
//     result: {},
//     search: ""
//   };

//   componentDidMount() {
//     this.recipesSearch("");
//   }
//   recipesSearch = query => {
//     API.search(query)
//     .then(res => this.setState({ result: res.data}))
//     .catch(err => console.log(err));
//   }
// }



// // OLD Code
// const RecipeSearch = () => {
//   const apiKey = (process.env.REACT_APP_API_KEY);
//   const host = (process.env.REACT_APP_HOST_URL);
//   const recipesURL = (process.env.REACT_APP_RECIPES_URL);
//   const ingredeintsURL = (process.env.REACT_APP_INGREDIENTS_URL);

//   const [Recipes, setRecipe] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const getRecipeData = async () => {
//     try {
//       const data = await axios.get(
//         `${process.env.REACT_APP_RECIPES_URL}`, {params:{ 	"diet": "",
//         "excludeIngredients": "",
//         "intolerances": "",
//         "number": "10",
//         "offset": "0",
//         "type": "",
//         "query": "" }, headers:{ "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//         "x-rapidapi-key": "509e21ec31mshde58c454c0b5794p1ef877jsn842050049fd2",
//         "useQueryString": true }

//         })
//         .then((Response) => {
//           console.log(Response);
//         }, (error) =>{
//           console.log(error);
//         })
//       console.log(process.env.REACT_APP_RECIPES_URL);
//       console.log(process.env.REACT_APP_HOST_URL);
//       console.log(process.env.REACT_APP_API_KEY);

//     //   console.log(data);
//     //   setRecipe(data.data);
//     //   setLoading(true);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   const columns = [
//     { dataField: "title", text: "Recipe Name" },
//     {dataField: "readyInMinutes", text: "Prep Time"},
//     { dataField: "servings", text: "Servings" },
//     { dataField: "image", text: "image" }
//   ];

//   useEffect(() => {
//     getRecipeData();
//   }, []);

//  return (
//     <div className="recipeSearch">
//       <ReactBootstrap.Container id='resultsContainer'>
//       {loading ? (
//         <BootstrapTable id='resultsTable'
//           keyField="recipe"
//           data={Recipes}
//           columns={columns}
//           pagination={paginationFactory()}
//           />
//       ) : (
//         <ReactBootstrap.Spinner animation="border" />
//       )}
//           </ReactBootstrap.Container>
//     </div>
//   );
// };



// Rendered Page with ReactBootstrap form
// function RecipeSearch() {
//   return (
//     <div>
//       <ReactBootstrap.Container
//         className="justify-content-md-center"
//         id="recipeSearchContainer"
//       >
//         <h1 id="recipeSearchHeader">Recipe Search</h1>
//         <ReactBootstrap.Form className="recipeSearchForm" id="recipeSearchFormID">
//           <ReactBootstrap.FormGroup
//             controlId="formRecipeSearch"
//             id="recipeSearchFormGrp"
//           >
//             <ReactBootstrap.InputGroup
//               className="mb-3"
//               id="recipeSearchInputGroup"
//             >
//               <ReactBootstrap.InputGroup.Prepend id="searchIconPrepend">
//                 <ReactBootstrap.Button
//                   variant="outline-secondary"
//                   id="searchBtn"
//                 >
//                   <img
//                     src={require('../../Images/Search_Icon_Orange.png')}
//                     id="searchIcon"
//                   />
//                 </ReactBootstrap.Button>
//               </ReactBootstrap.InputGroup.Prepend>
//               <ReactBootstrap.FormControl aria-describedby="basic-addon1" />
//             </ReactBootstrap.InputGroup>
//           </ReactBootstrap.FormGroup>
//         </ReactBootstrap.Form>
//       </ReactBootstrap.Container>
//     </div>
//   );
// }

export default RecipeSearch;
