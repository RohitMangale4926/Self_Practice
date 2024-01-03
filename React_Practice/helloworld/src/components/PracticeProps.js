

function PracticeProps(props){
    console.log(props)
   
    return(
        <div>
            <h1>Value Passed Via <i>Props</i> </h1><hr></hr>
            <h3>Name : {props.name} & Email : {props.email}</h3><hr/>         
            
        </div>
       
    )
}
export default PracticeProps