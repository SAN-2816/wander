import React, {Component} from 'react';
import Menu from "../Component/Menu";
import Event from "../Component/Event";

class Home extends Component{
    render(){
        return(
            <div>
                <Event/>
                <h3 className="eventText">EVENT</h3>
                <div className="menus">
                    <Menu
                    location="서울"
                    name="중앙대학교"
                    day="19.10.31(목)~19.11.01(금)"
                    link=""
                    />
                    <Menu
                    location="종로"
                    name="낙산 공원"
                    day="19.11.02(토)"
                    link=""
                    />
                    <Menu
                    name="커밍쑨"
                    day="19.XX.XX"
                    link=""
                    />
                </div>
            </div>
        );
    };
}

export default Home;