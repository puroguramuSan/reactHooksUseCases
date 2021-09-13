import React from 'react';

import { NavBar } from './NavBar';

import { Route, Switch, Router } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const AppRouter = () => {
    return (

        <Router history={history}>

            <NavBar />
            <Switch>
                <Route exact path="/about">
                <AboutScreen />
                </Route>

                <Route exact path="/">
                <HomeScreen />
                </Route>

                <Route exact path="/login">
                <LoginScreen />
                </Route>
            </Switch>
        </Router>
    )
}
