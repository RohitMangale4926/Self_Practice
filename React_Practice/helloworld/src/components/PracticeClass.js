import React,{ Component } from "react";

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
                    <h2>This is CLASS Component (4th Page)</h2>
                    <h3>{this.state.data}</h3>
                    <button onClick={()=>this.changed()}>UPDATE DATA</button><hr/>
            </div>
           
        );
        }
}
export default PracticeClass