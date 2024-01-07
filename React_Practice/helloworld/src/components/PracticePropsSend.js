import React,{useState} from "react"
import PracticeProps from "./PracticeProps"
import PropsuseEffect from "./PropsuseEffect"

function PracticePropsSend(){
    const [name,setName]=useState(null)
    const [email,setMail]=useState(null)
    const [count,setCount]=useState(0)

    
    const [num,setNum]=useState(10)
    const [data,setData]=useState(100)


    function Update(){
        if(count>0){
          console.log("I am reloaded")
        }
        setName("RM TAP Student")
        setMail("tap@gmail.com")
        setCount(count+1)
      }

    return(
        <div>
            <h1>PracticePropsSend Data (5th Page)</h1>
            <PracticeProps name={"Rohit Mangale"} email={"rm@gmail.com"} /><hr/>
            <PracticeProps name={name} email={email} count={count}/>
            <button onClick={Update}><b>UPDATE NAME & EMAIL</b></button><hr/>


            <PropsuseEffect count={num}data={data}/>
            <button onClick={()=>setNum(num+1)}><b>Count</b></button>
            <button onClick={()=>setData(data+1)}><b>Data</b></button><hr/>
        </div>
    )
   
}
export default PracticePropsSend