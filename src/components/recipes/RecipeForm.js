import React, { useState } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'

const RecipeForm = ({onCreate}) => {


    const [stateRecipe, setStateRecipe] = useState ({
        name: "",
        recipeType: "",
        cookTime: 0,
        method: "",
        image: ""
    })

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copyRecipe = {...stateRecipe}
        copyRecipe[propertyName] = event.target.value;
        setStateRecipe(copyRecipe);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(stateRecipe);
    }

    const handleCancel = () => {
        setStateRecipe({
            name: "",
            recipeType: "",
            cookTime: 0,
            method: "",
            image: ""
        })
    }






    return(
        <div>
            <Form className="form">
                <Form.Group widths='equal'>
                <Form.Field control="input" label="Name" type="text" maxLength="250" placeholder="Name" name="name" onChange={handleChange} value={stateRecipe.name} className="formInput"/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Field label="Food Category" defaultValue={"default"} control='select' id="recipe" name="recipeType" onChange={handleChange} className="formInput">
                    <option value={"default"} disabled>Choose a Category</option>
                    <option value="SOUP">SOUP</option>
                    <option value="PASTA">PASTA</option>
                    <option value="SALAD">SALAD</option>
                    <option value="PIE">PIE</option>
                    <option value="FAMILY">FAMILY</option>
                    <option value="DIET">DIET</option>
                    <option value="DESERT">DESERT</option>
                </Form.Field>
                </Form.Group>
            
                <Form.Group widths='equal'>
                <Form.Field control="input" label="Cook Time" type="number"  placeholder="Cook Time" name="cookTime" onChange={handleChange} value={parseInt(stateRecipe.cookTime)} className="formInput"/>
                <Form.Field control="input" label="Method" type="text" placeholder="Method" maxLength="250" name="method" onChange={handleChange} value={stateRecipe.method} className="formInput"/>
                <Form.Field control="input" label="Image" type="text" placeholder="Image" maxLength="250" name="image" onChange={handleChange} value={stateRecipe.image} className="formInput"/>
                </Form.Group>
                <Button.Group>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button.Or/>
                <Button positive type="submit" onClick={handleSubmit}>Save</Button>
                </Button.Group>
            </Form>
        </div>
    )
}


export default RecipeForm;