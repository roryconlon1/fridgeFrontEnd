import React from "react";
import Recipe from "./Recipe";

const RecipeDetail = ({recipe}) => {

    if(!recipe){
        return <p>Loading . . .</p>
    }

    const allFoods = recipe.foods.map((food, index) => {
        return <div key={index}>
            {food.name}
        </div>
    })

    return(
        <div className="foodItem">
            <h1>{recipe.name}</h1>
            <h2>Ingredients :</h2>
            <h3><i>{allFoods}</i></h3>
        </div>
    )
}

export default RecipeDetail;