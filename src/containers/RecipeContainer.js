import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
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

    return(
        <div>
            <Routes>
                <Route path="/" element={<RecipeList recipes={recipes}/>}></Route>
            </Routes>
        </div>
    )
}

export default RecipeContainer;