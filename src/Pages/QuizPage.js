import React, {Component} from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

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
            stage: match.params.stage
        };
    };
    render(){
        return(
            <div>
                {this.state.quiz_name}
                {this.state.stage}
            </div>
        );
    }
}

export default withCookies(QuizPage);