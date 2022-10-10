import React from "react";

const RecipesForm = ({filter, handleChange}) => {

    const handleInputChange = (event) => {
        const filterValue=event.target.value
        handleChange(filterValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(      
        <form onSubmit={handleSubmit}>              
        <input onChange={handleInputChange}
            type="text"
            value={filter}
            placeholder="Search through Ingredients" 
        />
    </form>
    )
}

export default RecipesForm;