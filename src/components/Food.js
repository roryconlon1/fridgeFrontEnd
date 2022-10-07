import React, { Fragment } from "react";

const Food = ({food}) => {


    // if(!food){
    //     return(
    //         <p>Loading...</p>
            
    //     )
    // }

    // const url = "/foods/" 

    return(

        <Fragment>
        <p>
            {food.calories}
        </p>
        </Fragment>
    )
}

export default Food;