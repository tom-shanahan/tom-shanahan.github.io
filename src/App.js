import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Visualization from './components/visualization';
import VisualizationCard from './components/visualizationcard';
import Voronoi from './components/voronoi';
import AreaBump from './components/areabump';
import StreamGraph from './components/streamgraph';

import './App.css';
import './css/bootstrap.css'
// import './vendors/linericon/style.css'
import './css/themify-icons.css'
// import './vendors/owl-carousel/owl.theme.default.min.css'
// import './vendors/owl-carousel/owl.carousel.min.css'
// import './vendors/nice-select/css/nice-select.css'
import './css/style.css'
import './css/font-awesome.min.css'
import {Grid} from '@material-ui/core';

class App extends Component {
    render() {
        return (
            <body>
                <header class="header_area">
                    <div class="main_menu">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <div class="container">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <ul class="nav navbar-nav menu_nav">
                                        <li class="nav-item active"><a class="nav-link" href="#home">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                                        <li class="nav-item"><a class="nav-link" href="../../html/travels.html">Travels</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/*// ================ End Header Area =================*/}

                {/*// ================ Start Home Banner Area =================*/}
                <section id="home" class="home_banner_area">
                    <div class="banner_inner">
                        <div class="container">
                            <div class="row align-items-center justify-content-between">
                                <div class="col-lg-6">
                                    <div class="banner_content">
                                        <h3>Welcome!</h3>
                                        <h1 class="text-uppercase">I'm Tom Shanahan</h1>
                                        <h5 class="text-uppercase">Tech Enthusiast, Data Nerd, Software Engineer</h5>
                                        <div class="social_icons my-5">
                                            <a href="https://www.linkedin.com/in/tshanahan1/"><i class="ti-linkedin"></i></a>
                                            <a href="https://github.com/tom-shanahan"><i class="ti-github"></i></a>
                                        </div>
                                        <a class="primary_btn2" href="#projects"><span>Check Out My Work</span></a>
                                        <a class="primary_btn2 ml-30" href="https://drive.google.com/file/d/17fyHKjfr3zuP1BY33Lg3P2mpnJqSOxAw/view?usp=sharing"><span>See My Resume</span></a>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="home_right_img">
                                        <img class="img-fluid"
                                             src={'/images/circle_headshot.png'}
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*// ================ End Home Banner Area =================*/}

                {/*// ================ Start About Us Area =================*/}
                <section id="about" class="about_area section_gap">
                    <div class="container">
                        <div class="row justify-content-start align-items-center">
                            <div class="col-lg-5">
                                <div class="home_right_img">
                                    <img class="img-fluid"
                                        src={'/images/headshot.JPG'}
                                        alt="avatar"
                                    />
                                </div>
                            </div>

                            <div class="offset-lg-1 col-lg-5">
                                <div class="main_title text-left">
                                    <p class="top_text">About me <span></span></p>
                                    <p>
                                        I am a data-focused software engineer with a background in government,
                                        finance, and consulting. I have nearly 10 years of experience wrangling
                                        and gleaning insights from large, complex datasets. I have experience with
                                        data visualization, web development, and data science.
                                    </p>
                                    <p>
                                        I recently completed a Masters in Computer Science at Cornell Tech,
                                        focused on the intersection of data and engineering. I studied Algorithms,
                                        Machine Learning, Data Science, and Distributed. I’m experienced working
                                        with Python, JavaScript, React, HTML, SQL, Scikit-Learn, Pandas, NumPy,
                                        Spark, Tableau, and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*// ================ End About Us Area =================*/}

                {/*// ================ Start Features Area =================*/}
                <section id="projects" class="services_area section_gap">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="main_title">
                                    <p class="top_text">Projects <span></span></p>
                                    <h2> Things that <br></br>I have built </h2>
                                </div>
                            </div>
                        </div>

                        <Grid container class="row" alignItems={'stretch'}>
                            <Grid item class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <VisualizationCard
                                    title="Voronoi Diagram"
                                    id="voronoi-div"
                                    img='/images/tv_corr.PNG'
                                    link="voronoi.js"
                                    shortDescription="Exploring a tv show recommendation engine using a Voronoi diagram."
                                />
                            </Grid>
                            <Grid item className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <VisualizationCard
                                    title="Ordered Stream Graph"
                                    id="stream-div"
                                    img='/images/stream.png'
                                    link="streamgraph.js"
                                    shortDescription="Tracking global outstanding COVID cases with an area stream graph."
                                />
                            </Grid>
                            <Grid item className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <VisualizationCard
                                    title="Area Bump Chart"
                                    id="bump-div"
                                    img='/images/bump.png'
                                    link="areabump.js"
                                    shortDescription="Tracking total global outstanding COVID cases as percent of world total."
                                />
                            </Grid>
                        </Grid>
                        <br></br><p> And more in progress! </p>
                    </div>
                </section>

                <section id="projects" className="services_area section_gap">
                    <div className="container">
                        <div className="row">
                            <Visualization
                                title="Voronoi Tesselation"
                                tip="Click on chart to toggle between showing genres and film correlations as voronoi underlay, hover to see film information"
                                id="voronoi-div"
                                visualizationComponent=<Voronoi size={[500,500]}/>
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            />
                        </div>
                        <div className="row">
                            <Visualization
                                title="Ordered Stream Graph"
                                // tip="Toggle between logarithmic and linear y-axis scales, hover over the graph for country and date specific information"
                                id="stream-div"
                                visualizationComponent=<StreamGraph size={[500,500]}/>
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            />
                        </div>
                        <div className="row">
                            <Visualization
                                style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                                title="Area Bump Chart"
                                // tip="TEMP"
                                id="bump-div"
                                visualizationComponent=<AreaBump size={[800,500]}/>
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            />
                        </div>
                    </div>
                </section>
                {/*// ================ End Features Area =================*/}


                {/*// ================Footer Area =================*/}
                <footer class="footer_area">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="footer_top flex-column">
                                    <div class="footer_logo">
                                        <div class="d-lg-block d-none">
                                            <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
                                                <div class="collapse navbar-collapse offset">
                                                    <ul class="nav navbar-nav menu_nav mx-auto">
                                                        <li class="nav-item"><a class="nav-link text-white" href="#home">Home</a></li>
                                                        <li class="nav-item"><a class="nav-link text-white" href="#about">About</a></li>
                                                        <li class="nav-item"><a class="nav-link text-white" href="#projects">Projects </a></li>
                                                        <li class="nav-item"><a class="nav-link text-white" href="../../html/travels.html">Travels</a></li>
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    <div class="footer_social mt-lg-0 mt-4">
                                        <a href="https://www.linkedin.com/in/tshanahan1/"><i class="fab fa-linkedin"></i></a>
                                        <a href="https://github.com/tom-shanahan"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row footer_bottom justify-content-center">
                            <p class="col-lg-8 col-sm-12 footer-text"/>
                    </div>
                </div>
                </footer>
                {/*// ================End Footer Area =================*/}
            </body>
        );
    }
}

export default App;
