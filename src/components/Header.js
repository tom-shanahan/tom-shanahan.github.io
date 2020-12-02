import React from "react";
import {Link} from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
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
