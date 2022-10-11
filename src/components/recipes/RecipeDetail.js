import React, { useState } from "react";
import Recipe from "./Recipe";
import Request from "../../helpers/request";
import Food from "../foods/Food";

const RecipeDetail = ({recipe, foods}) => {

    if(!recipe){
        return <p>Loading . . .</p>
    }

    // const [stateFood, setStateFood] = useState({
    //     id: recipe.id,
    //     name: recipe.name,
    //     recipeType: recipe.recipeType,
    //     cookTime: recipe.cookTime,
    //     method: recipe.method,
    //     Ingredients: [recipe.foods]
    // })

    // const updateIngredient = (event) => {
    //     let propertyname = event.target.name;
    //     let copiedFood = {...stateFood};
    //     Ingredients.push(event.target.value)
    //     copiedFood[propertyname] = event.target.value;
    //     setStateFood(copiedFood)
    // }

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
            window.location = "/recipes"
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
    
    


    return(
        <div className="foodItem">
            <h1>{recipe.name}</h1>
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
