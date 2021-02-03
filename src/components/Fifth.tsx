import {connect} from "react-redux";
import {ActionOne,CovidInfo} from "../actions/ActionOne";
import {StoreState} from "../reducers/index";

export interface FifthProps{
    ActionOne: Function;
    info: CovidInfo[];
}


const Fifth = (props:FifthProps):JSX.Element =>{
    const clickHandler = () =>{
        props.ActionOne();
    }

    return(
        <div>
            <button onClick={(e) => clickHandler()}>Fetch Covid 19 Info</button>
            <button onClick={e => console.log(props.info)}>Console Log props info</button>
        </div>
    )
}

const mapStateToProps = (state: StoreState) =>{
    return {
        info: state.ActionOne
    }
}

export default connect(mapStateToProps,{ActionOne})(Fifth);