import React, {Component} from 'react';
import {Link} from "react-router-dom"
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import checkQuiz from '../Models/checkQuiz';

class QuizPage extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {//초기값 설정
        super(props);
        const {cookies, match} = this.props;
        this.state = {
            user_id: cookies.get('user_id'),
            token: cookies.get('token'),
            quiz_name: match.params.quiz_name,
            now_stage: match.params.stage,
            stage: match.params.stage,
            fake: match.params.fake
        };
    };
    componentDidMount= async ()  =>{
        const data = await checkQuiz(this.state.user_id, this.state.quiz_name, this.state.stage);
        console.log(data);
        /* this.setState({
            stage: data.quizzes[0].stage
        }); */
    }
    render(){
        return(
            <div>
            <Link to={`/quizhome/${this.state.quiz_name}`}>
                <div className='quizTitle' style={{color: '#006BFF'}}>{`< `}Quiz {this.state.stage}</div>
            </Link>
                <img className="quiz_img" src={window.location.origin+"/quizzes/chungang/"+this.state.fake+".jpg"} alt=""/>
                <div className="quiz_comment">해당 장소로 가서 QR코드를 찾으세요.</div>
                <div className="quiz_hint">문제의 정답을 모르실 경우 카카오톡 채널'wanderland'를 추가하고 문의 주세요.</div>
            </div>
        );
    }
}

export default withCookies(QuizPage);