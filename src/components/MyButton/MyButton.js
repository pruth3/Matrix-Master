import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './MyButton.css';

const MyButton = ({buttonName, onChangePage}) => {
	//console.log('My Button', onChangePage)
	return(
		<input type="button"
			   onClick={onChangePage}
			   className="no-underline near-white bg-animate bg-near-black hover-bg-gray 
					       inline-flex items-center ma2 tc br2 pa2"
			   value={buttonName}/>


		// <button onClick={onChangePage}
		// 		value="1"
		// 		className="no-underline near-white bg-animate bg-near-black hover-bg-gray 
		// 			       inline-flex items-center ma2 tc br2 pa2" 
		// 		title="">
		//     <span className="f6 ml3 pr2">{buttonName}</span>
		// </button>
	);
}

export default MyButton;