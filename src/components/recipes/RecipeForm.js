import React, { useState } from "react";

const RecipeForm = ({recipes}) => {

    if(!recipes){
        return "Loading...."
    }

    const [stateRecipe, setStateRecipe] = useState ={
        name: "",
        recipeType: null,
        coookTime: 0,
        method: ""
    }






    return(
        <div>
            Hello
            <form>
                <input type="text" placeholder="Name" name="name"/>
                <input type="number" placeholder="CookTime" name="cookTime"/>
                <input type="text" placeholder="Method" name="method"/>
            </form>
        </div>
    )
}


export default RecipeForm;