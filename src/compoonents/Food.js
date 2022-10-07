import React, { Fragment } from "react";

const Food = ({food}) => {


    if(!food){
        return(
            <p>Loading...</p>
            
        )
    }

    const allRecipes = food.recipes.map((recipe, index) => {
        return(
            <li key={index}>
                <ul>
                    <i>{recipe.name}</i>
                </ul>
            </li>
        )
    })


    // const url = "/foods/" 

    

    return(

        <Fragment>
        <h1>
            {food.name}{allRecipes}
        </h1>
        </Fragment>
    )
}

export default Food;