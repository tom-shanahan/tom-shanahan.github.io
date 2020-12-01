import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Navigation from "./components/Navigation";
import Header from "./components/Header";

class App extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Header />
                    {/*<Navbar className="sticky-top bg navbar-right" expand='lg'>*/}
                    {/*    <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>*/}
                    {/*    <Navbar.Collapse id='navbar-toggle'>*/}
                    {/*        <Navbar className='nav navbar-nav menu_nav mr-auto'>*/}
                    {/*            <Link className='nav-link' to='/'>Home</Link>*/}
                    {/*            <Link className='nav-link' to='/about'>About</Link>*/}
                    {/*            <Link className='nav-link' to='/projects'>Projects</Link>*/}
                    {/*        </Navbar>*/}
                    {/*    </Navbar.Collapse>*/}
                    {/*</Navbar>*/}

                    {/*<nav className="navbar navbar-inverse">*/}
                    {/*    <div className="container-fluid">*/}
                    {/*        <ul className="nav navbar-nav">*/}
                    {/*            <li><Link className='hoverable' to='/'>Home</Link></li>*/}
                    {/*            <li><Link className='hoverable' to='/about'>About</Link></li>*/}
                    {/*            <li><Link className='hoverable' to='/projects'>Projects</Link></li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</nav>*/}


                    {/*<nav className="navbar navbar-expand-lg navbar-light bg-light">*/}
                    {/*    <a className="navbar-brand" href="#">Navbar</a>*/}
                    {/*    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"*/}
                    {/*            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*/}
                    {/*        <span className="navbar-toggler-icon"></span>*/}
                    {/*    </button>*/}
                    {/*    <div className="collapse navbar-collapse" id="navbarNav">*/}
                    {/*        <ul className="navbar-nav">*/}
                    {/*            <li className="nav-item active">*/}
                    {/*                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                    {/*            </li>*/}
                    {/*            <li className="nav-item">*/}
                    {/*                <a className="nav-link" href="#">Features</a>*/}
                    {/*            </li>*/}
                    {/*            <li className="nav-item">*/}
                    {/*                <a className="nav-link" href="#">Pricing</a>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</nav>*/}
                    <Navigation />
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        );
    }

}
export default App;
