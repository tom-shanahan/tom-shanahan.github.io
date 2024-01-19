import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../css/bootstrap.css'
import '../css/themify-icons.css'
import '../css/style.css'

import AOS from "aos";

function HomePage(){
    return (
        <div className="vertical-center home_banner_area" data-aos="fade-up">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <div className="banner_content">
                            <h3>Welcome!</h3>
                            <h1 className="text-uppercase">I'm Tom Shanahan</h1>
                            <h5 className="text-uppercase">Data & CS</h5>
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
        </div>
    );
}

export default HomePage;

AOS.init({
    duration: 600
});
