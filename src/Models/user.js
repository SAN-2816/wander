
import axios from 'axios';

function user(email, phone) {
    return axios.post('http://ec2-52-79-137-241.ap-northeast-2.compute.amazonaws.com:8080/api/user/login', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        email: email,
        phone: phone
    })
    .then( response => { 
        console.log(response.data);
         return response.data.complete;
    })
    .catch( error => { 
        console.log(error);
    });
}

export default user;