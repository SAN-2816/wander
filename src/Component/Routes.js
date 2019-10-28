import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Footer from "../Component/Footer"
import Tutorial from "../Pages/Tutorial";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import QuizHome from "../Pages/QuizHome";

export default () => (
<Router>
    <h1 className="title">
        <a href={process.env.PUBLIC_URL+"/"} style={{textDecoration: "none"}}>WANDERLAND</a>
    </h1>
    <Route exact path={process.env.PUBLIC_URL+"/"} component={Home}/>
    <Switch>
        <Route path="/tutorial" component={Tutorial}/>
        <Route path="/login" component={Login}/>
        <Route path="/quizhome/:quiz_name" component={QuizHome}/>
    </Switch>
</Router>
)