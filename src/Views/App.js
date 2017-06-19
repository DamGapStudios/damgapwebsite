import React from 'react';
import './App.scss';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css'

// VIEWS
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import Blog from "./Blog/Blog";

// COMPONENTS
import Header from "../Components/header/header";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

const App = () => (
    <Router>
        <div>
            <Header/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/blog" component={Blog}/>
        </div>
    </Router>
)

export default App;
