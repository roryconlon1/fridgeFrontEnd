import React from "react";
import Welcome from '../images/welcome.png';
import Placeholder from '../images/video-placeholder.jpeg'

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



                {/* <div id="secondary-content">
                    <div class="wrapper">
                        <article style="background-image: url('../images/welcome.png');">
                            <div class="overlay">
                                <h4>Secondary Content</h4>
                                <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo a nibh dignissim tincidunt nam.</small></p>
                                <a href="#" class="more-link">View more</a>
                            </div>
                        </article>
                        <article style="background-image: url('../images/welcome.png');">
                            <div class="overlay">
                                <h4>Secondary Content</h4>
                                <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo a nibh dignissim tincidunt nam.</small></p>
                                <a href="#" class="more-link">View more</a>
                            </div>
                        </article><div class="clear"></div>
                    </div>
                </div> */}




                <div id="cta">
                </div>

                <footer>
                    <div id="footer-info"></div>
                    <div id="footer-links">
                        <ul>FOOT LINK ONE</ul>
                        <ul>FOOT LINK TWO</ul>
                        <ul>FOOT LINK THREE</ul>
                    </div>
                </footer>

            </body>
        </div>
    )
}

export default HomeContainer;