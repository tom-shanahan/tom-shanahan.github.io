import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import AreaBumpPage from "./project_pages/page_covid_area_bump";
import StreamGraphPage from "./project_pages/page_covid_stream";
import TVVoronoiPage from "./project_pages/page_tv_voronoiPage";
import FacialRecogPage from "./project_pages/page_facial_recognition";
import MapReducePage from "./project_pages/MapReducePage";
import DigitRecogPage from "./project_pages/DigitRecognizerPage";
import ForestImagePage from "./project_pages/ForestImagePage";
import RecommendEnginePage from "./project_pages/RecommendEnginePage";
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
                <Route path='/recommendation_engine'>
                    <RecommendEnginePage />
                </Route>
                <Route path='/contact'>
                    <ContactPage />
                </Route>
            </Switch>
        </div>
    );
}

export default Navigation;
