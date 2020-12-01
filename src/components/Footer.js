import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React from "react";

function Footer(){
    return (
        <footer className="footer_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="footer_top flex-column">
                        <div className="d-lg-block d-none">
                            <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                                <div className="collapse navbar-collapse offset">
                                    <ul className="nav navbar-nav menu_nav mx-auto">
                                        {/*<li className="nav-item"><a className="nav-link text-white" href="#home">Home</a></li>*/}
                                        <li className="nav-item"><Link className='nav-link text-white' to='/'>Home</Link></li>
                                        <li className="nav-item"><Link className='nav-link text-white' to='/about'>About</Link></li>
                                        <li className="nav-item"><Link className='nav-link text-white' to='/projects'>Projects</Link></li>
                                        {/*TODO: add Travels section*/}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="footer_s mt-lg-0 mt-4">
                            <a href="https://www.linkedin.com/in/tshanahan1/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a>
                            <a href="https://github.com/tom-shanahan" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <p style={{color:"white"}}>Created with React & Github Pages</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
