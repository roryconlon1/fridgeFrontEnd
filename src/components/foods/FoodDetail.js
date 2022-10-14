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
        <div className="foodItem">
            <h1>{food.name}</h1>
            <img src={food.image}></img>
            <h3>Recipes containing {food.name}: </h3>
            {allRecipes}
            <button onClick={(onDelete)}>Delete {food.name}</button>
        </div>
    )

}

export default FoodDetail;