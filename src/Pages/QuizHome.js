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
            user_id: cookies.get('_id'),
            token: cookies.get('token'),
            quiz_name: match.params.quiz_name,
            stage: 1
        };
    };
    componentDidMount= async ()  => {
        const data = await quizModel(this.state.user_id, this.state.quiz_name);
        console.log(this.state.quiz_name);
        console.log(data);
    }
    render(){
        return(
            <div>
                <Quiz/>
            </div>
        )
    };
}

export default withCookies(QuizHome);