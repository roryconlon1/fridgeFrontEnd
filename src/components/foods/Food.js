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



    return (

        <Card color="brown" className="cardStyle">
            <Image src={food.image} alt={food.name}  className="img"/>
            <Card.Content className="cardStyle">
                <Card.Header>
                    <Card.Content extra>
                        <a>
                            <Icon name='food' />
                            <Link to={url} className="name">
                        {food.name}
                    </Link>
                        </a>
                    </Card.Content>
                
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
            <Button onClick={handleClick} basic color="black" >Add {food.name} to list</Button>
            </Card.Content>
        </Card>
    )
}

export default Food;