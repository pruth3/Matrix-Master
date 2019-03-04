import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './MatrixSM.css';
//import './../../Matrix/Matrix.css'
import math from 'mathjs';

const subItems = (row) => {
	let td = [];
	const colCount = row.length;
	for (var j=0; j<colCount; ++j) {
		td.push(<td><input className="matBox" value={row[j]} /></td>)
	}
	return td;
}

const items = (matrix) => {
	var tr = []
	const rowCount = matrix.length;
	for (var i=0; i < rowCount; ++i) {
		tr.push(<tr>{subItems(matrix[i])}</tr>)
	}
	return tr;
}

const MatrixSM = ({scale, matrix}) => {
	const solvedMatrix = math.multiply(scale, matrix);
	return(
		<form className="black-80 w-40 ">
			<table className="matBorder">
				{items(solvedMatrix)}
			</table>
		</form>
	)
}

export default MatrixSM;