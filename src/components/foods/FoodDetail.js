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

    const nameOfFood = food.name.replace(/ *\([^)]*\) */g, "");

    return (
        <div className="individual">
            <h1 >{nameOfFood}</h1>
            <img src={food.image} ></img>
            <h3 >Recipes containing {nameOfFood}: </h3>
            {allRecipes}
            <button onClick={(onDelete)} >Delete {nameOfFood}</button>
        </div>
    )

}

export default FoodDetail;