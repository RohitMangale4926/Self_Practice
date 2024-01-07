import React from 'react';
import './App.css';
import  Welcome from './components/Welcome';
import Student from './components/Student';
import PracticePropsSend from './components/PracticePropsSend';
import HandleArray from './components/HandleArray';
import Ref from './components/Ref';


function App() {  
  return (
    <div className="App">
       <Welcome/> 
       <PracticePropsSend/>      
       <Student/>  
       <HandleArray/> 
       <Ref/>       
       
    </div>
  );
}

export default App;
