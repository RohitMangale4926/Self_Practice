import React from 'react';


function Car(props){
    return <h2>I Am Car {props.brand}</h2>
}

function Garage(){
    const carname="Ford";
    return(
        <div>
            <h1>Who lives in my garage?</h1>
            <Car brand={carname}/>
        </div>
    )
}
export default Garage;