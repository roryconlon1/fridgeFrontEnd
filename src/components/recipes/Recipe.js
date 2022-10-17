import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";


const Recipe = ({recipe}) => {

    if(!recipe){
        return(
            <p>Loading. . .</p>
        )
    }

 

    const url = "/recipes/" + recipe.id;

    return(
        <Card color="brown" className="cardStyle">
            <Link to={url}>
            <Image src={recipe.image} alt={recipe.name} className="img"/>
            </Link>
            <Card.Content className="cardStyle">
                <Card.Header>
                    <Card.Content extra>
                            <Icon name="food"/>
                            {recipe.name}
                    </Card.Content>
                </Card.Header>
            </Card.Content>
        </Card>
    )

}
export default Recipe;