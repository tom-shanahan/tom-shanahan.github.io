import React from 'react';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
                    <Navigation />
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}
export default App;
