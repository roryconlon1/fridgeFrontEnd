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
import FoodDetail from "../components/foods/FoodDetail";


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
        return <RecipeDetail recipe={foundRecipe} foods={foods}/>
    }

    const handlePost = (recipe) => {
        const request = new Request();
        request.post('/api/recipes', recipe)
        .then(() => {
          window.location = '/recipes'
        })
      }

      const handlePostFood = (food) => {
        const request = new Request();
        request.post('/api/foods', food)
        .then(() => {
          window.location = '/foods'
        })
      }



    const [foods, setFoods] = useState([])
    const [foodFilter, setFoodFilter] = useState("")
    const [filterFoods, setfilterFoods] = useState([])
    const [select, setSelected] = useState([])

    useEffect(() => {
        const request = new Request()
        request.get("/api/foods")
            .then((data) => {
                setFoods(data)
            })
    }, [])

    useEffect (() => {
        const filteredResults = foods.filter(food => {
            return food.name.toLowerCase().includes(filter.toLowerCase())
        })
        setfilterFoods(filteredResults)
    }, [filter])

    const findFoodById = (id) => {
        return foods.find((food) => {
            return food.id === parseInt(id)
        })
    }

    const FoodDetailWrapper = () => {
        const { id } = useParams();
        let foundFood = findFoodById(id)
        return <FoodDetail food={foundFood} handleDelete={handleDelete}/>
    }

    const handleFoodChange = (filtervalue) => {
        setFilter(filtervalue)
    }

    const onSelectedUpdate = (newSelected)=> {
        const copySelected = [...select, newSelected]
        console.log(copySelected);
        setSelected(copySelected)
    };

    const handleDelete = (id) => {
        const request = new Request();
        const url = "/api/foods/" + id;
        request.delete(url)
        .then(() => {
            window.location = "/foods"
        })
    }

    return (

        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/foods/*" element={<FoodContainer recipes={recipes} filter={foodFilter} handleChange={handleFoodChange} filterFoods={filterFoods} FoodDetailWrapper={FoodDetailWrapper} foods={foods} onSelectedUpdate={onSelectedUpdate} onCreate={handlePostFood} select={select}/>} />
                <Route path="/recipes/*" element={<RecipeContainer RecipeDetailWrapper={RecipeDetailWrapper} recipes={recipes} filter={filter} handleChange={handleChange} filterRecipe={filterRecipe} foods={foods} onCreate={handlePost}/>} />
            </Routes>
        </div>
    )
}

export default MainContainer;