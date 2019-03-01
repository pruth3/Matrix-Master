import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';

import './MatrixSelect.css';

const MatrixSelect = ({setId, setCreateMatrix}) => {
	return(
		<div className="selection">
			<p>
				{
					(setId === "rows" || setId === "RowsSM") ?
						<p>Enter Matrix Rows:<br/></p>
					:
						<p>Enter Matrix Columns:<br/></p>
				}	
				<select id={setId} 
						className="matDim"
						onChange={setCreateMatrix}>
				 	<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
				</select>
			</p>
		</div>
	);
}

export default MatrixSelect;