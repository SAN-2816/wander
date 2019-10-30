
import axios from 'axios';

async function quizModel(_id, quiz_name, stage) {
    try {
        const response = await axios.post('http://ec2-52-79-137-241.ap-northeast-2.compute.amazonaws.com:8080/api/quiz/join', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            user_id: _id,
            quizzes:[{
                quiz_name: quiz_name,
                stage: stage
            }]
        });
        
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export default quizModel;