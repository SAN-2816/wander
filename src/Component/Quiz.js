import React from 'react'; 
import {Link} from "react-router-dom"

function Quiz({name, num, comment, success}){

    if(success==='1'){
        return successOn({name, num, comment, success});
    }else{
        return successOff({name, num, comment, success});
    }
}

function successOn({name, num, comment, success}) {
    return (
    <Link to={`/quizpage/${name}/${num}`}>
            <div className='quiz' style={{background: '#006BFF'}}>
                {num}
            </div>
    </Link>)
}
function successOff({name, num, comment, success}) {
    return (
    <div className='quiz' style={{background: '#ced4da'}}>
        {num}
    </div>)
}
export default Quiz;