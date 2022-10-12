import React, {useState} from "react";

const FoodSearchBar = ({handleChange}) => {
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
            placeholder="Search through Ingredients" 
        />
    </form>
    )
}

export default FoodSearchBar;