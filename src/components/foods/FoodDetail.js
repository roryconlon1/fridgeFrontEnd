import React from "react";
import Food from "./Food";

const FoodDetail = ({ food, handleDelete }) => {

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

    const onDelete = () => {
        handleDelete(food.id)
    }

    return (
        <div className="individualFoodItem">
            <h1 className="individualFoodItem">{food.name}</h1>
            <img src={food.image} className="individualFoodItem"></img>
            <h3 className="individualFoodItem">Recipes containing {food.name}: </h3>
            {allRecipes}
            <button onClick={(onDelete)} className="individualFoodItem">Delete {food.name}</button>
        </div>
    )

}

export default FoodDetail;