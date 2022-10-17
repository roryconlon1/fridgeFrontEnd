import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './navBar.css';

const NavBar = () => {

    return(
        <header>
<ul class="nav nav-pills nav-justified">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Ingredients</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Recipes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
        </header>
    )
}

export default NavBar;