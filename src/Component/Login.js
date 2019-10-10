import React, {Component} from 'react';

class Login extends Component{
    handleClick = () => {
        console.log('this is:', this);
      }
    render(){
        return (
            <form className="LoginForm">
                <h2 className="LoginHeader"> 이벤트에 참여하세요 </h2>
                <input type="email" id="inputEmail" className="form-control" placeholder="이메일 주소" required />
                <input type="password" id="inputPassword" className="form-control" placeholder="휴대폰 번호( - 없이 입력)" required />
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleClick}> 로그인 </button>
            </form>
        );
    }
}
export default Login;