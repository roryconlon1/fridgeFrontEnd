import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon, Button } from "semantic-ui-react";

const Food = ({ food, onSelectedUpdate }) => {


    if (!food) {
        return (
            <p>Loadsing...</p>

        )
    }

    const handleClick = () => {
        onSelectedUpdate((food))
    }


    // const allRecipes = food.recipes.map((recipe, index) => {
    //     return(
    //         <div key={index}>
    //             <ul>
    //                 <i>{recipe.name}</i>
    //             </ul>
    //         </div>
    //     )
    // })


    const url = "/foods/" + food.id;

    const nameOfFood = food.name.replace(/ *\([^)]*\) */g, "");

    return (

        <Card color="brown" className="cardStyle">
            <Link to={url}>
            <Image src={food.image} alt={nameOfFood}  className="img"/>
            </Link>
            <Card.Content className="cardStyle">
                <Card.Header>
                    <Card.Content extra>
                            <Icon name='food' />
                            {nameOfFood}
                    </Card.Content>
                
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
            <Button onClick={handleClick} basic color="black" >Add {nameOfFood} to list</Button>
            </Card.Content>
        </Card>
    )
}

export default Food;