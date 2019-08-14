import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Feed from './pages/feed';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'  component={Main} />
            <Route path='/feed'    component={Feed} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

