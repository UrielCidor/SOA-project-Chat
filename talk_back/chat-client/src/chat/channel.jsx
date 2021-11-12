import { Component } from "react";

class Channel extends Component{

    click = () =>{
        this.props.onClick(this.props.id);
    }

    render(){
        return(
            <div onClick={this.click}>
                <div>{this.props.name}</div>
                <span>{this.props.participants}</span>
            </div>
        )
    }
};

export default Channel;