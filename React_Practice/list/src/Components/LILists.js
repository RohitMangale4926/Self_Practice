import React from 'react';
import ReactDOM from 'react-dom';

// Component that will return an
// unordered list
function Navmenu(props)
{
	
	const list = props.numbers;
	
	const updatedList = list.map((listItems)=>{
		return <li>{listItems}</li>;
		
	});

	return(
		<div>
				
			<ul>{updatedList}</ul>
			
		</div>
			
			
		
		
	);
}

function MenuList(){
	const menuItems = [1,2,3,4,5];
	return(
        <div>
            <h1>Displaying List</h1>
            <Navmenu numbers={menuItems}/>
        </div>
    )
}




// ReactDOM.render(
// 	<Navmenu menuitems = {menuItems} />,
// 	document.getElementById('root')
// );
export default MenuList;