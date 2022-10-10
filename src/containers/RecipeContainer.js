import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { Routes } from "react-router-dom";
import RecipeDetail from "../components/recipes/RecipeDetail";
import RecipeList from "../components/recipes/RecipeList";
import Request from "../helpers/request";
import RecipesForm from "../components/foods/FoodsForm";
import LastestRecipe from "../components/recipes/LastestRecipe";

const RecipeContainer = ({recipes, RecipeDetailWrapper, filterRecipe, handleChange, filter}) => {


    return(
        <div>
            <RecipesForm filter={filter} handleChange={handleChange}/>
            <LastestRecipe recipes={filterRecipe}/>
            <Routes>
                <Route path="/" element={<RecipeList recipes={recipes}/>}></Route>
                <Route path=":id" element={<RecipeDetailWrapper/>}/>
            </Routes>
        </div>
    )
}

export default RecipeContainer;