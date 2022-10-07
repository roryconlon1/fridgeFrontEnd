import React, { useEffect, useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import FoodList from "../compoonents/FoodList";
import Request from "../helpers/request";

const FoodContainer = () => {


    const [foods, setFoods] = useState([])

    useEffect(() => {
        const request = new Request()
        request.get("/api/foods")
        .then((data) => {
            setFoods(data)
        })
    }, [])


    return(
        <div>
            <FoodList foods={foods}/>
        </div>
    )
}

export default FoodContainer;

{/* <Routes>
<Route path="/" element={<FoodList foods={foods}/>}/>
</Routes> */}