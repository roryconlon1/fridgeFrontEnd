import React, {useState} from "react";
import { Grid, Search } from "semantic-ui-react";

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
        <Grid className="search">
        <Grid.Column width={4}>
        <form onSubmit={handleSubmit}>  
    <Search onSearchChange={handleInputChange}
    input={{ icon: 'search', iconPosition: 'left' }}
        type="text"
        value={filter}
        placeholder="Search through Recipes" 
        results={filter}
    />
</form>
        </Grid.Column>
    </Grid> 
    )
}

export default RecipeSearchBar;