import React, { useState } from "react";
import PracticeClass from "./PracticeClass";

function State(){
    const [data,setData]=useState("Rohit Mangale")
    const [count,setCount]=useState(0)
    const [status,setStatus]=useState(true)

    function updated(){
        setData("RM Student of TAP")
        setCount(count+1)
    }
    return(
        <div>
            {status? <h2>State 3rd Page<br/>{data} clicked {count} Times</h2> :null}
           
           
            <div>
                <ol>
                    <li>State is used for defining data storing data.</li>
                    <li>State is same as a variable.</li>
                    <li>If we change the value of data the variable cant change it automatically but sate can change .</li> 
                </ol>
            </div>
                
                
            
            <button onClick={updated}><b>UPDATE DATA</b></button>
            <button onClick={()=>setStatus(false)}><b>HIDE COUNT</b></button>
            <button onClick={()=>setStatus(true)}><b>SHOW COUNT</b></button>
            <button onClick={()=>setStatus(!status)}><b>TOGGLE</b></button><hr/>
            <PracticeClass/>
            
        </div>
            
    )
}
export default  State