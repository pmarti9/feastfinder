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
const qs = require('qs');

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
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
}
//   const [Recipes, setRecipe] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const getRecipeData = async () => {
//     try {
//       const data = await axios.get(
//         "https://nba-players.herokuapp.com/players-stats"
//       );
//       console.log(data);
//       setRecipe(data.data);
//       setLoading(true);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   const columns = [
//     { keyField: "id", integer: "id" },
//     { dataField: "recipe", text: "Recipe Name" },
//     { dataField: "author", text: "Author" },
//     { dataField: "picture", text: "Picture" },
//   ];

//   useEffect(() => {
//     getRecipeData();
//   }, []);

//   return (
//     <div className="IngredientSearch">
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

// return (
//   <div>
//     <ReactBootstrap.Container
//       id="ingredientSearchContainer"
//       className="justify-content-md-center">
//         <ReactBootstrap.Table className="table table-bordered table-responsive" id='ingredientSearchTable'>
//           <ReactBootstrap.thead>
//             <ReactBootstrap.tr>
//               <ReactBootstrap.th scope='col'>Search Ingredients</ReactBootstrap.th>
//               <ReactBootstrap.th scope='col'>
//                 <ReactBootstrap.Button variant="primary">Add Ingredient</ReactBootstrap.Button>
//               </ReactBootstrap.th>
//             </ReactBootstrap.tr>
//           </ReactBootstrap.thead>
//           <ReactBootstrap.TBody id='ingredientSearchTableBody'>
//             <ReactBootstrap.tr>

//             </ReactBootstrap.tr>
//           </ReactBootstrap.TBody>

//         </ReactBootstrap.Table>
//     </ReactBootstrap.Container>
//   </div>
// );
//}

export default IngredientSearch;
