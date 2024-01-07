import React, { useRef } from "react"

function Ref(){
    let inputRef=useRef(null)
    function handletext(){
        //inputRef.current.value="1000";
        inputRef.current.focus();
        //inputRef.current.style.color="red"
        inputRef.current.style.display=null
    }
    return(
        <div>
            <h2>Use Ref Hook practice</h2>
            <input type="text" ref={inputRef}></input><br/>
            <button onClick={handletext}>Handle Input</button>
        </div>
    )
}
export default Ref