import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'

const SelectedFood = (({ select, recipes, resetSelected }) => {

    const [allRecipesForAllIngredients, setAllRecipesForAllIngredients] = useState([])


    const showSelected = select.map((item, index) => {
        const nameOfFood = item.name.replace(/ *\([^)]*\) */g, "");
        return <div key={index}>{nameOfFood}</div>
    })

    const allRecipeId = select.map((food) => {
        return food.recipes.map((recipe) => {
            return recipe.id
        })
    })

    const commonRecipes = allRecipeId.reduce((a, b) => {
        return b.filter(Set.prototype.has, new Set(a));
    }, allRecipeId[0]);

    const recipesId = recipes.map((recipe) => {
        if (commonRecipes && commonRecipes.includes(recipe.id)) {
            return <Link to={"/recipes/" + recipe.id}>{recipe.name}</Link>
        }
    })

    const allRecipes = recipesId.map((recipe, index) => {
        return (
            <li>
                {recipe}
            </li>
        )
    })

    const resetClick = () => {
        resetSelected()
        setAllRecipesForAllIngredients([])
    }



    const allRecipesForSelectedIngredients = select.map((food) => {
        return food.recipes.map((recipe) => {
            const alreadyExists = allRecipesForAllIngredients.some(value => value.id == recipe.id)
            if (!alreadyExists) {
                const copyAll = [...allRecipesForAllIngredients, recipe]
                setAllRecipesForAllIngredients(copyAll)
            }
        })
    })


    const everyRecipeElemnt = allRecipesForAllIngredients.map((recipe, index) => {
        return <li key={index}>
            <Link to={"/recipes/" + recipe.id}>{recipe.name}</Link>
        </li>
    })

    return (
        <div className='components'>
            <div className='recipe_lists'>
                <div className='individual_recipe_lists'>
                    <h1 className='recipeListColumn'>Ingredient:</h1>
                    <p></p>
                    {showSelected}
                </div>
                <div className='individual_recipe_lists'>
                    <p></p>
                    <h1 className='recipeListColumn'>All Recipes:</h1>
                    <p></p>
                    {everyRecipeElemnt}
                </div>
                <div className='individual_recipe_lists'>
                <h1 className='recipeListColumn'>Recipes containing all selected Ingredients:</h1>
                    {allRecipes}
                </div>
            </div>



            <button onClick={resetClick}>RESET FILTER</button>
        </div>

    )
})


export default SelectedFood