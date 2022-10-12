import React, {useState} from "react";

const RecipeSearchBar = ({handleChange}) => {
    
    const [filter, setFilter] = useState('');

    const handleInputChange = (event) => {
        const filterValue=event.target.value
        setFilter(filterValue);
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
            placeholder="Search through Recipes" 
        />
    </form>
    )
}

export default RecipeSearchBar;