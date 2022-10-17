import React from "react";
import Welcome from '../images/welcome.png';
import Placeholder from '../images/video-placeholder.jpeg'
import './HomeCon.css';

const HomeContainer = () => {

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

                <div id="welcome.png">
                    <img src={Welcome} alt="Welcome" />
                    <h2>IMAGE PLACEHOLDER</h2>
                    <a>IMAGE PLACEHOLDER</a>
                </div>

                <div id="features">
                    <div class="wrapper">
                        <ul>
                            <li class="feature-1">
                                <h4>Easy to Edit</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis turpis ac libero interdum, id fringilla purus feugiat. Etiam malesuada mattis nibh at bibendum.</p>
                            </li>
                            <li class="feature-2">
                                <h4>Layered PSD</h4>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo a nibh dignissim tincidunt. Nam ultricies odio ac neque suscipit volutpat. Ut dictum adipiscing felis sed malesuada. Integer porta sem nec nibh hendrerit imperdiet. </p>
                            <a href="#"><img src={Placeholder} alt="video placeholder" /></a>
                        </article>
                    </div>
                </div>


                <div id="cta">
                    <div class="wrapper">
                        <h3>Heard Enough?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo a nibh dignissim tincidunt. Nam ultricies odio ac neque suscipit volutpat. Ut dictum adipiscing felis sed malesuada. Integer porta sem nec nibh hendrerit imperdiet. </p>
                        <a href="#" class="button-2">Get Started</a>
                    </div>
                </div>


                <footer>
                    <div class="wrapper">
                        <div id="footer-info">
                            <p>Copyright 2014 CompanyName. All rights reserved.</p>
                            <p><a href="#">Terms of Service</a> I <a href="#">Privacy</a></p>
                        </div>
                        <div id="footer-links">
                            <ul>
                                <li><h5>Company</h5></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Meet The Team</a></li>
                                <li><a href="#">What We Do</a></li>
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
                                <li><h5>Company</h5></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Meet The Team</a></li>
                                <li><a href="#">What We Do</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                </footer>

            </body>
        </div>
    )
}

export default HomeContainer;