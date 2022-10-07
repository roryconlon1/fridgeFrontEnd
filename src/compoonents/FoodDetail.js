import React from "react";
import Food from "./Food";

const FoodDetail = ({ food }) => {

    if (!food) {
        return <p>Loading...</p>
    }

    const allRecipes = food.recipes.map((recipe, index) => {
        return (
            <div key={index}>
                <h4><i>{recipe.name}</i></h4>
            </div>
        )
    })

    return (
        <div className="foodItem">
            <Food food={food} />
            <h3>Recipes containing {food.name}: </h3>
            {allRecipes}
        </div>
    )

}

export default FoodDetail;