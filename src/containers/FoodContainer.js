import React, { useEffect, useState } from "react";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import FoodList from "../compoonents/FoodList";
import Request from "../helpers/request";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import FoodDetail from "../compoonents/FoodDetail";

const FoodContainer = ({foodElements}) => {


    const [foods, setFoods] = useState([])

    useEffect(() => {
        const request = new Request()
        request.get("/api/foods")
            .then((data) => {
                setFoods(data)
            })
    }, [])

    const findFoodById = (id) => {
        return foods.find((food) => {
            return food.id === parseInt(id)
        })
    }

    const FoodDetailWrapper = () => {
        const { id } = useParams();
        let foundFood = findFoodById(id)
        return <FoodDetail food={foundFood} />
    }


    return (
        <div>
            <Routes>
                <Route path=":id" element={<FoodDetailWrapper/>} />
                <Route path="/" element={<FoodList foods={foods} />} />
            </Routes>
        </div>
    )
}

export default FoodContainer;
