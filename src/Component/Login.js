import React, {Component} from 'react';

class Login extends Component{
    
    constructor(props) {//초기값 설정
        super(props);
        this.state = {
            email: "",
            phone: ""
        };
    };
    handleChange = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value //target의 name을 가져옴.
        }); 
    };
    handleOnClick = () => {
        console.log(this.state.email, this.state.phone);
    }
    render(){
        return (
            <form className="LoginForm">
                <h2 className="LoginHeader"> 이벤트에 참여하세요 </h2>
                <input type="email" id="inputEmail" className="form-control" placeholder="이메일 주소" name="email" onChange={this.handleChange}/>
                <input type="password" id="inputPhone" className="form-control" placeholder="휴대폰 번호( - 없이 입력)" name="phone" onChange={this.handleChange}/>
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleOnClick}> 로그인 </button>
            </form>
        );
    };

}
export default Login;