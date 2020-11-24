import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
// import Link from "@material-ui/core/Link";
import Navbar from "react-bootstrap/Navbar";

library.add(fab, fas, far, faLinkedin, faGithub,faChevronUp,faHardHat)

// export default class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             menu: false
//         };
//         this.toggleMenu = this.toggleMenu.bind(this);
//     }
//
//     toggleMenu(){
//         this.setState({ menu: !this.state.menu })
//     }
//
//     render() {
function HomePage(){
        return (
            <body>
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

            {/*/!***************** Project cards section ******************!/*/}

            {/*/!***************** Project details section ******************!/*/}
            {/*<section id="projects" className="services_area section_gap">*/}
            {/*    <div className="container">*/}
            {/*        <div id="voronoi-div" className="row project-detail" >*/}
            {/*            <Visualization*/}
            {/*                title="Voronoi Diagram"*/}
            {/*                visualizationComponent=<Voronoi size={[500,500]}/>*/}
            {/*            description=*/}
            {/*            "This graphic is part of a project I did on the preferences of television viewers. Utilizing over five*/}
            {/*            million viewer data points, I developed two recommendation engines: one based on viewer similarity;*/}
            {/*            the other based on show similarity. While performing this analysis, I wanted to create a visualization*/}
            {/*            to clearly convey the relationships in the high dimensional show-show correlation matrix. I used*/}
            {/*            dimensionality reduction to translate the n-dimensional correlation matrix into a 2D representation.*/}
            {/*            To achieve this I used <a href='https://colah.github.io/posts/2014-10-Visualizing-MNIST/' target='_blank' rel='noopener noreferrer'>*/}
            {/*            t-SNE </a>.*/}
            {/*            <br/><br/>*/}
            {/*            In the visualization, television shows are represented as dots, and their proximities*/}
            {/*            indicate similarity of user preference. However dimensionality reduction is imperfect and results in information loss.*/}
            {/*            The coloration is a Voronoi diagram which shows the correlations between shows. Shows which are greener have more*/}
            {/*            similar user preference. Interestingly, this coloration allows us to see where dimensionality reduction has maintained*/}
            {/*            relative relations and where it has disrupted these.*/}
            {/*            <br/><br/>*/}
            {/*            <strong><i>Click on chart</i> to toggle between genres and correlations. <i>Hover</i> to see show title and genre.</strong>"*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <div id="stream-div" className="row project-detail">*/}
            {/*            <Visualization*/}
            {/*                // TODO: Update recovered data*/}
            {/*                title="Ordered Stream Graph"*/}
            {/*                tip="Toggle between logarithmic and linear y-axis scales, hover over the graph for country and date specific information"*/}
            {/*                visualizationComponent=<StreamGraph size={[500,500]}/>*/}
            {/*            description=*/}
            {/*            "When first confronted with the COVID-19 outbreak, one of my first reactions was to seek out and*/}
            {/*            dig into data about the pandemic. Much of this early data was confused and contradictory. However,*/}
            {/*            gradually a clearly picture emerged of the scale and scope of COVID-19.*/}
            {/*            <br/><br/>*/}
            {/*            The accompanying visualization shows the path of COVID-19. The chart plots current cases*/}
            {/*            (confirmed but not recovered or deceased) by country. The coloration of each country band*/}
            {/*            represents the case fatality rate (CFR). Early in the pandemic testing of rare and often only*/}
            {/*            serious cases were tested, resulting in an elevated CFR. As testing became more*/}
            {/*            prevalent, the CFR declined."*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <div id="bump-div" className="row project-detail">*/}
            {/*            <Visualization*/}
            {/*                style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}*/}
            {/*                title="Area Bump Chart"*/}
            {/*                visualizationComponent=<AreaBump size={[500,500]}/>*/}
            {/*            description=*/}
            {/*            "This visualization shows the changing geographic patterns of the COVID-19 pandemic. It*/}
            {/*            plots cumulative cases and fatalities as a share of the global total. The top ten countries*/}
            {/*            are broken out, with the remainder aggregated into the 'All Other' category. The stacking*/}
            {/*            of countries shows their relative counts, with the larger appearing on top.*/}
            {/*            <br/><br/>*/}
            {/*            <strong><i>Use buttons</i> below plot to toggle cases and fatalities. <i>Hover</i> to see country info.</strong>"*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/***************** Footer section ******************/}
            </body>
        );

}
export default HomePage;
