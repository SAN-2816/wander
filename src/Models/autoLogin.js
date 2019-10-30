import axios from 'axios';

async function autoLogin(user_id, token) {
    try {
        const response = await axios.post('http://ec2-52-79-137-241.ap-northeast-2.compute.amazonaws.com:8080/api/user/auto', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            user_id: user_id,
            token: token
        });
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export default autoLogin;