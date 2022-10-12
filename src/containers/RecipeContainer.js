import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { Routes } from "react-router-dom";
import RecipeDetail from "../components/recipes/RecipeDetail";
import RecipeList from "../components/recipes/RecipeList";
import Request from "../helpers/request";
import LastestRecipe from "../components/recipes/LastestRecipe";
import RecipeForm from "../components/recipes/RecipeForm";

const RecipeContainer = ({recipes, RecipeDetailWrapper, filterRecipe, handleChange, filter, foods, onCreate}) => {




    return(
        <div>
            <LastestRecipe recipes={filterRecipe}/>
            <Routes>
                <Route path="/" element={<RecipeList recipes={recipes}/>}></Route>
                <Route path=":id" element={<RecipeDetailWrapper/>}/>
                <Route path="/new" element={<RecipeForm foods={foods} onCreate={onCreate}/>}/>
            </Routes>
        </div>
    )
}

export default RecipeContainer;