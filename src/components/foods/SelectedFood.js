import React, { memo, useState } from 'react'

const SelectedFood = (({ select, recipes }) => {


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


    return (
        <div className='components'>Selected Food:
            <p></p>
            {showSelected}
            <p></p>
            {allRecipes}
        </div>

    )
})


export default SelectedFood