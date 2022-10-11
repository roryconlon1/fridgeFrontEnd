import React from "react";
import Recipe from "./Recipe";
import Request from "../../helpers/request";

const RecipeDetail = ({recipe}) => {

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
            window.location = "/recipes"
        })
    }

    const handleNewIngredient = (food) => {
        const request = new Request();
        request.post("/api/recipes", food)
        .then (() => {
            window.location = "/recipes"
        })
    }

    const onDelete = () => {
        handleDelete(recipe.id)
    }

    const onPost = () => {
        handleNewIngredient()
    }

    return(
        <div className="foodItem">
            <h1>{recipe.name}</h1>
            <h2>Ingredients :</h2>
            <h3><i>{allFoods}</i></h3>
            <button onClick={(onDelete)}>Delete Recipe</button>
            <form>
                <select name="food"  defaultValue="select-food">
                    <option disabled value="select-food">
                        Select a new Ingredient
                    </option>
                </select>
                <button type="submit">Save</button>
            </form>
            {/* <button onClick={(onPost)}>Add Ingredient</button> */}
        </div>
    )
}

export default RecipeDetail;
