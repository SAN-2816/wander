import React, {Component} from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import quizModel from '../Models/quizModel';

import Quiz from '../Component/Quiz'

class QuizHome extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {//초기값 설정
        super(props);
        const { cookies, match} = this.props;
        this.state = {
            user_id: cookies.get('user_id'),
            token: cookies.get('token'),
            quiz_name: match.params.quiz_name,
            stage: match.params.stage
        };
    };
    componentDidMount= async ()  => {
        const data = await quizModel(this.state.user_id, this.state.quiz_name, this.state.stage);
        console.log(data);
        this.setState({
            stage: data.quizzes.stage
        });
    }
    render(){
        return(
            <div className='quizHome'>
                <div className='quizTitle'>Quiz</div>
                <div className='quizName'>{this.state.quiz_name}</div>
                <center>
                    <Quiz name={this.state.quiz_name} num='1' comment='' success='1'/>
                    <Quiz name={this.state.quiz_name} num='2' comment='' success='0'/>
                    <Quiz name={this.state.quiz_name} num='3' comment='' success='0'/>
                </center>
            </div>
        )
    };
}

export default withCookies(QuizHome);