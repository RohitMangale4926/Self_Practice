import React,{ useState } from "react"
import Login from './Login'

function StudentForm(){

    const[name,setName]=useState('')
    const[gender,setGender]=useState('')
    const[ck,setck]=useState('')

    function getEventData(e){
        console.log(name,gender,ck)
        e.preventDefault()
    }

    return(
        <div>
            <h1>Student Entry Form (7th Page)</h1>
            <form onSubmit={getEventData}>
                <label>Name : </label>
                <input type="text"placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <label>Gender : </label>
                <select onChange={(e)=>setGender(e.target.value)}>
                    <option>---Select Gender---</option>
                    <option>Male</option>
                    <option>Female</option>
                </select><br/><br/>
                <input type="checkbox"onChange={(e)=>setck(e.target.checked)}/><span>I Accepted all terms and condition</span><br/><br/>
                <button type="submit">Submit</button>
                
            </form><hr/>
            <Login/>
        </div>
        
       
    )
}
export default StudentForm