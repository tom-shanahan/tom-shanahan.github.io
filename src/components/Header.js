import React from "react";
import {Link} from "react-router-dom";
import { Nav, Navbar, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPiedPiperHat} from "@fortawesome/free-brands-svg-icons";


function Header(){
    return (
        // <nav className="navbar navbar-inverse">
        //     <div className="container-fluid nav-style">
        //         <ul className="nav navbar-nav">
        //             <li><Link className='hoverable' to='/'>Home</Link></li>
        //             <li><Link className='hoverable' to='/about'>About</Link></li>
        //             <li><Link className='hoverable' to='/projects'>Projects</Link></li>
        //         </ul>
        //     </div>
        // </nav>


        // <nav className="navbar navbar-expand-sm fixed-top">
        //     <div className="container-fluid">
        //         <div className="navbar-header">
        //             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-nav">
        //                 <span className="icon-bar"></span>
        //                 <span className="icon-bar"></span>
        //                 <span className="icon-bar"></span>
        //             </button>
        //         </div>
        //         <div className="collapse navbar-collapse"  id="navbarText">
        //             <ul className="navbar-nav nav ml-auto mr-5">
        //                 <li className="nav-item"><Link className='nav-link hoverable header-style' to='/'>Home</Link></li>
        //                 <li className="nav-item"><Link className='nav-link hoverable header-style' to='/about'>About</Link></li>
        //                 <li className="nav-item"><Link className='nav-link hoverable header-style' to='/projects'>Projects</Link></li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>


        <Navbar className="navbar" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5">
                    <Link className='nav-item nav-link hoverable' to='/'>Home</Link>
                    <Link className='nav-item nav-link hoverable' to='/about'>About</Link>
                    <Link className='nav-item nav-link hoverable' to='/projects'>Projects</Link>
                    <Link className='nav-item nav-link hoverable' to='/contact'>Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}
export default Header;
