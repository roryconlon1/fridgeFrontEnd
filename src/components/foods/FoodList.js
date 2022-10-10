import React from "react";
import Select from "react-select/lib/Select";
import Food from "./Food";
import SelectedFood from "./SelectedFood";

const FoodList = ({foods, onSelectedUpdate, select}) => {

    if(foods.length === 0){
        return(
            <p>Loading...</p>
        )
    }

    const foodElements = foods.map((food, index) => {
        return(
            <li key={index} className="foodList wrap">
                <div className="fooditem">
                    <Food food={food} onSelectedUpdate={onSelectedUpdate}/>
                </div>
            </li>
        )
    })

    
    


    return(
        <div>
        <ul className="components-list wrap">
            {foodElements}
        </ul>
        <li>
            {select ? <SelectedFood select={select}/> : null}
        </li>
        </div>
    )

}

export default FoodList;

