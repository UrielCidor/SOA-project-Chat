import { Component } from "react";
import Channel from "./channel";


class ChannelList extends Component{

    handleClick = id => {
        this.props.onSelectChannel(id);
    }

    render(){
        let list = 'there is no channels to show';
        if(this.props.channels){
            list = this.props.channels.map(c => 
                <Channel    key={c.id} id={c.id} name={c.name} participants={c.participants}
                            onClick={this.handleClick}></Channel>)
        }
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default ChannelList;