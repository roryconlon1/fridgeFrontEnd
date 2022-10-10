import React from "react";
import Food from "./Food";

const LastestFood = ({foods}) => {    
    const foodsItems = foods.map((food, index) => {
        return <Food food={food} key = {index}/>  
    })



    return (
        <div>
            <ul>
                {foodsItems}
            </ul>
        </div>
    )
}


export default LastestFood;