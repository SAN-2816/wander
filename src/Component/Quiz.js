import React from 'react'; 
import {Link} from "react-router-dom"

function Quiz({name, stage, fake, comment, success}){

    if(success===1){
        return successOn({name, stage, fake, comment, success});
    }else{
        return successOff({name, stage, fake, comment, success});
    }
}

function successOn({name, stage, fake, comment, success}) {
    return (
    <Link to={`/quizpage/${name}/${fake}/${stage}`}>
            <div className='quiz' style={{background: '#006BFF'}}>
                {stage}
            </div>
    </Link>)
}
function successOff({name, stage, fake, comment, success}) {
    return (
    <div className='quiz' style={{background: '#ced4da'}}>
        {stage}
    </div>)
}
export default Quiz;