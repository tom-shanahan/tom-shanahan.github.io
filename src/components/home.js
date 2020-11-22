import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Visualization from './visualization';
import VisualizationCard from './visualizationcard';
import Voronoi from './voronoi';
import AreaBump from './areabump';
import StreamGraph from './streamgraph';
import '../App.css';
import '../css/bootstrap.css'
import '../css/themify-icons.css'
import '../css/style.css'
// import './css/font-awesome.min.css'
import {Button, CardContent, Grid, Typography} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {fas, faChevronUp, faHardHat, faHammer} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from "@material-ui/core/Link";

library.add(fab, fas, far, faLinkedin, faGithub,faChevronUp,faHardHat)

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({ menu: !this.state.menu })
    }

    render() {
        const show = (this.state.menu) ? "show" : "" ;

        return (
            <body>
            {/***************** Header ******************/}
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className={"offset collapse navbar-collapse " + show}>
                                <ul className="nav navbar-nav menu_nav">
                                    <li className="nav-item active"><a className="nav-link" href="#home">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#project-header">Projects</a></li>
                                    {/*TODO: add Travels section*/}
                                    {/*<li className="nav-item"><a className="nav-link" href="./html/travels.html">Travels</a></li>*/}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/***************** Banner section ******************/}
            <section id="home" className="home_banner_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6">
                                <div className="banner_content">
                                    <h3>Welcome!</h3>
                                    <h1 className="text-uppercase">I'm Tom Shanahan</h1>
                                    <h5 className="text-uppercase">Tech Enthusiast, Data Nerd, Software Engineer</h5>
                                    <div className="s_icons my-5">
                                        <a href="https://www.linkedin.com/in/tshanahan1/" target='_blank' rel='noopener noreferrer'><i className="ti-linkedin"></i></a>
                                        <a href="https://github.com/tom-shanahan" target='_blank' rel='noopener noreferrer'><i className="ti-github"></i></a>
                                    </div>
                                    <a className="link-button" href="#project-header"><span>See My Work</span></a>
                                    <a className="link-button" href="https://drive.google.com/file/d/17fyHKjfr3zuP1BY33Lg3P2mpnJqSOxAw/view?usp=sharing" target="_blank" rel='noopener noreferrer'><span>See My Resume</span></a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="home_right_img">
                                    <img className="img-fluid headshot-img"
                                         src={'/images/circle_headshot.png'}
                                         style={{ 'border-radius':'100%' }}
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/***************** About me section ******************/}
            <section className="about_area section_gap">
                <span id="about" className="anchor"></span>
                <div className="container">
                    <div  className="row justify-content-start align-items-center">
                        <div className="col-lg-5">
                            <div className="home_right_img">
                                <img className="img-fluid headshot-img"
                                     src={'/images/other_photo.JPG'}
                                     alt="avatar"
                                />
                            </div>
                        </div>

                        <div className="offset-lg-1 col-lg-5">
                            <div className="main_title text-left">
                                <p className="top_text">About me <span></span></p>
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
            {/***************** Project cards section ******************/}
            <section className="services_area section_gap">
                <span id="project-header" className="anchor" ></span>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <p className="top_text">Projects <span></span></p>
                                <h2> Things that <br></br>I have built </h2>
                            </div>
                        </div>
                    </div>

                    <Grid
                        container="True"
                        display="flex"
                        direction="row"
                        justify="center"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <VisualizationCard
                                title="Voronoi Diagram"
                                id="voronoi-div"
                                img='/images/tv_corr.PNG'
                                link="tom-shanahan.github.io/blob/master/src/components/voronoi.js"
                                data="https://colab.research.google.com/drive/1JNnXVkwvR1CrOsiIdwod2ZwVKtGYaWqt?usp=sharing"
                                shortDescription="Exploring a television recommendation engine using a dynamic Voronoi diagram. Facilitates the understanding of complex multi-dimensional data."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <VisualizationCard
                                title="Stream Graph"
                                id="stream-div"
                                img='/images/stream.png'
                                link="tom-shanahan.github.io/blob/master/src/components/streamgraph.js"
                                data="https://colab.research.google.com/drive/1lRCAhOrRBCW8YIJZ4jkjv4A4K1JK5m2s?usp=sharing"
                                shortDescription="Tracking country-level COVID-19 cases and fatality rate over time. Toggleable axis improves useability."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <VisualizationCard
                                title="Area Bump Chart"
                                id="bump-div"
                                img='/images/bump.png'
                                link="tom-shanahan.github.io/blob/master/src/components/areabump.js"
                                data='https://colab.research.google.com/drive/1BYTmrtlquchTl7eTeBpWeYPnctlUDsjg?usp=sharing'
                                shortDescription="Tracking global share of COVID-19 cases and fatalities by country. Toggle allows easy switching between datasets."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <VisualizationCard
                                title="Machine Learning"
                                id="None"
                                img='/images/machine_learning.png'
                                link="Machine-Learning-Projects"
                                data="None"
                                shortDescription="Collection of machine learning projects utilizing Pandas, NumPy, Scikit-Learn, and more."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <VisualizationCard
                                title="MapReduce Implementation"
                                id="None"
                                img='/images/mapReduce.png'
                                link="MapReduce-Implementation"
                                data='None'
                                shortDescription="Hadoop-like MapReduce implementation for operations over large datasets. Fault tolerant implementation successfully and rapidly processed hundreds of files with billions of records."
                            />
                        </Grid>
                        <Grid item xs className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <br/><br/><br/><br/><br/>
                            <div style={{color:"darkslateblue",fontSize:'40px',display:'flex','justify-content':'center'}}>
                                <FontAwesomeIcon style={{margin:'5px'}} icon={faHardHat}/>
                                <FontAwesomeIcon style={{margin:'5px'}} icon={faHammer}/>
                            </div>
                            <br/>
                            <Typography gutterBottom variant="h5" component="h2" align={'center'}>
                                And More in Progress!
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </section>
            {/***************** Project details section ******************/}
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
                        <br/><br/>
                        In the visualization, television shows are represented as dots, and their proximities
                        indicate similarity of user preference. However dimensionality reduction is imperfect and results in information loss.
                        The coloration is a Voronoi diagram which shows the correlations between shows. Shows which are greener have more
                        similar user preference. Interestingly, this coloration allows us to see where dimensionality reduction has maintained
                        relative relations and where it has disrupted these.
                        <br/><br/>
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
                        <br/><br/>
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
                        <br/><br/>
                        <strong><i>Use buttons</i> below plot to toggle cases and fatalities. <i>Hover</i> to see country info.</strong>"
                        />
                    </div>
                </div>
            </section>
            {/***************** Footer section ******************/}
            <footer className="footer_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="footer_top flex-column">
                                <div className="footer_logo">
                                    <div className="d-lg-block d-none">
                                        <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                                            <div className="collapse navbar-collapse offset">
                                                <ul className="nav navbar-nav menu_nav mx-auto">
                                                    <li className="nav-item"><a className="nav-link text-white" href="#home">Home</a></li>
                                                    <li className="nav-item"><a className="nav-link text-white" href="#about">About</a></li>
                                                    <li className="nav-item"><a className="nav-link text-white" href="#project-header">Projects </a></li>
                                                    {/*TODO: add Travels section*/}
                                                    {/*<li className="nav-item"><a className="nav-link text-white" href="../html/travels.html">Travels</a></li>*/}
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="footer_s mt-lg-0 mt-4">
                                    <a href="https://www.linkedin.com/in/tshanahan1/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a>
                                    <a href="https://github.com/tom-shanahan" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <p style={{color:"white"}}>Made with React, D3, and Github Pages</p>
                    </div>
                </div>
            </footer>
            </body>
        );
    }
}
