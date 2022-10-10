import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const Recipe = ({recipe}) => {

    if(!recipe){
        return(
            <p>Loading. . .</p>
        )
    }

 

    const url = "/recipes/" + recipe.id;

    return(
        <Fragment>
            <h1>
                <Link to={url} className="name">
                    {recipe.name}
                </Link>
            </h1>
        </Fragment>
    )

}
export default Recipe;