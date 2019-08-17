import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {isAuthenticated} from './services/auth';

import Main from './pages/main';
import Feed from './pages/feed';

const PrivateRoute = ({ component:Component,...rest}) => (
    <Route { ... rest} render={props => 
            isAuthenticated() ? (
                <Component { ... props} />
            ) : (
                <Redirect to={{ pathname: '/', state: {from: props.location} }} />
            )
        } 
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'         component={Main} />
            <PrivateRoute path='/feed'    component={Feed} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

