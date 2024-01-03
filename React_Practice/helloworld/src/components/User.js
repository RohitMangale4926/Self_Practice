import React from "react";
import Users from "./Users";
//function components with JSX
function User(){
    let data="RM"
    function apple({}){
        data ="Rohit Mangale"
        alert(data+" You Clicked 1st Button")
    }
    return(
        <div>
                <h3>User Name : RohitMangale</h3>
                <Users/>
                <button onClick={apple}>CLICK ME</button>
                <button onClick={()=>alert(data+" you clicked 2nd button")}>CLICK ME</button>
                

        </div>
        
    )
}

export default User