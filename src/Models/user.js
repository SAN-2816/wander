import axios from 'axios';

async function user(email, phone) {
    try {
        const response = await axios.post('http://ec2-52-79-137-241.ap-northeast-2.compute.amazonaws.com:8080/api/user/login', {
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
