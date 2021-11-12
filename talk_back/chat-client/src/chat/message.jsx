import { Component } from "react";

class Message extends Component{
    render(){
        return(
            <div>
                <div><b>{this.props.senderName}</b></div>
                <span>{this.props.text}</span>
            </div>
        )
    }
};

export default Message;