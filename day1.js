import React from "react";
import './day1.css';

const callalert = () =>{
    alert('Message from Javascript alert!');
}

const callog = () => {
    console.log('Message to developer');
}

const myArray = ['a', 'e', 'i', 'o']

const show = () => {
    alert('check the console output!');
    myArray.push('u');
    console.log(myArray);
}

export default function Day1(){
    return(
        <div>
        
            <br /> <br />
            <button onClick={callalert}>Click to get alert</button>   
            <br /> <br />
            <button onClick={callog}>click to log</button>
            <br /> <br />
            <button onClick={show}>click to push</button>
            <br /> <br />

        </div>
    )
}