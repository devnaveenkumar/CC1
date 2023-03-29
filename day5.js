import React from "react";

function Called(props){
    return(
        <h2>
        {props.name}
        </h2>
    )
}

export default function List(){
    const arr = ['one', 'two', 'three'];
    return(
        <div>
            {arr.map((n) => <li key={n.toString()}><Called name = {n}/></li>)}
        </div>
    )
}