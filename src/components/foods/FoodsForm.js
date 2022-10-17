import React, { useState } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FoodsForm = ({ onCreate }) => {

    const [stateIngredient, setStateIngredient] = useState({
        name: "",
        calories: 0,
        foodType: "",
        pantryFood: false,
        fridgeFood: false,
        image: ""
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

    const handleCancel = () => {
        setStateIngredient({
            name: "",
            calories: 0,
            foodType: "",
            pantryFood: false,
            fridgeFood: false,
            image: ""
        })
    }

    return (
        <div>
            <Form >
            <Form.Group widths='equal'>
                <Form.Field control='input' label="Name of food" type="text" placeholder="Name" name="name" onChange={handleChange} value={stateIngredient.name}/>
                <Form.Field control='input' label="Number of Calories" type="number" placeholder="Calories" name="calories" onChange={handleChange} value={parseInt(stateIngredient.calories)} />
                </Form.Group>
                <Form.Group widths='equal'>
               
                <Form.Field label="Food Category" control='select' id="foods" name="foodType" onChange={handleChange} >
                    <option value="CARBOHYDRATE">Carbohydrate</option>
                    <option value="PROTEIN">Protein</option>
                    <option value="FAT">Fat</option>
                    <option value="DAIRY">Dairy</option>
                    <option value="FRUIT">Fruit</option>
                    <option value="VEGETABLE">Vegetable</option>
                </Form.Field>
                </Form.Group>
                <Form.Group grouped className="checkbox">
                <Checkbox toggle label="Pantry Food" control="input" type="checkbox" id="PantryFood" placeholder="PantryFood" name="pantryFood" onChange={handleChange} value={stateIngredient.pantryFood} />
                <Checkbox toggle label="Fridge Food" control="input" type="checkbox" id="FridgeFood" placeholder="FridgeFood" name="fridgeFood" onChange={handleChange} value={stateIngredient.fridgeFood} />
                </Form.Group>
                <Form.Field control="input" label="Image" type="text" placeholder="Image" name="image" onChange={handleChange} value={stateIngredient.image} />
                <Button.Group>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button.Or/>
                <Button positive type="submit" onClick={handleSubmit}>Save</Button>
                </Button.Group>
            </Form>
        </div>
    )
}


export default FoodsForm;



