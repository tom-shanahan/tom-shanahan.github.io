import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import AreaBumpPage from "./project_pages/CovidAreaBumpPage";
import StreamGraphPage from "./project_pages/CovidStreamPage";
import TVVoronoiPage from "./project_pages/TVVoronoiPage";
import FacialRecogPage from "./project_pages/FacialRecognitionPage";
import MapReducePage from "./project_pages/MapReducePage";
import DigitRecogPage from "./project_pages/DigitRecognizerPage";
import ForestImagePage from "./project_pages/ForestImagePage";
import RecommendEnginePage from "./project_pages/RecommendEnginePage";
import TripOriginPage from "./project_pages/TripOriginPage";
import ContactPage from "./ContactPage";

const Navigation = () => {
    return (
        <div>
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
                <Route path='/trip_origin'>
                    <TripOriginPage />
                </Route>
                <Route path='/recommendation_engine'>
                    <RecommendEnginePage />
                </Route>
                <Route path='/contact'>
                    <ContactPage />
                </Route>
                <Route path='/coloration' component={() => {
                    window.open('http://tom-shanahan.github.io/coloration','_blank');
                    return <Redirect to='/projects' />;
                }}/>
                <Route path='/chrome_extension' component={() => {
                    window.open('https://chrome.google.com/webstore/detail/multi-inbox-checker/ogogkkmiieflnmchmndkknkjpgipldni?hl=en','_blank');
                    return <Redirect to='/projects' />;
                }}/>
            </Switch>
        </div>
    );
}

export default Navigation;
