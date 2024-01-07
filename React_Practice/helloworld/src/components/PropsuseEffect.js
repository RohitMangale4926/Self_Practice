import React,{useState,useEffect} from "react"

function PropsuseEffect(props){
    useEffect(()=>{
        alert("count is :- "+props.count)
    },[props.count])

    return(
        <div>
            <h1>PropsuseEffect 9th page</h1>
            <h4>Count :-{props.count} </h4>
            <h4>Data Props :-{props.data} </h4>

        </div>
        

    )
}
export default PropsuseEffect