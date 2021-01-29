import React from "react";

interface ThirdProps{
    ThirdName: string;
    ThirdAge: number;
}

const Third = (props: ThirdProps):JSX.Element =>{
    return(
        <div>
            {props.ThirdName}
            {props.ThirdAge}
        </div>
    )
}

export default Third;