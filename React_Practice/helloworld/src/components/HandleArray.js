import React from 'react';
import {Table} from 'react-bootstrap';



function HandleArray(){
    const students=[
        {name:"Rohit", Email:"rohit@gmail.com",contact:"7777777777",
            address:[{HN: "56",City:"pune",country:"India" },
                    {HN: "78",City:"karad",country:"India" }]},
        {name:"Akshay", Email:"Akshay@gmail.com",contact:"5555555555",
            address:[{HN: "56",City:"pune",country:"India" },
                    {HN: "78",City:"karad",country:"India" }]},
        {name:"rahul", Email:"rahul@gmail.com",contact:"356423658",
            address:[{HN: "56",City:"pune",country:"India" },
            {HN: "78",City:"karad",country:"India" }]},
        {name:"Omkar", Email:"Omkar@gmail.com",contact:"792.2659368",
            address:[{HN: "56",City:"pune",country:"India" },
            {HN: "78",City:"karad",country:"India" }]}
    ]
    return(
        <div>
            <h1>Handle Array</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                </thead >
                {students.map((data,i) => 
                <tbody key={i}>                    
                   
                        <tr>
                            <td>{i+1}</td>
                            <td>{data.name}</td>
                            <td>{data.Email}</td>
                            <td>{data.contact}</td>
                            <td>
                            {data.address.map((item)=>
                                <Table striped  hover>                                                                                                   
                                    <tbody key={item.HN}>
                                        <tr>
                                            <td>{item.HN}</td>
                                            <td>{item.City}</td>
                                            <td>{item.country}</td>
                                        </tr>
                                    </tbody>
                                </Table>  
                            )}
                            </td>
                        </tr>
            
                </tbody>
                )}   

            </Table>
            

        </div>
    )
}
export default HandleArray