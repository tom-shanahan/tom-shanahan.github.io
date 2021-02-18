import React from "react";
import {Link} from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';
import {faBars, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import '../css/header.css';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header(){
    return (
        // <Navbar expand="lg">
        //     <Navbar.Toggle>
        //         <FontAwesomeIcon icon={faBars}/>
        //     </Navbar.Toggle>
        //     {/*TODO: change toggle icon when clicked*/}
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="ml-auto mr-5 mt-2 mb-2">
        //             <Link className='nav-item nav-link hoverable' to='/'>Home</Link>
        //             <Link className='nav-item nav-link hoverable' to='/about'>About</Link>
        //             <Link className='nav-item nav-link hoverable' to='/projects'>Projects</Link>
        //             <Link className='nav-item nav-link hoverable' to='/contact'>Contact</Link>
        //         </Nav>
        //         <Navbar.Toggle className="mt-0 mb-3">
        //             <FontAwesomeIcon icon={faWindowClose}/>
        //         </Navbar.Toggle>
        //     </Navbar.Collapse>
        // </Navbar>

        // <nav className="navbar fixed-top navbar-expand-md">
        <Navbar expand="lg">
            {/*<button className="navbar-toggler collapsed position-relative" type="button" data-toggle="collapse"*/}
            {/*        data-target="#collapsingNavbar">*/}
            {/*    <span/>*/}
            {/*    <span/>*/}
            {/*    <span/>*/}
            {/*</button>*/}
            <Navbar.Toggle className="navbar-toggler position-relative">
                <span/>
                <span/>
                <span/>
            </Navbar.Toggle>
            {/*<div className="collapse navbar-collapse" id="collapsingNavbar">*/}
            {/*    <ul className="nav navbar-nav">*/}
            {/*        <li className="nav-item">*/}
            {/*            <a className="nav-link" href="#">About</a>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5 mt-2 mb-2">
                    <Link className='nav-item nav-link hoverable' to='/'>Home</Link>
                    <Link className='nav-item nav-link hoverable' to='/about'>About</Link>
                    <Link className='nav-item nav-link hoverable' to='/projects'>Projects</Link>
                    <Link className='nav-item nav-link hoverable' to='/contact'>Contact</Link>
                </Nav>
            </Navbar.Collapse>
        {/*</nav>*/}
        </Navbar>
    );
}
export default Header;
