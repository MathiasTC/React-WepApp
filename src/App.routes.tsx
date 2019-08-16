import * as Page from './pages';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

export class AppRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Page.Home}/>
                <Route path='/about' component={Page.About}/>
            </Switch>
        )
    }
}