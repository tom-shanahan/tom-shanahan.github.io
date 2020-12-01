import {Link} from "react-router-dom";
import '../css/header.css';
import React from "react";

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
        <nav class="navbar navbar-expand-sm fixed-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fas fa-bars hamburger"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav nav ml-auto mr-5">
                    <li class="nav-item">
                        <Link className='nav-link hoverable' to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link hoverable' to='/about'>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link hoverable' to='/projects'>Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;
