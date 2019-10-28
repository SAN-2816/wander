import React, {Component} from 'react';
import user from '../Models/user'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
 
class Login extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {//초기값 설정
        super(props);
        this.state = {
            email: "",
            phone: "",
            isLoging: false,
            quiz_name: this.props.location.state.quiz_name
        };
    };
    
    handleChange = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value //target의 name을 가져옴.
        }); 
        
    };
    handleOnClick = async ()  => {
        if(this.state.email === "" || this.state.email === null || this.state.email === undefined ||
        this.state.phone === "" || this.state.phone === null || this.state.phone === undefined){
            alert("이메일과 전화번호를 확인해주세요.");
        }else{
            const data = await user(this.state.email, this.state.phone);
            if(data.complete){
                this.setState({isLoging: true});
                const { cookies } = this.props;
                cookies.set('_id', data._id, { path: '/' });
                cookies.set('token', data.token, { path: '/' });
                window.location.href=`/quizhome/${this.state.quiz_name}`;
            }else{
                alert("이메일과 전화번호를 확인해주세요.");
            }
        }
    }
    render(){
        return (
            <section className="container">
                <form className="LoginForm">
                    <input className="form-control" type="email" id="inputEmail"  placeholder="이메일 주소" name="email" onChange={this.handleChange}/>
                    <br></br>
                    <input className="form-control" type="password" id="inputPhone"  placeholder="휴대폰 번호( - 없이 입력)" name="phone" onChange={this.handleChange}/>
                    <br></br>
                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleOnClick}>게임 시작</button>
                </form>
            </section>
        );
    };
}
export default withCookies(Login);