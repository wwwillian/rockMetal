import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Calendar from './pages/Calendar/Calendar';
import Form from './pages/Form/Form';

function Routes(){
    return (
        <Switch>
            <Route path="/"  exact component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/form" component={Form} />
        </Switch>
    );
}

export default Routes;