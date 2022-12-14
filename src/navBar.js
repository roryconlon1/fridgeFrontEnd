import React from "react";
import { Link } from "react-router-dom";
import {Menu} from "semantic-ui-react";

const NavBar = ({logout}) => (
    <Menu secondary >
        {/* <ul className="navBar"> */}
        <Menu.Item name="Home" className="link">
            <Link to="/" className="nav item">Home</Link>
        </Menu.Item>
        <Menu.Item name="Ingredients" className="link" >
            <Link to="/foods" className="nav item">Ingredients</Link>
        </Menu.Item>
        <Menu.Item name="Recipes" className="link">
            <Link to="/recipes" className="nav item">Recipes</Link>
        </Menu.Item>
        <Menu.Menu position="right" className="logout">
        <Menu.Item name="Logout" onClick={logout}>

        </Menu.Item>
        </Menu.Menu>
    </Menu>
)

export default NavBar;