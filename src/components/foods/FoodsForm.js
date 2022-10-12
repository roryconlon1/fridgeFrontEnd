import React, { useState } from "react";

const FoodsForm = ({onCreate}) => {

    const [stateIngredient, setStateIngredient] = useState ({
        name: "",
        calories: 0,
        footType: null,
        pantryFood: "",
        fridgeFood: ""
    })

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copyIngredient = {...stateIngredient}
        copyIngredient[propertyName] = event.target.value;
        setStateIngredient(copyIngredient);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(stateIngredient);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" onChange={handleChange} value={stateIngredient.name}/>
                <input type="number" placeholder="Calories" name="calories" onChange={handleChange} value={parseInt(stateIngredient.calories)}/>
                <input type="checkbox" id="PantryFood" placeholder="PantryFood" name="pantryFood" onChange={handleChange} value={stateIngredient.pantryFood}/>
                <label for="PantryFood">PantryFood</label>
                <input type="checkbox" id="FridgeFood" placeholder="FridgeFood" name="fridgeFood" onChange={handleChange} value={stateIngredient.fridgeFood}/>
                <label for="FridgeFood">FridgeFood</label>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default FoodsForm;


