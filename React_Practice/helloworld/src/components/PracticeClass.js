import { Component } from "react";

class PracticeClass extends Component{
   
    constructor(){
        super();
        this.state={
            data:1
        }
    }
    changed(){
            this.setState({data:this.state.data+1})
    }
    
    
    
    render(){
        return(
            <div>
                    <h1>This is CLASS Component</h1>
                    <h3>{this.state.data}</h3>
                    <button onClick={()=>this.changed()}>UPDATE DATA</button>
            </div>
           
        );
        }
}
export default PracticeClass