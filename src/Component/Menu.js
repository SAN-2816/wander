import React from 'react'; 
import {Link} from "react-router-dom"
import arrow from '../Images/menu_arrow.png'

function Menu({location, name, day, link}){
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
        <Link to="/login">
            <div className="menu_go">
            GO
            </div>
        </Link>
        
    </div>
    )
}
export default Menu; 