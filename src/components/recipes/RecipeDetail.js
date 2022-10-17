import React, { useState } from "react";
import Recipe from "./Recipe";
import Request from "../../helpers/request";
import Food from "../foods/Food";
import { useNavigate } from "react-router-dom";

const RecipeDetail = ({recipe, foods, onStateChange}) => {

    const navigate = useNavigate();

    if(!recipe){
        return <p>Loading . . .</p>
    }

    const allFoods = recipe.foods.map((food, index) => {
        return <div key={index}>
            {food.name}
        </div>
    })

    const handleDelete = (id) => {
        const request = new Request();
        const url = "/api/recipes/" + id;
        request.delete(url)
        .then(() => {
            onStateChange()
            navigate("/recipes")
        })
    }

    const handleNewIngredient = (foodId) => {
        const request = new Request();
        request.put(`/api/recipes/${recipe.id}/addIngredient/${foodId}`)
        .then (() => {
            window.location = `/recipes/${recipe.id}`
        })
    }

    const onDelete = () => {
        handleDelete(recipe.id)
    }

    const onPost = (event) => {
        event.preventDefault();
        console.log(event.target);
        handleNewIngredient(event.target.food.value)
    }

    const allIngredients = foods.map((food, index) => {
        return <option key={index} value={food.id}>{food.name}</option>
    })

    const allCalories = recipe.foods.reduce((runningTotal, food) => {
        return(
            runningTotal += food.calories
        )
    }, 0)
    
    


    return(
        <div className="individual">
            <h1>{recipe.name}</h1>
            {/* <h2>{recipe.cookTime}</h2> */}
            <h2>Total Calories: </h2>
            <h2>{allCalories}</h2>
            <h3>{recipe.method}</h3>
            <h3>{recipe.recipeType}</h3>
            <img src={recipe.image}></img>
            <h2>Ingredients :</h2>
            <h3><i>{allFoods}</i></h3>
            <button onClick={(onDelete)}>Delete Recipe</button>
            <form onSubmit={onPost}>
                <select name="food"  defaultValue="select-food">
                    <option disabled value="select-food">
                        Select a new Ingredient
                    </option>
                    {allIngredients}
                </select>
                <button type="submit">Add Ingredient</button>
            </form>
            
        </div>
    )
}

export default RecipeDetail;
