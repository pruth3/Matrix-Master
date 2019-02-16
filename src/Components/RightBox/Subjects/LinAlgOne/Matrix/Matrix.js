import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './Matrix.css';

const Matrix = ({rows, cols}) => {

	const subItems = (cols) => {
		let td = [];
		for (var j=0; j<cols; ++j) {
			td.push(<td><input className="matBox"/></td>)
		}
		return td;
	}
 
	const items = (rows, cols) => {
		let tr=[];
		for (var i=0; i < rows; ++i) {
			tr.push(<tr>{subItems(cols)}</tr>)
		}
		return tr;
	}

	return(
		<form className="black-80 w-40 ">
			<table className="matBorder">
				{items(rows, cols)}
			</table>
		</form>
	);
}

export default Matrix;