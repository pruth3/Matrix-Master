import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './CrossMatrix.css';
//import './../../Matrix/Matrix.css'
import math from 'mathjs';

var flatten = function(arr) {
    var out = [];
    for(var i = 0; i < arr.length; i++) {
        out.push.apply(out, Array.isArray(arr[i]) ? flatten(arr[i]) : [ arr[i] ]);
    }
    return out;
};

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

const CrossMatrix = ({matrix1, matrix2}) => {
	const solvedMatrix1D = math.cross(flatten(matrix1), flatten(matrix2));
	const solvedMatrix2D = [[solvedMatrix1D[0]], [solvedMatrix1D[1]], [solvedMatrix1D[2]]];
	return ( 
		<form className="black-80">
			<table className="matBorder">
				{items(solvedMatrix2D)}
			</table>
		</form>
	);
}

export default CrossMatrix;