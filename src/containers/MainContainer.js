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
import { useNavigate } from "react-router-dom";



const MainContainer = ({logout}) => {


    // Recipe
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [filter, setFilter] = useState("");
    const [filterRecipe, setfilterRecipe] = useState([]);


    //Food
    const [foods, setFoods] = useState([])
    const [filterFoods, setfilterFoods] = useState([])
    const [select, setSelected] = useState([])

    //User
    const [user, setUser] = useState([])


    const getRecipe = () => { 
        const request = new Request()
        request.get("/api/recipes")
            .then((data) => {
                setRecipes(data)
                setfilterRecipe(data);
            })
    }

    //Recipes
    useEffect(() => {
        getRecipe()
    }, [])


    const getFood = () => { 
        const request = new Request()
        request.get("/api/foods")
            .then((data) => {
                setFoods(data);
                setfilterFoods(data);
            })
    }

    //Food
    useEffect(() => {
        getFood()
    }, [])

    //Recipes
    useEffect(() => {
        const filteredResults = recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(filter.toLowerCase())
        })
        setfilterRecipe(filteredResults)
    }, [filter])

    //Food
    useEffect(() => {
        const filteredResults = foods.filter(food => {
            return food.name.toLowerCase().includes(filter.toLowerCase())
        })
        setfilterFoods(filteredResults)
    }, [filter])

    //Recipes
    const handlePost = (recipe) => {
        const request = new Request();
        request.post('/api/recipes', recipe)
            .then(() => {
                getRecipe()
                navigate('/recipes')
            })
    }
    
    //Food
    const handlePostFood = (food) => {
        const request = new Request();
        request.post('/api/foods', food)
            .then(() => {
                getFood()
                navigate('/foods')
            })
    }


    //Recipes
    const handleChange = (filtervalue) => {
        setFilter(filtervalue)
    };

    //Food
    const handleFoodChange = (filtervalue) => {
        setFilter(filtervalue)
    }

    //Recipe
    const findRecipeById = (id) => {
        return recipes.find((recipe) => {
            return recipe.id === parseInt(id)
        })
    }

    //Food
    const findFoodById = (id) => {
        return foods.find((food) => {
            return food.id === parseInt(id)
        })
    }

    //Recipe
    const RecipeDetailWrapper = () => {
        const { id } = useParams();
        let foundRecipe = findRecipeById(id)
        return <RecipeDetail recipe={foundRecipe} foods={foods} onStateChange={getRecipe} getRecipe={getRecipe}/>
    }

    //Food
    const FoodDetailWrapper = () => {
        const { id } = useParams();
        let foundFood = findFoodById(id)
        return <FoodDetail food={foundFood} handleDelete={handleDelete} onStateChange={getFood} />
    }

    //Food
    const onSelectedUpdate = (newSelected) => {
        const alreadyExists = select.some(value => value.id == newSelected.id)
        if(alreadyExists){
            return;
        }
        const copySelected = [...select, newSelected]
        setSelected(copySelected)
    };

    //Food
    const handleDelete = (id) => {
        const request = new Request();
        const url = "/api/foods/" + id;
        request.delete(url)
            .then(() => {
                getFood()
                navigate("/foods")
            })
    }

    //food
    const resetSelected = () =>{
        setSelected([])
    }

    //User
    const getUser = () => { 
        const request = new Request()
        request.get("/api/users")
            .then((data) => {
                setUser(data)
            })
    }

    useEffect(() => {
        getUser()
    }, [])


    return (

        <div>
            <NavBar logout={logout}/>
            <Routes>
                <Route path="/" element={<HomeContainer recipes={recipes}/>} />
                <Route path="/foods/*" element={<FoodContainer recipes={recipes} handleChange={handleFoodChange} filterFoods={filterFoods} FoodDetailWrapper={FoodDetailWrapper} foods={foods} onSelectedUpdate={onSelectedUpdate} onCreate={handlePostFood} select={select} resetSelected={resetSelected} user={user} />} />
                <Route path="/recipes/*" element={<RecipeContainer RecipeDetailWrapper={RecipeDetailWrapper} recipes={recipes} filter={filter} handleChange={handleChange} filterRecipe={filterRecipe} foods={foods} onCreate={handlePost} />} />
            </Routes>
        </div>
    )
}

export default MainContainer;