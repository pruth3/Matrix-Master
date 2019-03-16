import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './MatrixInverse.css';
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

const MatrixInverse = ({matrix}) => {
	if (!math.det(matrix)) return <p>The following cannot be inversed, the determinant is 0</p>
	else {
		const solvedMatrix = math.inv(matrix)
		return(
			<form className="black-80">
				<table className="matBorder">
					{items(solvedMatrix)}
				</table>
			</form>
		)
	}
}

export default MatrixInverse;