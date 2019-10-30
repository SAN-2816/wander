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
        const {cookies, match} = this.props;
        this.state = {
            user_id:  cookies.get('user_id'),
            token:  cookies.get('token'),
            quiz_name:  match.params.quiz_name,
            stage: 1,
            quiz_1: 1,
            quiz_2: 0,
            quiz_3: 0,
            quiz_4: 0,
        };
    };
    componentDidMount = async ()  => {
        const data = await quizModel(this.state.user_id, this.state.quiz_name, this.state.stage);
        console.log(data);
        this.setState({
            stage: data.quizzes.stage
        }); 
        if(this.state.stage===1){
            this.setState({
                quiz_1: 1,
                quiz_2: 0,
                quiz_3: 0,
                quiz_4: 0
            });
        }else if(this.state.stage===2){
            this.setState({
                quiz_1: 1,
                quiz_2: 1,
                quiz_3: 0,
                quiz_4: 0
            });

        }else if(this.state.stage===3){
            this.setState({
                quiz_1: 1,
                quiz_2: 1,
                quiz_3: 1,
                quiz_4: 0
            });
        }else if(this.state.stage===4){
            this.setState({
                quiz_1: 1,
                quiz_2: 1,
                quiz_3: 1,
                quiz_4: 1
            });
        }
    }
    
    render(){
        return(
            <div className='quizHome'>
                <div className='quizTitle'>Quiz</div>
                <div className='quizName'>{this.state.quiz_name}</div>
                <center>
                    <Quiz name={this.state.quiz_name} stage='1' fake='1302' comment='' success={this.state.quiz_1}/>
                    <Quiz name={this.state.quiz_name} stage='2' fake='2333' comment='' success={this.state.quiz_2}/>
                    <Quiz name={this.state.quiz_name} stage='3' fake='3142' comment='' success={this.state.quiz_3}/>
                    <Quiz name={this.state.quiz_name} stage='4' fake='4' comment='' success={this.state.quiz_4}/>
                </center>
            </div>
        )
    };
    
}

export default withCookies(QuizHome);