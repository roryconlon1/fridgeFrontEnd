import React, { useState } from "react";

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






    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="Name" name="name" onChange={handleChange} value={stateRecipe.name} className="formInput"/>
                <select id="recipe" name="recipeType" onChange={handleChange} className="formInput">
                    <option value="SOUP">SOUP</option>
                    <option value="PASTA">PASTA</option>
                    <option value="SALAD">SALAD</option>
                    <option value="PIE">PIE</option>
                    <option value="FAMILY">FAMILY</option>
                    <option value="DIET">DIET</option>
                    <option value="DESERT">DESERT</option>
                </select>
                <input type="number" placeholder="Cook Time" name="cookTime" onChange={handleChange} value={parseInt(stateRecipe.cookTime)} className="formInput"/>
                <input type="text" placeholder="Method" name="method" onChange={handleChange} value={stateRecipe.method} className="formInput"/>
                <input type="text" placeholder="Image" name="image" onChange={handleChange} value={stateRecipe.image} className="formInput"/>
                <button type="submit" className="formInput">Save</button>
            </form>
        </div>
    )
}


export default RecipeForm;

