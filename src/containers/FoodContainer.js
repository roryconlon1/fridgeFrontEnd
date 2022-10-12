import React, { useEffect, useState } from "react";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import FoodList from "../components/foods/FoodList";
import Request from "../helpers/request";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import FoodsForm from "../components/foods/FoodsForm";
import LastestFood from "../components/foods/SearchBarDisplayFood";
import SelectedFood from "../components/foods/SelectedFood";
import FoodDetail from "../components/foods/FoodDetail";
import FoodSearchBar from "../components/foods/FoodSearchBar";

const FoodContainer = ({recipes, handleChange, foods, onSelectedUpdate, select, filterFoods, FoodDetailWrapper, onCreate}) => {




    return (
        <div>
            <FoodSearchBar handleChange={handleChange}/>
            <LastestFood filterFoods={filterFoods}/>
            <Routes>
                <Route path=":id" element={<FoodDetailWrapper />} />
                <Route path="/" element={<FoodList foods={filterFoods} onSelectedUpdate={onSelectedUpdate} select={select} recipes={recipes}/>} />
                <Route path="/new" element={<FoodsForm foods={foods} onCreate={onCreate}/>}/>
            </Routes>
        </div>
    )
}

export default FoodContainer;
