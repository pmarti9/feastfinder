import React from "react";
import API from "../../Utils/api";

function RecipesWidget() {
    function UserRecipes(){
        API.getUserRecipes({

        }).then((response)=> {
            console.log(response)
        })
    }
    return (
        <div></div>
    );
}

export default RecipesWidget;