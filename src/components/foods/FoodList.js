import React from "react";
import Select from "react-select/lib/Select";
import Food from "./Food";
import SelectedFood from "./SelectedFood";
import { Link } from "react-router-dom";

const FoodList = ({foods, onSelectedUpdate, select, recipes, resetSelected, user}) => {

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

    const userElements = user.map((u, index) => {
        return <h2>{u.id}</h2>
    })


    const url = "/foods/new"


    return(
        <div>
        <Link className="new_recipe_food" to={url}>Add a new Ingredient</Link>
        <ul className="components-list wrap">
            {foodElements}
        </ul>
        <li>
            {select ? <SelectedFood select={select} recipes={recipes} resetSelected={resetSelected}/> : null}
        </li>
        </div>
    )

}

export default FoodList;

