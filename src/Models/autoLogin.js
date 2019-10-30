import axios from 'axios';

async function autoLogin(user_id, token) {
    try {
        const response = await axios.post('https://wanderland.site/api/user/auto', {
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