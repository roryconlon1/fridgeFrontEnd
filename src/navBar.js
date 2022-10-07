import React from "react";

const NavBar = () => {

    return(
        <header>
            <ul className="navBar">
                <li className="nav_id">
                    <a href="/">Home</a>
                </li>
                <li className="nav_id">
                    <a href="/foods">Ingredients</a>
                </li>
                <li className="nav_id">
                    <a href="/recipes">Recipes</a>
                </li>
            </ul>
        </header>
    )
}

export default NavBar;