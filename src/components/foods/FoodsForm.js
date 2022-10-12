import React, { useState } from "react";

const FoodsForm = ({ onCreate }) => {

    const [stateIngredient, setStateIngredient] = useState({
        name: "",
        calories: 0,
        foodType: "",
        pantryFood: false,
        fridgeFood: false
    })

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copyIngredient = { ...stateIngredient }
        copyIngredient[propertyName] = (event.target.type === "checkbox") ? event.target.checked : event.target.value;
        setStateIngredient(copyIngredient);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(stateIngredient);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" onChange={handleChange} value={stateIngredient.name} />
                <input type="number" placeholder="Calories" name="calories" onChange={handleChange} value={parseInt(stateIngredient.calories)} />
                <label for="foods">Choose a Food Type:</label>
                <select id="foods" name="foodType" onChange={handleChange}>
                    <option value="CARBOHYDRATE">Carbohydrate</option>
                    <option value="PROTEIN">Protein</option>
                    <option value="FAT">Fat</option>
                    <option value="DAIRY">Dairy</option>
                    <option value="FRUIT">Fruit</option>
                    <option value="VEGETABLE">Vegetable</option>
                </select>
                <input type="checkbox" id="PantryFood" placeholder="PantryFood" name="pantryFood" onChange={handleChange} value={stateIngredient.pantryFood} />
                <label for="PantryFood">PantryFood</label>
                <input type="checkbox" id="FridgeFood" placeholder="FridgeFood" name="fridgeFood" onChange={handleChange} value={stateIngredient.fridgeFood} />
                <label for="FridgeFood">FridgeFood</label>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}


export default FoodsForm;



