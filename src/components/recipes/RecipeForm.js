import React, { useState } from "react";

const RecipeForm = ({onCreate}) => {


    const [stateRecipe, setStateRecipe] = useState ({
        name: "",
        recipeType: null,
        cookTime: 0,
        method: ""
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
            Hello
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" onChange={handleChange} value={stateRecipe.name}/>
                <input type="number" placeholder="Cook Time" name="cookTime" onChange={handleChange} value={parseInt(stateRecipe.cookTime)}/>
                <input type="text" placeholder="Method" name="method" onChange={handleChange} value={stateRecipe.method}/>
                <button type="submit">Save</button>
            </form>
            <p>Hello</p>
        </div>
    )
}


export default RecipeForm;