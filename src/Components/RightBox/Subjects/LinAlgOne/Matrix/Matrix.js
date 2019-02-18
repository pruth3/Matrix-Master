import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './Matrix.css';

const Matrix = ({assignID, rows, cols, setCreateMatrix}) => {

	const subItems = (i, cols) => {
		let td = [];
		var matNum = 1;
		if (assignID==='mat2') {
			matNum = 2; 
		}

		for (var j=0; j<cols; ++j) {
			let stringCoord = matNum.toString() + i.toString() + j.toString();
			td.push(<td><input id={stringCoord} className="matBox" onChange={setCreateMatrix} /></td>)
		}
		return td;
	}
 
	const items = (rows, cols) => {
		let tr=[];
		for (var i=0; i < rows; ++i) {
			tr.push(<tr>{subItems(i, cols)}</tr>)
		}
		return tr;
	}

	return(
		<form className="black-80 w-40 ">
			<table className="matBorder" id={assignID}>
				{items(rows, cols)}
			</table>
		</form>
	);
}

export default Matrix;