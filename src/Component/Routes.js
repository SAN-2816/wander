import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Footer from "../Component/Footer"
import Tutorial from "../Pages/Tutorial";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import QuizHome from "../Pages/QuizHome";
import QuizPage from "../Pages/QuizPage";
import agreePage from "../Pages/agreePage"
import privacyPage from "../Pages/privacyPage"

export default () => (
<Router>
    <h1 className="title">
        <a href={process.env.PUBLIC_URL+"/"} style={{textDecoration: "none"}}>WANDERLAND</a>
    </h1>
    <Route exact path={process.env.PUBLIC_URL+"/"} component={Home}/>
    <Switch>
        <Route exact path={process.env.PUBLIC_URL+"/tutorial"} component={Tutorial}/>
        <Route path="/login" component={Login}/>
        <Route path="/agree" component={agreePage}/>
        <Route path="/privacy" component={privacyPage}/>
        <Route path="/quizhome/:quiz_name" component={QuizHome}/>
        <Route path="/quizpage/:quiz_name/:fake/:stage" component={QuizPage}/>
        
    </Switch>
</Router>
)