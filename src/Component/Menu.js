import React from 'react'; 
import {Link} from "react-router-dom"
import arrow from '../Images/menu_arrow.png'

function Menu({location, name, day, link}){
    let buttonGO;
    if(link==="0"){
        buttonGO=(
            <div className="menu_go" style={{background: '#ced4da'}}>
                GO
            </div>
        );
    }else{
        buttonGO=(
            <Link to={{
                pathname: '/login',
                state: {
                    quiz_name: name
                }
            }}>
                <div className="menu_go">
                    GO
                </div>
            </Link>
        );
    }
    return (
    <div className="menu">
        <div className="menu_name">
            <h6>{location}</h6>
            <h2>{name}</h2>
            <h6>{day}</h6>
        </div>
        <div className="menu_arrow">
            <img className="arrow_image" alt=""  src={arrow}/>
        </div>
        {buttonGO}
    </div>
    )
}

export default Menu; 