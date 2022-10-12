import React, { useEffect, useState } from "react";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import FoodList from "../components/foods/FoodList";
import Request from "../helpers/request";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import FoodsForm from "../components/foods/FoodsForm";
import LastestFood from "../components/foods/LastestFood";
import SelectedFood from "../components/foods/SelectedFood";
import FoodDetail from "../components/foods/FoodDetail";

const FoodContainer = ({foodElements, recipes, filter, handleChange, foods, onSelectedUpdate, select, filterFoods, FoodDetailWrapper, onCreate}) => {

    return (
        <div>
            <LastestFood foods={filterFoods}/>
            <Routes>
                <Route path=":id" element={<FoodDetailWrapper />} />
                <Route path="/" element={<FoodList foods={foods} onSelectedUpdate={onSelectedUpdate} select={select} recipes={recipes}/>} />
                <Route path="/new" element={<FoodsForm foods={foods} onCreate={onCreate}/>}/>
            </Routes>
        </div>
    )
}

export default FoodContainer;
