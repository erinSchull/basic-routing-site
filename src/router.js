import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Instructions from './components/instructions/Instructions';
import Home from './components/home/Home';

export default (
    <div>
        <Switch>
            <Route component={Header} />
        </Switch>
        <Switch>
            <Route component={Home} exact path= '/' />
            <Route component={Instructions} path= '/instructions' />
            <Route component={Page1} path= '/page1' />
            <Route component={Page2} path= '/page2' />
        </Switch>
    </div>
)