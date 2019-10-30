import React, {Component} from 'react';
import Menu from "../Component/Menu";
import Event from "../Component/Event";
import { withCookies, Cookies } from 'react-cookie';
import {Redirect} from "react-router-dom"
import { instanceOf } from 'prop-types';

class Home extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {//초기값 설정
        super(props);
        const { cookies } = this.props;
        this.state = {
            user_id: cookies.get('user_id'),
            token: cookies.get('token'),
            quizBool: false,
            quiz_name: "",
            fake: "",
            stage: ""
        };
    };
    componentDidMount(){
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(window.location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        if(getParameterByName('quiz_name')!==""){
            if(this.state.user_id===""|| this.state.user_id === null|| this.state.user_id === undefined){

            }else{
                const quiz_name = getParameterByName('quiz_name');
                const fake = getParameterByName('fake');
                const stage = getParameterByName('stage');
                this.setState({
                    quiz_name: quiz_name,
                    fake: fake,
                    stage: stage,
                    quizBool: true
                });
            }
        }
    }
    render(){
        if(this.state.quizBool){
            return <Redirect push to={`/quizpage/${this.state.quiz_name}/${this.state.fake}/${this.state.stage}`}/>;
        }
        return(
            <div>
                <Event/>
                <h3 className="eventText">EVENT</h3>
                <div className="menus">
                    <Menu
                    location="서울"
                    name="중앙대학교"
                    day="19.10.31(목)~19.11.01(금)"
                    link=""
                    />
                    <Menu
                    location="종로"
                    name="낙산 공원"
                    day="19.11.02(토)"
                    link="0"
                    />
                    <Menu
                    name="커밍쑨"
                    day="19.XX.XX"
                    link="0"
                    />
                </div>
            </div>
        );
    };
}

export default withCookies(Home);