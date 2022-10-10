import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import RecipeList from "../components/recipes/RecipeList";
import Request from "../helpers/request";
import RecipesForm from "../components/foods/FoodsForm";
import LastestRecipe from "../components/recipes/LastestRecipe";

const RecipeContainer = () => {

    const [recipes, setRecipes] = useState([]);
    const [filter, setFilter] =useState("");
    const [filterRecipe, setfilterRecipe] = useState([]);

    useEffect(() => {
        const request = new Request()
        request.get("/api/recipes")
            .then((data) => {
                setRecipes(data)
            })
    }, [])

    useEffect (() => {
        const filteredResults = recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(filter.toLowerCase())
        })
        setfilterRecipe(filteredResults)
    }, [filter])

    const handleChange = (filtervalue) => {
        setFilter(filtervalue)
    }

    return(
        <div>
            <RecipesForm filter={filter} handleChange={handleChange}/>
            <LastestRecipe recipes={filterRecipe}/>
            <Routes>
                <Route path="/" element={<RecipeList recipes={recipes}/>}></Route>
            </Routes>
        </div>
    )
}

export default RecipeContainer;