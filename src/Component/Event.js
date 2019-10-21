import React from 'react'; 
import banner from '../Images/event_banner.jpeg'
import { Link } from "react-router-dom";

function Event(){
    return (
        <div className="banner">
        <Link to="/tutorial">
            <img className="banner_image" alt=""  src={banner}/> 
        </Link>
        </div>
    )
}
export default Event; 