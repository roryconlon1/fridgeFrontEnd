import React, { memo, useState } from 'react'

const SelectedFood = (({select}) => {


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




    // const allRecipes = (select.length === 0) ? null : select.recipes.map((recipe, index) => {
    //     return (
    //         <div key={index}>
                
    //             <h4><i>{recipe.name}</i></h4>
    //         </div>
    //     )
    // })

  return (
    <div>SelectedFood
        {showSelected}
        {/* <p>{allRecipes}</p> */}
        {commonRecipes}
    </div>
    
  )
})


export default SelectedFood