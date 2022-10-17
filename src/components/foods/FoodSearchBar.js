import React, {useState} from "react";
import { Form } from "react-router-dom";
import { Grid, Search } from 'semantic-ui-react'

const FoodSearchBar = ({handleChange, searchResults}) => {
    const [filter, setFilter] = useState('');

    const handleInputChange = (event) => {
        const filterValue=event.target.value
        setFilter(filterValue);
        handleChange(filterValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const searchResultsText = searchResults.map((food) => {
        return {title:food.name, image:food.image}
    })

    return(    
        <Grid className="search">
            <Grid.Column width={4}>
            <form onSubmit={handleSubmit}>  
        <Search onSearchChange={handleInputChange}
        input={{ icon: 'search', iconPosition: 'left' }}
            type="text"
            value={filter}
            placeholder="Search through Ingredients" 
            results={searchResultsText}
        />
    </form>
            </Grid.Column>
        </Grid>  
   
    )
}

export default FoodSearchBar;