import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './home';
import { PdfPage } from './pdf';
import { VideoPage } from './video';
import { AudioPage } from './audio'; 
import { NavBar } from './navBar';

 
const routes = [
    {
        path: '/',
        Component: HomePage,
        exact: true
    },
    {
        path: '/pdf',
        Component: PdfPage
    },
    {
        path: '/video',
        Component: VideoPage
    },
    {
        path: '/Audio',
        Component: AudioPage
    }
 ];

export const Routes = () => (
    <Router>
        <NavBar />
        <Switch>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
            >
                <route.Component />
            </Route>
        ))}
        </Switch>
    </Router>
)