import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Tutorial from "../Pages/Tutorial";
import Home from "../Pages/Home";

export default () => (
<Router>
    <Route exact path="/" component={Home}/>
    <Switch>
        <Route path="/tutorial" component={Tutorial} />
    </Switch>
</Router>
)