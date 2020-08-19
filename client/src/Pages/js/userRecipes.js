import React, {useEffect, useState} from "react"
import API from "../../Utils/api"

function userRecipes(){

const [recipe, setRecipe] = useState([])

useEffect(()=>{
    getUsersRecipes()
},[])

function getUsersRecipes(){
    API.getUserRecipes()
    .then(res =>
        setRecipe(res.data)).catch(err => console.log(err))
}
}


return(
    <div>
        
    </div>
)
