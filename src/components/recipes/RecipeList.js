import React, { Fragment } from "react";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
import RecipeForm from "./RecipeForm";

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

    const url = "/recipes/new"

    return(
        <div>
        <a className="new_recipe_food" href={url}>Add a new Recipe</a>
        <ul className="components-list wrap">
            {recipeElements}
        </ul>
        </div>
    )
}

export default RecipeList;