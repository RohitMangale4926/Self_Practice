import React, { useState } from "react";
import PracticeClass from "./PracticeClass";

function State(){
    const [data,setData]=useState("Rohit Mangale")
    const [count,setCount]=useState(0)

    function updated(){
        setData("RM Student of TAP")
        setCount(count+1)
    }
    return(
        <div>
            <h1>{data} clicked {count} Times</h1>
            <div>
                <ol type ="disk">
                    State is used for defining data storing data.
                    State is same as a variable.
                    If we change the value of data the variable cant change it automatically but sate can change . 
                </ol>
            </div>
                
                
            
            <button onClick={updated}><b>UPDATE DATA</b></button><hr/>
            <PracticeClass/>
            
        </div>
            
    )
}
export default  State