import React from "react";
import { Link } from "react-router-dom";
import {Menu} from "semantic-ui-react";

const NavBar = ({logout}) => (
    <Menu secondary >
        {/* <ul className="navBar"> */}
        <Menu.Item name="Home" className="navbar">
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item name="Ingredients" className="navbar">
            <Link to="/foods">Ingredients</Link>
        </Menu.Item>
        <Menu.Item name="Ingredients">
            <Link to="/recipes" className="navbar">Recipes</Link>
        </Menu.Item>
        <Menu.Menu position="right" className="logout">
        <Menu.Item name="Logout" onClick={logout}>

        </Menu.Item>
        </Menu.Menu>
    </Menu>
)

export default NavBar;