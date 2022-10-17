import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <header>
            <ul className="navBar">
                <li className="nav_id">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav_id">
                    <Link to="/foods">Ingredients</Link>
                </li>
                <li className="nav_id">
                    <Link to="/recipes">Recipes</Link>
                </li>
            </ul>
        </header>
    )
}

export default NavBar;