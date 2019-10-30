import axios from 'axios';

async function user(email, phone) {
    try {
        const response = await axios.post('https://wanderland.site/api/user/login', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            email: email,
            phone: phone
        });
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}


export default user;
