import React, {Component,MouseEvent} from "react";

interface SecondProps{
    secondName: string;
}

interface SecondState{
    name: string;
    age: number;
    counter: number;
}

class Second extends Component<SecondProps,SecondState>{
    constructor(props: SecondProps){
        super(props);
        this.state = {
            name:'Shadman Martin',
            age:10,
            counter:0
        };
    }
    clickHandler = (e:MouseEvent<HTMLElement>):void =>{
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render(){
        return(
            <div>
                <p>Second component</p>
                <p>{this.props.secondName}</p>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.counter}</p>
                <button onClick={e => this.clickHandler(e)}>Click to increment counter</button>
            </div>
        )
    }
}
export default Second;