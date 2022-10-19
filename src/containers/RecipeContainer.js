import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { Routes } from "react-router-dom";
import RecipeDetail from "../components/recipes/RecipeDetail";
import RecipeList from "../components/recipes/RecipeList";
import Request from "../helpers/request";
import RecipeForm from "../components/recipes/RecipeForm";
import RecipeSearchBar from "../components/recipes/RecipeSearchBar";
import SearchBarDisplayRecipe from "../components/recipes/SearchBarDisplayRecipe";


const RecipeContainer = ({RecipeDetailWrapper, filterRecipe, handleChange, foods, onCreate}) => {




    return(
        <div>
            <RecipeSearchBar handleChange={handleChange} searchResults={filterRecipe}/>
            <SearchBarDisplayRecipe recipes={filterRecipe}/>
            <Routes>
                <Route path="/" element={<RecipeList recipes={filterRecipe}/>}></Route>
                <Route path=":id" element={<RecipeDetailWrapper/>}/>
                <Route path="/new" element={<RecipeForm foods={foods} onCreate={onCreate}/>}/>
            </Routes>
        </div>
    )
}

export default RecipeContainer;