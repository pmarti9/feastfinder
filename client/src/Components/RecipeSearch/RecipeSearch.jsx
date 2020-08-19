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
const env = require('env-cmd');



const RecipeSearch = () => {
  const [Recipes, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRecipeData = async () => {
    try {
      const data = await axios.get(
        {process.env.RECIPES_URL}
      );
      console.log(data);
      setRecipe(data.data);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };
  const columns = [
    { dataField: "recipe", text: "Recipe Name" },
    { dataField: "author", text: "Author" },
    { dataField: "picture", text: "Picture" },
  ];

  useEffect(() => {
    getRecipeData();
  }, []);

  return (
    <div className="recipeSearch">
      <ReactBootstrap.Container id='resultsContainer'>
      {loading ? (
        <BootstrapTable id='resultsTable'
          keyField="recipe"
          data={Recipes}
          columns={columns}
          pagination={paginationFactory()}
          />
      ) : (
        <ReactBootstrap.Spinner animation="border" />
      )}
          </ReactBootstrap.Container>
    </div>
  );
};






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
