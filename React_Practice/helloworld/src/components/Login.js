import React,{ useState } from "react"

function Login(){

    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[nameErr,setNameErr]=useState(false)
    const[passErr,setPassErr]=useState(false)

    function getEventData(e){
        console.log(name,password);
        e.preventDefault()
    }

    function nameHandler(e){
        let item=e.target.value
        
        if(item.length < 4){
            setNameErr(true)
            
        }
        else{
            setNameErr(false)
        }
        setName(item)
        
    }
    function passHandler(e){
        let item=e.target.value
        
        if(item.length < 4){
            setPassErr(true)
            
        }
        else{
            setPassErr(false)
        }
        setPassword(item)
        
    }

    return(
        <div>
            <h1>Student Login (8th Page)</h1>
            <form onSubmit={getEventData}>
                <label>Name : </label>
                <input type="text"placeholder="Enter Name" onChange={nameHandler}/>{nameErr?<span>Invalid Name</span>:null}<br/><br/>
                <label>Password : </label>
                <input type="password"placeholder="Enter Password" onChange={passHandler}/>{passErr?<span>Invalid Password</span>:null}<br/><br/>
                <button type="submit">Submit</button>                
            </form><hr/>
        </div>
       
    )
}
export default Login