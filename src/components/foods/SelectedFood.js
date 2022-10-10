import React, { memo, useState } from 'react'

const SelectedFood = (({select, recipes}) => {


    const showSelected = select.map((item, index) => {
        return <div key={index}>{item.name}</div>
    })
    console.log(select);

    const allRecipeId = select.map((food) => {
        return food.recipes.map ((recipe) => {
            return recipe.id
        })
    })

    const commonRecipes = allRecipeId.reduce((a, b) => {
        return b.filter(Set.prototype.has, new Set(a));
    }, allRecipeId[0]);

    const recipesId = recipes.map((recipe) => {
        if (commonRecipes && commonRecipes.includes(recipe.id)){
            return recipe.name
        }
    })



// help me
    // const allRecipes = (commonRecipes.length === 0) ? null : select.recipes.map((recipe, index) => {
    //     return (
    //         <div key={index}>
                
    //             <h4><i>{recipe.name}</i></h4>
    //         </div>
    //     )
    // })

    // const allRecipes = () => {
    //     if(parseInt(recipes.id) === parseInt(commonRecipes)){
    //         return recipes.name
    //     }
    // }


  return (
    <div>SelectedFood
        {showSelected}
        {/* <p>{allRecipes}</p> */}
        <p>{recipesId}</p>
        {/* {recipes.name} */}
        {/* {commonRecipes} */}
    </div>
    
  )
})


export default SelectedFood