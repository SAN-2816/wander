
import axios from 'axios';

function user(email, phone) {
    var response_complete="";
    console.log(response_complete);
    axios.post('http://ec2-52-79-137-241.ap-northeast-2.compute.amazonaws.com:8080/api/user/login', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        email: email,
        phone: phone
    })
    .then( response => { 
        console.log(response.data);
        response_complete = response.data.complete;
        console.log(response_complete);
    })
    .catch( error => { 
        console.log(error);
    });
    return response_complete;
}

export default user;