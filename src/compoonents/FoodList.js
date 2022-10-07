import React from "react";
import Food from "./Food";

const FoodList = ({foods}) => {

    if(foods.length === 0){
        return(
            <p>Loading...</p>
        )
    }

    const foodElements = foods.map((food, index) => {
        return(
            <li key={index} className="foodList wrap">
                <div className="fooditem">
                    <Food food={food}/>
                    <p>

        </p>
                </div>
            </li>
        )
    })
    


    return(
        <ul className="components-list wrap">
            {foodElements}
        </ul>
    )

}

export default FoodList;

