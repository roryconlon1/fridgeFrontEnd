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
            <div key={index}>
                <ul>
                    <i>{recipe.name}</i>
                </ul>
            </div>
        )
    })


    const url = "/foods/" + food.id; 

    

    return(

        <Fragment>
        <h1>
            <Link to={url} className="name">
                {food.name}
            </Link>
        </h1>
        </Fragment>
    )
}

export default Food;