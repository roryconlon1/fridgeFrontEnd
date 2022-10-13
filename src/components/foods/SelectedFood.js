import React, { memo, useState } from 'react'

const SelectedFood = (({ select, recipes, resetSelected }) => {

    const [allRecipesForAllIngredients, setAllRecipesForAllIngredients] = useState([])


    const showSelected = select.map((item, index) => {
        return <div key={index}>{item.name}</div>
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
            return recipe.name
        }
    })

    const allRecipes = recipesId.map((recipe, index) => {
        return (
            <li>
                {recipe}
            </li>
        )
    })

    const resetClick = () =>{
        resetSelected()
        setAllRecipesForAllIngredients([])
    }



    const allRecipesForSelectedIngredients = select.map((food) => {
        return food.recipes.map((recipe) => {
            const alreadyExists = allRecipesForAllIngredients.some(value => value.id == recipe.id)
            if(!alreadyExists){
                const copyAll = [...allRecipesForAllIngredients, recipe]
                setAllRecipesForAllIngredients(copyAll)
            }
        })
    })


    
    const everyRecipeElemnt = allRecipesForAllIngredients.map((recipe, index) => {
            return <li key={index}>
            {recipe.name}
        </li>
        })
    




    return (
        <div className='components'>Selected Food:
            <p></p>
            {showSelected}
            <p></p>
            {allRecipes}
            <p></p>
            <ul>
                {everyRecipeElemnt}
            </ul>


            <button onClick={resetClick}>RESET FILTER</button>
        </div>

    )
})


export default SelectedFood