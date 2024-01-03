import React from 'react';
import ReactDOM from 'react-dom';

function Lists(){

const numbers = [1,2,3,4,5];

const updatedNums = numbers.map((number)=>{
	return <li>{number}</li>;

	
});
// return(
// 	<ul>{updatedNums}</ul>
// );

// ReactDOM.render(
// 	<ul>
// 		{updatedNums}
// 	</ul>,
// 	document.getElementById('root')
// );
}

export default Lists;
