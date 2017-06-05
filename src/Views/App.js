import React from 'react';
import './App.css';
import Projects from './Projects/Projects';
import Home from './Home/Home'
import About from './About/About'
import Header from "../Components/header/header";

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

const App = () => (
    <Router>
        <div>
            <Header/>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
        </div>
    </Router>
)

export default App;
