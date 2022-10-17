import React from "react";
import { Link } from "react-router-dom";
import {Menu} from "semantic-ui-react";

const NavBar = ({logout}) => (
    <Menu secondary>
        {/* <ul className="navBar"> */}
        <Menu.Item name="Home">
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item name="Ingredients">
            <Link to="/foods">Ingredients</Link>
        </Menu.Item>
        <Menu.Item name="Ingredients">
            <Link to="/recipes">Recipes</Link>
        </Menu.Item>
        <Menu.Item name="Logout" onClick={logout}>

        </Menu.Item>
    </Menu>
)

export default NavBar;