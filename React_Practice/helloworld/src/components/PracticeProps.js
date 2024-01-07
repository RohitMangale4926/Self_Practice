import React from "react"

function PracticeProps(props){
    console.log(props)
   
    return(
        <div>
            <h2>Accepted Data From PracticepropsSend via Props </h2>
            <h4>Name : {props.name} & Email : {props.email} Count:{props.count}</h4>         
            
        </div>
       
    )
}
export default PracticeProps