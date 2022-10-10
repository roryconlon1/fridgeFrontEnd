import React, { useEffect, useState } from "react";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import FoodList from "../components/foods/FoodList";
import Request from "../helpers/request";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import FoodDetail from "../components/foods/FoodDetail";
import FoodsForm from "../components/foods/FoodsForm";
import LastestFood from "../components/foods/LastestFood";

const FoodContainer = ({foodElements}) => {


    const [foods, setFoods] = useState([])
    const [filter, setFilter] = useState("")
    const [filterFoods, setfilterFoods] = useState([])

    useEffect(() => {
        const request = new Request()
        request.get("/api/foods")
            .then((data) => {
                setFoods(data)
            })
    }, [])

    useEffect (() => {
        const filteredResults = foods.filter(food => {
            return food.name.toLowerCase().includes(filter.toLowerCase())
        })
        setfilterFoods(filteredResults)
    }, [filter])

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

    const handleChange = (filtervalue) => {
        setFilter(filtervalue)
    }


    return (
        <div>
            <FoodsForm filter={filter} handleChange={handleChange}/>
            <LastestFood foods={filterFoods}/>
            <Routes>
                <Route path=":id" element={<FoodDetailWrapper/>} />
                <Route path="/" element={<FoodList foods={foods} />} />
            </Routes>
        </div>
    )
}

export default FoodContainer;
