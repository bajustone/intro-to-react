import { Component } from "react";

import notificationOff from "../../resources/icons/notification-off.svg";
import message from "../../resources/icons/message.svg";
import status from "../../resources/icons/status.svg";

import "./style.css";

class Header extends Component{

    render(){
        console.log(notificationOff);
        return <div>
            <img src="" alt="" />
            <div className="icon-buttons">
                <button>
                    <img src={notificationOff} alt="" />
                </button>
                <button>
                    <img src={status} alt="" />
                </button>
                <button>
                    <img src={message} alt="" />
                </button>
            </div>
        </div>
    }
}
export default Header;