import * as React from 'react';
import {BrowserRouter as Router,
    Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

// App Components

import About from './constants/About';
import Courses from './constants/Courses';
import Featured from './constants/Featured';
import Header from './constants/Header';
import Home from './constants/Home';
import NotFound from './constants/NotFound';
import Teachers from './constants/Teachers';
import Footer from "./constants/Footer";

const routes = [
    {path: "/home", component: Home, key: 1},
    {path: "/about", component: About, key: 2},
    {path: "/teachers", component: Teachers, key: 3},
    {path: "/teachers/:topic/:name", component: Featured, key: 4},
    {path: "/courses", component: Courses, key: 5},
    {path: "/courses/:topic", component: Courses, key: 6},
];
const App = () => (
    <Router>
        <div>
            <div className="container">
                <div className="main">
                    <Header/>
                    <Switch>
                            {routes.map(({path, component, key}) =>
                                <Route exact={true} path={path} component={component} key={key} />)}
                        <Route path="/" render={() => <Redirect to="/home"/>} />
                        <Route component={NotFound} />
                </Switch>
                </div>
            </div>
            <Footer/>
        </div>
    </Router>
);

export default App;
