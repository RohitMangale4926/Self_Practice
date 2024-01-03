import React, { useState } from 'react';
import './App.css';
import PracticeProps from './components/PracticeProps';
// import  Welcome from './components/Welcome';

function App() {
  const [name,setName]=useState("Rohit")
  
  return (
    <div className="App">
      {/* <Welcome/> */}
      <PracticeProps name={"Rohit Mangale"} email={"rm@gmail.com"} />
      <PracticeProps name={name} />
      <button onClick={()=>{setName("RM TAP Student")}}><b>UPDATE NAME</b></button>
    </div>
  );
}

export default App;
