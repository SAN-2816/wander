import React, {Component} from 'react';
import tutorial_image from "../Images/tutorial_image.jpeg"

class Tutorial extends Component{
    render(){
        return(
            <div>
                <img className="tutorial_image" alt="" src={tutorial_image}/>
            </div>
        );
    };
}
export default Tutorial;