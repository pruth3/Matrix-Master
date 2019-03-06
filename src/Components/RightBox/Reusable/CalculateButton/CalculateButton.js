import React from 'react'; 
// eslint-disable-next-line 
import tachyons from 'tachyons';
import './CalculateButton.css'

const CalculateButton = ({onClickFunction}) => {
	return(
		<div className="w-100" >
			<input  type="button"
			    className="db no-underline near-black bg-animate bg-near-white hover-bg-gray 
					       inline-flex items-center ma2 tc br2 pa2 submitButton center"
			    value="Calculate"
			    onClick={onClickFunction}
			/>
		</div>
	);
}

export default CalculateButton;