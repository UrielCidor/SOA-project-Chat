import { Component } from "react";
import Message from "./message";

class MessagesPanel extends Component{

    state = { input_value: ''}

    send = () =>{
        if(this.state.input_value && this.state.input_value !== ''){
            this.props.onSendMessage(this.props.channel.id, this.state.input_value);
            this.setState({input_value: ''});
        }
    }

    handleInput = e => {
        this.setState({input_value: e.target.value});
    }

    render(){

        let list = <div>There is not messages to show</div>
        if(this.props.channel && this.props.channel.messages) {
            list = this.props.channel.messages.map(m => 
                <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text}></Message>)
        }
        return(
            <div>
                <div>{list}</div>
                {this.props.channel && <div>
                    <input type='text' onChange={this.handleInput} value={this.state.input_value}/>
                    <button onClick={this.send}>Send</button>
                </div>}
            </div>
        )
    }
};

export default MessagesPanel;