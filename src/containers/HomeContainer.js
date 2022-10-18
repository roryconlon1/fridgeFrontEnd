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



const HomeContainer = () => {

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
                  <div className="appName">
                    {elementsOfLogo}
                    <Button onClick={handleClick} circular icon="sort" />
                </div>
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
                        <p id="text">
                            Red Fig! Your Personal Fridge!
                        </p>
                        <marquee behavior="alternate" direction="right">
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis turpis ac libero interdum, id fringilla purus feugiat. Etiam malesuada mattis nibh at bibendum.</p>
                            </li>
                            <li class="feature-2">
                                <h4>Plan your Week</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis turpis ac libero interdum, id fringilla purus feugiat. Etiam malesuada mattis nibh at bibendum.</p>
                            </li>
                            <li class="feature-3">
                                <h4>Ready to Go</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis turpis ac libero interdum, id fringilla purus feugiat. Etiam malesuada mattis nibh at bibendum.</p>
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
                            <a href="#"><img src={Placeholder} alt="video placeholder" /></a>
                        </article>
                    </div>
                </div>


                <div id="cta">
                    <div class="wrapper">
                        <h3>Heard Enough?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo a nibh dignissim tincidunt. Nam ultricies odio ac neque suscipit volutpat. Ut dictum adipiscing felis sed malesuada. Integer porta sem nec nibh hendrerit imperdiet. </p>
                        <Link to="/foods" class="button-2">Get Started</Link>
                    </div>
                </div>


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