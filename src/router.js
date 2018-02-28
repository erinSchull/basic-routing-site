import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import SassPage from './components/sassPage/SassPage';
import ToDo from './components/to-do/To-Do';
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
            <Route component={ToDo} path= '/to-do' />
            <Route component={SassPage} path='/sass' />
        </Switch>
    </div>
)