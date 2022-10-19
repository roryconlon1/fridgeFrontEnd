import React, { useState } from "react";
import Recipe from "./Recipe";
import Request from "../../helpers/request";
import Food from "../foods/Food";
import { useNavigate } from "react-router-dom";


const RecipeDetail = ({recipe, foods, getRecipe}) => {

    const navigate = useNavigate()

    if(!recipe){
        return <p>Loading . . .</p>
    }


    const ingredientQuantity = {}
    recipe.foods.forEach((food, index) => {
            if(food.name in ingredientQuantity){
                ingredientQuantity[food.name] += 1
            }
            else {
                ingredientQuantity[food.name] = 1
            }
        });
        const ingredientElements = Object.entries(ingredientQuantity).map(([key, value])=>{
            return  <li>{value} x {key}</li>
        })

    const handleDelete = (id) => {
        const request = new Request();
        const url = "/api/recipes/" + id;
        request.delete(url)
        .then(() => {
            getRecipe()
            navigate("/recipes")
        })
    }

    const handleNewIngredient = (foodId) => {
        const request = new Request();
        request.put(`/api/recipes/${recipe.id}/addIngredient/${foodId}`)
        .then (() => {
            getRecipe()
            navigate(`/recipes/${recipe.id}`)
            
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
        const nameOfFood = food.name.replace(/ *\([^)]*\) */g, "");
        return <option key={index} value={food.id}>{nameOfFood}</option>
    })

    const allCalories = recipe.foods.reduce((runningTotal, food) => {
        return(
            runningTotal += food.calories
        )
    }, 0)
    
    


    return(
        <div className="recipeName">
            <h1 className="recipeNameSize">{recipe.name}</h1>
        <div className="individualRecipe">
            <div className="lhsRecipe">
            <h2>Total Calories: </h2>
            <h2>{allCalories}</h2>
            <h2>Cooking Time: </h2>
            <h2>{recipe.cookTime} minutes</h2>
            </div>
            <img src={recipe.image} className="recipeImage"></img>
            <h2>Ingredients :</h2>
            <h3><i>{ingredientElements}</i></h3>
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
        <div className="recipeName">
        <h2>How to make {recipe.name}</h2>
        <h3 className="method">{recipe.method}</h3>
        </div>
        </div>
    )
}


export default RecipeDetail;
