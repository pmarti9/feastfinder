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
import axios from "axios";

const IngredientSearch = () => {
  const [Recipes, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRecipeData = async () => {
    try {
      const data = await axios.get(
        "https://nba-players.herokuapp.com/players-stats"
      );
      console.log(data);
      setRecipe(data.data);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };
  const columns = [
    { keyField: "id", integer: "id" },
    { dataField: "recipe", text: "Recipe Name" },
    { dataField: "author", text: "Author" },
    { dataField: "picture", text: "Picture" },
  ];

  useEffect(() => {
    getRecipeData();
  }, []);

  return (
    <div className="IngredientSearch">
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
