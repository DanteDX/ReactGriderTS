import React,{useEffect} from 'react';
import "../styles/Fourth.scss";
interface FourthProps{
    Name?: string;
    Age?: number;
    Profession?: string;
}
const Fourth = (props: FourthProps):JSX.Element =>{
    useEffect(() =>{
        console.log('Fourth Component has rendered');
    },[])
    return(
        <div className="Fourth">
            <span>Nothing to see here</span>
            <span>{props.Name}</span>
            <span>{props.Age}</span>
            <span>{props.Profession}</span>
        </div>
    )
}
export default Fourth;