import React, {Component} from 'react';

class Login extends Component{

    render(){
        return (
            <form className="LoginForm">
                <h2 className="LoginHeader"> Please sign in </h2>
                <label for="inputEmail" className="sr-only"> Email address
                </label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only"> Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="button"> Sign in
                </button>
            </form>
        );
    }
}

export default Login;