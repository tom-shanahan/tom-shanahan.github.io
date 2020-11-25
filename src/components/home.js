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

function HomePage(){
        return (
            <body>
            <section id="home" className="home_banner_area">
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
                                <Link className='link-button' to='/projects'><span>See My Work</span></Link>
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
            </section>


            {/*/!***************** Project details section ******************!/*/}
            {/*<section id="projects" className="services_area section_gap">*/}
            {/*    <div className="container">*/}



            {/*    </div>*/}
            {/*</section>*/}
            </body>
        );

}
export default HomePage;
