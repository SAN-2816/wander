
import axios from 'axios';

async function checkQuiz(_id, quiz_name, stage) {
    try {
        const response = await axios.post('https://wanderland.site/api/quiz/update', {
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

export default checkQuiz;