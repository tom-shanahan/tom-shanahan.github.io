import React from "react";
import {Link} from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header(){
    return (
        <Navbar expand="lg">
            <Navbar.Toggle>
                <FontAwesomeIcon icon={faBars}/>
            </Navbar.Toggle>
            {/*TODO: change toggle icon when clicked*/}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5 mt-2 mb-2">
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
