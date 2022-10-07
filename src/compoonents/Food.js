import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Food = ({food}) => {


    if(!food){
        return(
            <p>Loading...</p>
            
        )
    }

    const allRecipes = food.recipes.map((recipe, index) => {
        return(
            <li key={index} >
                <ul>
                    <i>{recipe.name}</i>
                </ul>
            </li>
        )
    })


    const url = "/foods/" + food.id; 

    

    return(

        <Fragment>
        <p>
            <Link to={url} className="name">
                {food.name}
            </Link>
        </p>
        <h1 className="foodItem">
            {food.name}
        </h1>
        </Fragment>
    )
}

export default Food;