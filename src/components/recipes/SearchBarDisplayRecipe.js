import React from "react";
import Recipe from "./Recipe";

const SearchBarDisplayRecipe = ({recipes}) => {    
    const recipeItems = recipes.map((recipe, index) => {
        return <Recipe recipe={recipe} key = {index}/>  
    })



    return (
        <div>
            <ul>
                {/* {recipeItems} */}
            </ul>
        </div>
    )
}


export default SearchBarDisplayRecipe;