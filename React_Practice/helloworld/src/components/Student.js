import React,{ useState } from "react"
import StudentForm from "./StudentForm"

function Student(){
    const[data,setData]=useState('')
    const[print,setPrint]=useState(false)
   
    function getdata(val){
        console.log(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }

    return(
        <div>
            
            <h1>Student Data (6th Page)</h1>
            <label>Enter Student Name : </label>
            <input type="text"onChange={getdata}></input><br/>
            <button onClick={()=>setPrint(true)}><b>Print Data</b></button><br/>
            <p>
               {print ? <label>You Entered Name : <b>{data}</b></label>:null} 
            </p><hr/>
           
            <StudentForm/>
                     
            
        </div>
       
        
    )
}
export default Student