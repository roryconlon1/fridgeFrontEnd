import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({recipes}) => {
    if(recipes.length === 0){
        return(
            <p>Loading . . .</p>
        )
    }

    const recipeElements = recipes.map((recipe, index) => {
        return <li key={index} className="foodList wrap">
            <div className="foodItem">
                <Recipe recipe={recipe}/>
            </div>
        </li>
    })

    return(
        <ul className="components-list wrap">
            {recipeElements}
        </ul>
    )
}

export default RecipeList;