import React, {Component} from 'react';
import {Redirect} from "react-router-dom"
import user from '../Models/user'
import autoLogin from '../Models/autoLogin'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Login extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    
    constructor(props) {//초기값 설정
        super(props);
        const { cookies } = this.props;
        this.state = {
            email: "",
            phone: "",
            isLoging: false,
            user_id: cookies.get('user_id'),
            token: cookies.get('token'),
            quiz_name: this.props.location.state.quiz_name
        };
    };
    componentDidMount = async ()  =>{
        const { cookies } = this.props;
        if(this.state.user_id===""|| this.state.user_id === null|| this.state.user_id === undefined){
            
        }else{
            this.setState({
                user_id: await cookies.get('user_id'),
                token: await cookies.get('token'),
            });
            const data = await autoLogin(this.state.user_id, this.state.toekn);
            console.log(data);
            console.log(this.state.user_id);
            this.setState({
                isLoging:true
            })
        }
    }
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
                await cookies.set('user_id', data.user_id, { path: '/' });
                await cookies.set('token', data.token, { path: '/' });
                this.setState({
                    isLoging:true
                })
            }else{
                alert("이메일과 전화번호를 확인해주세요.");
            }
        }
    }
    render(){
        if(this.state.isLoging){
            return <Redirect push to={`/quizhome/${this.state.quiz_name}`}/>;
        }else{
            return (
                <section className="container">
                    <form className="LoginForm">
                        <input className="form-control" type="email" id="inputEmail"  placeholder="이메일 주소" name="email" onChange={this.handleChange}/>
                        <br></br>
                        <input className="form-control" type="password" id="inputPhone"  placeholder="휴대폰 번호( - 없이 입력)" name="phone" onChange={this.handleChange}/>
                        <br></br>
                        <button className="btn btn-lg btn-primary btn-block" 
                                type="button" onClick={this.handleOnClick}>
                                    게임 시작
                        </button>
                    </form>
                </section>
            );
        }
    };
}
export default withCookies(Login);