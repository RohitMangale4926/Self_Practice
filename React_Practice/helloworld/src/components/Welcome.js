import React from "react";
import User from "./User";
import State from "./State"
function Welcome(){
    return(
        <div>
            <h1>Welcome Rohit Mangale</h1>
            <User/><hr/>
            <State/>
            
        </div>
       
    )
}

//const Welcome =() => <h1>Hello Rohit Sanjay Mangale</h1>

export default Welcome;