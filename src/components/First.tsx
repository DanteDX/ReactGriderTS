import React,{Component} from "react";

interface FirstProps{
    color: string;
    size: number;
}

class First extends Component<FirstProps>{
    state ={
        name: "shadman"
    };
    render(){
        return(
            <div>
                <p>{this.props.color}</p>
                <p>{this.props.size}</p>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default First;