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
import {Button, Grid} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas,faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas, far, faLinkedin, faGithub,faChevronUp)

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
                                        <li class="nav-item"><a class="nav-link" href="#project-header">Projects</a></li>
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
                                        <a class="link-button" href="#projects"><span>See My Work</span></a>
                                        <a class="link-button" href="https://drive.google.com/file/d/17fyHKjfr3zuP1BY33Lg3P2mpnJqSOxAw/view?usp=sharing"><span>See My Resume</span></a>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="home_right_img">
                                        <img class="img-fluid headshot-img"
                                             src={'/images/circle_headshot.png'}
                                             style={{ 'border-radius':'100%' }}
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*// ================ End Home Banner Area =================*/}

                {/*// ================ Start About Us Area =================*/}
                <section class="about_area section_gap">
                    <span id="about" className="anchor"></span>
                    <div class="container">
                        <div  class="row justify-content-start align-items-center">
                            <div class="col-lg-5">
                                <div class="home_right_img">
                                    <img class="img-fluid headshot-img"
                                        src={'/images/other_photo.JPG'}
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
                <section class="services_area section_gap">
                    <span id="project-header" className="anchor" ></span>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="main_title">
                                    <p class="top_text">Projects <span></span></p>
                                    <h2> Things that <br></br>I have built </h2>
                                </div>
                            </div>
                        </div>

                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="stretch"
                        >
                            <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <VisualizationCard
                                    title="Voronoi Diagram"
                                    id="voronoi-div"
                                    img='/images/tv_corr.PNG'
                                    link="voronoi.js"
                                    data="https://colab.research.google.com/drive/1JNnXVkwvR1CrOsiIdwod2ZwVKtGYaWqt?usp=sharing"
                                    shortDescription="Exploring a television recommendation engine using a dynamic Voronoi diagram. Facilitates the understanding of complex multi-dimensional data."
                                />
                            </Grid>
                            <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <VisualizationCard
                                    title="Stream Graph"
                                    id="stream-div"
                                    img='/images/stream.png'
                                    link="streamgraph.js"
                                    data="https://colab.research.google.com/drive/1lRCAhOrRBCW8YIJZ4jkjv4A4K1JK5m2s?usp=sharing"
                                    shortDescription="Tracking country-level COVID-19 cases and fatality rate over time. Toggleable axis improves useability."
                                />
                            </Grid>
                            <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <VisualizationCard
                                    title="Area Bump Chart"
                                    id="bump-div"
                                    img='/images/bump.png'
                                    link="areabump.js"
                                    data='https://colab.research.google.com/drive/1BYTmrtlquchTl7eTeBpWeYPnctlUDsjg?usp=sharing'
                                    shortDescription="Tracking global share of COVID-19 cases and fatalities by country. Toggle allows easy switching between datasets."
                                />
                            </Grid>
                        </Grid>
                        <br></br><p> And more in progress! </p>
                    </div>
                </section>

                <section id="projects" className="services_area section_gap">
                    <div className="container">
                        <div id="voronoi-div" className="row project-detail" >
                            <Visualization
                                title="Voronoi Diagram"
                                visualizationComponent=<Voronoi size={[500,500]}/>
                                description=
                            "This graphic is part of a project I did on the preferences of television viewers. Utilizing over five
                            million viewer data points, I developed two recommendation engines: one based on viewer similarity;
                            the other based on show similarity. While performing this analysis, I wanted to create a visualization
                            to clearly convey the relationships in the high dimensional show-show correlation matrix. I used
                            dimensionality reduction to translate the n-dimensional correlation matrix into a 2D representation.
                            To achieve this I used <a href='https://colah.github.io/posts/2014-10-Visualizing-MNIST/' target='_blank' rel='noopener noreferrer'>
                            t-SNE </a>.
                            <br><br>
                            In the visualization, television shows are represented as dots, and their proximities
                            indicate similarity of user preference. However dimensionality reduction is imperfect and results in information loss.
                            The coloration is a Voronoi diagram which shows the correlations between shows. Shows which are greener have more
                            similar user preference. Interestingly, this coloration allows us to see where dimensionality reduction has maintained
                            relative relations and where it has disrupted these.
                            <br><br>
                            <strong><i>Click on chart</i> to toggle between genres and correlations. <i>Hover</i> to see show title and genre.</strong>"
                                />
                        </div>
                        <div id="stream-div" className="row project-detail">
                            <Visualization
                                // TODO: Update recovered data
                                title="Ordered Stream Graph"
                                tip="Toggle between logarithmic and linear y-axis scales, hover over the graph for country and date specific information"
                                visualizationComponent=<StreamGraph size={[500,500]}/>
                                description=
                            "When first confronted with the COVID-19 outbreak, one of my first reactions was to seek out and
                            dig into data about the pandemic. Much of this early data was confused and contradictory. However,
                            gradually a clearly picture emerged of the scale and scope of COVID-19.
                            <br><br>
                            The accompanying visualization shows the path of COVID-19. The chart plots current cases
                            (confirmed but not recovered or deceased) by country. The coloration of each country band
                            represents the case fatality rate (CFR). Early in the pandemic testing of rare and often only
                            serious cases were tested, resulting in an elevated CFR. As testing became more
                            prevalent, the CFR declined."
                                />
                        </div>
                        <div id="bump-div" className="row project-detail">
                            <Visualization
                                style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}
                                title="Area Bump Chart"
                                visualizationComponent=<AreaBump size={[500,500]}/>
                                description=
                            "This visualization shows the changing geographic patterns of the COVID-19 pandemic. It
                            plots cumulative cases and fatalities as a share of the global total. The top ten countries
                            are broken out, with the remainder aggregated into the 'All Other' category. The stacking
                            of countries shows their relative counts, with the larger appearing on top.
                            <br><br>
                            <strong><i>Use buttons</i> below plot to toggle cases and fatalities. <i>Hover</i> to see country info.</strong>"
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
                                        <a href="https://www.linkedin.com/in/tshanahan1/"><FontAwesomeIcon icon={faLinkedin}/></a>
                                        <a href="https://github.com/tom-shanahan"><FontAwesomeIcon icon={faGithub} /></a>
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
