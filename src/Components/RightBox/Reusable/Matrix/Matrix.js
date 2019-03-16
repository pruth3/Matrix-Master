import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './Matrix.css';

const Matrix = ({assignID, rows, cols, onChangeFunction}) => {

	const subItems = (i, cols) => {
		let td = [];
		var matNum = assignID.substr(-1)
		for (var j=0; j<cols; ++j) {
			let stringCoord = matNum + i.toString() + j.toString();
			td.push(
				<td>
					<input id={stringCoord} defaultValue="" className="matBox" onChange={onChangeFunction} />
				</td>
			)
		}
		return td;
	}
 
	const items = (rows, cols) => {
		let tr=[];
		for (var i=0; i < rows; ++i) {
			tr.push(
				<tr>
					{subItems(i, cols)}
				</tr>
			)
		}
		return tr;
	}

	const formID = assignID + 'form';

	return(
		<form id={formID} className="black-80">
			<table className="matBorder" id={assignID}>
				{items(rows, cols)}
			</table>
		</form>
	);
}

export default Matrix;