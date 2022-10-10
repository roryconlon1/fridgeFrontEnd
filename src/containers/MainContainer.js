import React, { Fragment } from "react";
import NavBar from "../navBar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomeContainer from "./HomeContainer";
import FoodContainer from "./FoodContainer";
import RecipeContainer from "./RecipeContainer";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeDetail from "../components/recipes/RecipeDetail";
import Request from "../helpers/request";


const MainContainer = () => {

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
        setFilter(filtervalue)};

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

    return (

        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/foods/*" element={<FoodContainer recipes={recipes}/>} />
                <Route path="/recipes/*" element={<RecipeContainer RecipeDetailWrapper={RecipeDetailWrapper} recipes={recipes} filter={filter} handleChange={handleChange} filterRecipe={filterRecipe} />} />
            </Routes>
        </div>
    )
}

export default MainContainer;





//     return(
//         <div>
//             <RecipesForm filter={filter} handleChange={handleChange}/>
//             <LastestRecipe recipes={filterRecipe}/>
//             <Routes>
//                 <Route path="/" element={<RecipeList recipes={recipes}/>}></Route>
//                 <Route path=":id" element={<RecipeDetailWrapper/>}/>
//             </Routes>
//         </div>
//     )
// }

// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Route, useParams } from "react-router-dom";
// import { Routes } from "react-router-dom";
// import RecipeDetail from "../components/recipes/RecipeDetail";
// import RecipeList from "../components/recipes/RecipeList";
// import Request from "../helpers/request";
// import RecipesForm from "../components/foods/FoodsForm";
// import LastestRecipe from "../components/recipes/LastestRecipe";

