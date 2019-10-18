import React, {Component} from 'react';
import user from '../Models/user'

class Login extends Component{
    
    constructor(props) {//초기값 설정
        super(props);
        this.state = {
            email: "",
            phone: "",
            isLoging: false
        };
    };
    handleChange = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value //target의 name을 가져옴.
        }); 
    };
    handleOnClick = () => {
        this.setState({isLoging: true});
        user(this.state.email, this.state.phone);
    }
    render(){
        return (
            <section className="container">
                <form className="LoginForm">
                    <h2 className="LoginHeader"> 이벤트에 참여하세요 </h2>
                    <input className="form-control" type="email" id="inputEmail"  placeholder="이메일 주소" name="email" onChange={this.handleChange}/>
                    <input className="form-control" type="password" id="inputPhone"  placeholder="휴대폰 번호( - 없이 입력)" name="phone" onChange={this.handleChange}/>
                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleOnClick}> 로그인 </button>
                </form>
            </section>
        );
    };
}
export default Login;