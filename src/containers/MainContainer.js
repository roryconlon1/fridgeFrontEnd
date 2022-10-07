import React, { Fragment } from "react";
import NavBar from "../navBar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomeContainer from "./HomeContainer";

const MainContainer = () => {

    return (

        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/foods/*" element={<FoodContainer />} />
                <Route path="/recipes/*" element={<RecipeContainer />} />
            </Routes>
        </div>
    )
}

export default MainContainer;

