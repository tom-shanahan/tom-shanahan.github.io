import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';
import AreaBumpPage from "./components/project_pages/page_covid_area_bump";
import StreamGraphPage from "./components/project_pages/page_covid_stream";
import TVVoronoiPage from "./components/project_pages/page_tv_voronoiPage";
import FacialRecogPage from "./components/project_pages/page_facial_recognition";
import MapReducePage from "./components/project_pages/MapReducePage";
import DigitRecogPage from "./components/project_pages/DigitRecognizerPage";
import ForestImagePage from "./components/project_pages/ForestImagePage";
import ScrollToTop from './components/ScrollToTop';

class App extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Container className="p-0" fluid={true}>
                        {/*<Navbar className="bg-light justify-content-between">*/}
                        {/*<Navbar className="sticky-top bg" expand='lg' bg="light">*/}
                        <Navbar className="sticky-top bg" expand='lg'>
                            {/*<Navbar.Brand href=''>Tom</Navbar.Brand>*/}
                            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
                            <Navbar.Collapse id='navbar-toggle'>
                                <Navbar className='nav navbar-nav menu_nav mr-auto'>
                                    <Link className='nav-link' to='/'>Home</Link>
                                    <Link className='nav-link' to='/about'>About</Link>
                                    <Link className='nav-link' to='/projects'>Projects</Link>
                                </Navbar>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                    <Switch>
                        <Route exact path='/'>
                            <HomePage />
                        </Route>
                        <Route path='/about'>
                            <AboutPage />
                        </Route>
                        <Route path='/projects'>
                            <ProjectsPage />
                        </Route>
                        <Route path='/area_bump'>
                            <AreaBumpPage />
                        </Route>
                        <Route path='/stream_graph'>
                            <StreamGraphPage />
                        </Route>
                        <Route path='/tv_voronoi'>
                            <TVVoronoiPage />
                        </Route>
                        <Route path='/facial_recog'>
                            <FacialRecogPage />
                        </Route>
                        <Route path='/map_reduce'>
                            <MapReducePage />
                        </Route>
                        <Route path='/digit_recog'>
                            <DigitRecogPage />
                        </Route>
                        <Route path='/forest_image'>
                            <ForestImagePage />
                        </Route>
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        );
    }

}
export default App;
