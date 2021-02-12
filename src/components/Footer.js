import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Footer(){
    return (
        <footer className="footer_area">
            <div className="footer_s mb-4 mt-4">
                <a href="https://www.linkedin.com/in/tshanahan1/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="https://github.com/tom-shanahan" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
                <a href="/contact" ><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <div className='footer_s mb-4 mt-4'>
                <p className='text-white'>Created with React & Github Pages</p>
            </div>
        </footer>
    );
}
export default Footer;
