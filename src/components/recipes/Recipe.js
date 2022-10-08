import React, { Fragment } from "react";


const Recipe = ({recipe}) => {

    if(!recipe){
        return(
            <p>Loading. . .</p>
        )
    }

    // const allFoods = recipe.foods.map((food, index) => {
    //     return <div key={index}>
    //         {food.name}
    //     </div>
    // })

    return(
        <Fragment>
            <h1>
                {recipe.name}
            </h1>
        </Fragment>
    )

}
export default Recipe;