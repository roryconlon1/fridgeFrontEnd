import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { Routes } from "react-router-dom";
import RecipeDetail from "../components/recipes/RecipeDetail";
import RecipeList from "../components/recipes/RecipeList";
import Request from "../helpers/request";

const RecipeContainer = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const request = new Request()
        request.get("/api/recipes")
            .then((data) => {
                setRecipes(data)
            })
    }, [])

    const findRecipeById = (id) => {
        return recipes.find((recipe) => {
            return recipe.id === parseInt(id)
        })
    }

    const RecipeDetailWrapper = () => {
        const { id } = useParams();
        let foundRecipe = findRecipeById(id)
        return <RecipeDetail recipe={foundRecipe}/>
    }

    return(
        <div>
            <Routes>
                <Route path="/" element={<RecipeList recipes={recipes}/>}></Route>
                <Route path=":id" element={<RecipeDetailWrapper/>}/>
            </Routes>
        </div>
    )
}

export default RecipeContainer;