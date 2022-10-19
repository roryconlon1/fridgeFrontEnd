import React, { useState } from "react";
import Welcome from '../images/welcome.png';
import Placeholder from '../images/video-placeholder.jpeg'
import './HomeCon.css';
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import RedFig from '../images/RedFig1.png'
import RedFig2 from '../images/RedFig2.png'
import RedFig3 from '../images/RedFig7.png'
import RedFig4 from '../images/RedFig4.png'
import RedFig5 from '../images/RedFig5.png'
import RedFig6 from '../images/RedFig8.png'
import Rory from '../images/Rory.jpg'



const HomeContainer = ({recipes}) => {

    const allRecipeImages = recipes.map((recipe) => {
        if(recipe.image === "https://images-gmi-pmc.edge-generalmills.com/a055d263-34ed-412e-a000-28899e84d501.jpg")
            return recipe.image
        });

    const [logo, setLogo] = useState(["R", "e", "D", "F", "i", "G"]);

    const elementsOfLogo = logo.map((letter) => {
        return letter
    })

    const handleClick = () => {
        logo.includes("e") ? setLogo(["F", "R", "I", "D", "G", "E"]) : setLogo(["R", "e", "D", "F", "i", "G"]);
    }

    return (
        <div>
            <body>

                {/* <header>
                    <div class="wrapper">
                        <h1>Simply<span class="color">.</span></h1>
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </nav>
                    </div>
                </header> */}
                {/* add multiple elements to array for amount of each ingredient needed */}
                <div>
                </div>

                <body>

                    <center>
                        <marquee behavior="alternate" direction="left" truespeed="12">
                            <img src={RedFig}
                                alt="GeeksforGeeks logo" />
                            <img src={RedFig4}
                                alt="GeeksforGeeks logo" />
                            <img src={RedFig5}
                                alt="GeeksforGeeks logo" />
                        </marquee>
                        <div className="appName">
                            {elementsOfLogo}
                            <Button onClick={handleClick} circular icon="sort" />
                        </div>

                        <marquee behavior="alternate" direction="right" truespeed="12">
                            <img src={RedFig2}
                                alt="GeeksforGeeks logo" />
                            <img src={RedFig3}
                                alt="GeeksforGeeks logo" />
                            <img src={RedFig6}
                                alt="GeeksforGeeks logo" />
                        </marquee>
                    </center>

                </body>
                {/* <body>

                    <div class="bg-image img1"></div>
                    <div class="bg-image img2"></div>
                    <div class="bg-image img3"></div>
                    <div class="bg-image img4"></div>
                    <div class="bg-image img5"></div>
                    <div class="bg-image img6"></div>

                    <div class="bg-text">TEXT</div>

                </body> */}


                {/* <div id="welcome.png">
                    <img src={Welcome} alt="Welcome" />
                    <h2>IMAGE PLACEHOLDER</h2>
                    <a>IMAGE PLACEHOLDER</a>

                </div>

                </div> */}


                <div id="features">
                    <div class="wrapper">
                        <ul>
                            <li class="feature-1">
                                <h4>Easy to Track</h4>
                                <p>Helpful little tool to make your meal time less of a chore! Fill up your fridge with what items you have and we will do the rest!</p>
                            </li>
                            <li class="feature-2">
                                <h4>Plan your Week</h4>
                                <p>Set out your week! No need to worry, this app will take a weight off your mind!</p>
                            </li>
                            <li class="feature-3">
                                <h4>Ready to Go</h4>
                                <p>Fire up the app! Anytime anywhere! We will know what you have and what your going to be making!</p>
                            </li>
                            <div class="clear"></div>
                        </ul>
                    </div>
                </div>

                <div id="primary-content">
                    <div class="wrapper">
                        <article>
                            <h3>Featured Content</h3>
                            <p>Looking for dinner inspiration? Our cosy, budget-friendly autumnal recipes are ideal for cooler evenings. They make use of seasonal produce and cheap storecupboard ingredients. Try our Mushroom Strogganoff, A few clever substitutions can make this traditional creamy casserole low in fat and calories! </p>
                            <Link to={"/recipes/8"}><img src="https://images-gmi-pmc.edge-generalmills.com/a055d263-34ed-412e-a000-28899e84d501.jpg" alt="video placeholder" /></Link>
                        </article>
                    </div>
                </div>


                <div id="cta">
                    <div class="wrapper">
                        <h3>Heard Enough?</h3>
                        <p>Now that you know all about us and how we can make meal times a breeze! Hit that get started button and start the journey to an easy life!</p>
                        <Link to="/foods" class="button-2">Get Started</Link>
                    </div>
                </div>
                {allRecipeImages}


                {/* <footer>
                    <div class="wrapper">
                        <div id="footer-info">
                            <p>Copyright 2020 RedFig. All rights reserved by two idiots.</p>
                            <p><a href="#">Terms of Service</a> I <a href="#">Privacy</a></p>
                        </div>
                        <div id="footer-links">
                            <ul>
                                <li><h5>RedFig</h5></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">GoodFood</a></li>
                                <li><a href="#">A Food Blog</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                            <ul>
                                <li><h5>Company</h5></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Meet The Team</a></li>
                                <li><a href="#">What We Do</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                            <ul>
                                <li><h5>Our Partners</h5></li>
                                <li><a href="#">About Them</a></li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                </footer> */}

            </body>
        </div>
    )
}

export default HomeContainer;