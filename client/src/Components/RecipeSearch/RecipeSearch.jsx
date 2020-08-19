import React, { useState, useEffect } from "react";

// React-Bootstrap elements
import * as ReactBootstrap from "react-bootstrap";
// React-Bootstrap-Table2
import BootstrapTable from "react-bootstrap-table-next";
// React-Bootstrap Table2 Paginator
import paginationFactory from "react-bootstrap-table2-paginator";
// ReactBootstrap spinner
// import Spinner from 'react-bootstrap/Spinner'
// CSS
import "./RecipeSearch.css";
//Axios
import axios from "axios";

const RecipeSearch = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRecipeData = async () => {
    try {
      const data = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=3dde0b9a1cc842ccbc355ad7e0d0a50c"
      );
      console.log(data);
      setRecipe(data.data);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };
  const columns = [
    { dataField: "title", text: "Recipe Title" },
    { dataField: "image", img: "Picture" },
  ];

  useEffect(() => {
    getRecipeData();
  }, []);

  return (
    <div className="App">
        {loading ? (
            <BootstrapTable
              keyField="id"
              data={recipe}
              columns={columns}
              pagination={paginationFactory}
            />) : (
                <>
                <ReactBootstrap.Spinner animation="grow" size="sm" />
                <ReactBootstrap.Spinner animation="grow" />
                </>
            )}
      {/* <ReactBootstrap.Row>
        <ReactBootstrap.Col className="IngredientsSearchCol">
          <ReactBootstrap.Container className="searchIngredientContain">

          </ReactBootstrap.Container>
        </ReactBootstrap.Col>
        <ReactBootstrap.Col className="recipesWidget"></ReactBootstrap.Col>
      </ReactBootstrap.Row> */}
    </div>
  );
};
export default RecipeSearch;