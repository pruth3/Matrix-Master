import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './MyButton.css';

const MyButton = ({buttonName, setNewPage}) => {
	return(
		<input type="button"
			   onClick={setNewPage}
			   className="no-underline near-white bg-animate bg-near-black hover-bg-gray 
					       inline-flex items-center ma2 tc br2 pa2"
			   value={buttonName}
			   style={{fontSize: "12.5px"}}/>
	);
}

export default MyButton;
