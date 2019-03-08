import {
	CREATE_MATRIX, 
	MODIFY_MATRIX_1, 
	MODIFY_MATRIX_2, 
	ADD_MATRIX
} from '../Subjects/MatAdd/State/constants.js'

import {
	CREATE_MATRIX_SCA_MULT, 
	SCA_MULT_MATRIX, 
	MODIFY_SM_MATRIX, 
	MODIFY_SCALE_VALUE
} from '../Subjects/ScaMult/State/constants.js'

import {
	//RESET_ALL_PAGES
} from '../../../State/constants.js'

import {
	CREATE_MATRIX_TRANSPOSE,
	MODIFY_MATRIX_TRANSPOSE,
	SOLVE_MATRIX_TRANSPOSE
} from '../Subjects/Transpose/State/constants.js'

const currentMatrix = { // change addMatrix => solveAddMatrix, etc.

	row: 0, 
	col: 0, 
	matrixArray1: [],  
	matrixArray2: [], 
	addMatrix: false, 

	ScaMultRows: 0, 
	ScaMultCols: 0,
	ScaMultMatrixArray: [], 
	ScaleValue: 1,
	ScaMultMatrix: false,

	TransposeRows: 0, 
	TransposeCols: 0, 
	TransposeMatrixArray: [], 
	solveTranspose: false, 

	MatMultRows1: 0, 
	MatMultCols1Rows2: 0, 
	MatMultCols2: 0, 
	MatMultArray1: [], 
	MatMultArray2: [], 
	solveMatMult: false

}

const resetValues = (matrixNumber) => {
	// this assumes an 8x8 matrix is the largest 
	for (var i = 0; i < 8; ++i) {
		for (var j = 0; j < 8; ++j) {
			const strI = i.toString();
			const strJ = j.toString();
			if (document.getElementById(matrixNumber+strI+strJ)) {
				document.getElementById(matrixNumber+strI+strJ).value = '';
				document.getElementById(matrixNumber+strI+strJ).value = '';
			}
		}
	}
	if (matrixNumber === '3' && document.getElementById('scaleInput')) {
		document.getElementById('scaleInput').value = '';
	}
}

const createArray = (row, col, matrixNumber) => {
	resetValues(matrixNumber);
	var lst = [];
	for (let i = 0; i < row; ++i) {
		var subLst = [];
		for (let j = 0; j < col; ++j) {
			subLst.push(0);
		}
		lst.push(subLst);
	}
	return lst;
}

const modifyArray = (id, value, currArray) => {
	let idArr = id.split(""); 
	let i = Number(idArr[0]);
	let j = Number(idArr[1]);
	// let oldArray = currArray.slice()
	currArray[i][j] = Number(value);
	return currArray
}

export const createMatrix = (state={currentMatrix}, action={}) => {

	switch (action.type) {

		///////////////////////////////////////////////////////// ADD MATRIX /////////////////////////////////////////////////////////

		case CREATE_MATRIX:
			return Object.assign(
				{}, 
				state, 
				{
					row: action.payload[0], 
					col: action.payload[1],
					matrixArray1: createArray(action.payload[0], action.payload[1], "1"),
					matrixArray2: createArray(action.payload[0], action.payload[1], "2"),
					addMatrix: false 
				}
			)
		case MODIFY_MATRIX_1: 
			return Object.assign(
				{}, 
				state, 
				{
					matrixArray1: modifyArray(action.payload[0], action.payload[1], state.matrixArray1), 
					addMatrix: false
				}
			)

		case MODIFY_MATRIX_2: 
			return Object.assign(
				{}, 
				state, 
				{
					matrixArray2: modifyArray(action.payload[0], action.payload[1], state.matrixArray2),
					addMatrix: false
				}
			)

		case ADD_MATRIX: 
			return Object.assign(
				{}, 
				state, 
				{
					addMatrix: true
				}
			)

		///////////////////////////////////////////////////////// SCALE MATRIX /////////////////////////////////////////////////////

		case CREATE_MATRIX_SCA_MULT:
			return Object.assign(
				{},
				state, 
				{
					ScaMultRows: action.payload[0], 
					ScaMultCols: action.payload[1], 
					ScaMultMatrixArray: createArray(action.payload[0], action.payload[1], "3"),
					ScaleValue: 1,
					ScaMultMatrix: false
				}
			)

		case SCA_MULT_MATRIX: 
			return Object.assign(
				{}, 
				state, 
				{
					ScaMultMatrix: true
				}
			)
		case MODIFY_SM_MATRIX: 
			return Object.assign(
				{}, 
				state, 
				{
					ScaMultMatrixArray: modifyArray(action.payload[0], action.payload[1], state.ScaMultMatrixArray), 
					ScaMultMatrix: false
				}
			)
		case MODIFY_SCALE_VALUE: 
			return Object.assign(
				{}, 
				state, 
				{
					ScaleValue: action.payload, 
					ScaMultMatrix: false
				}
			)
		///////////////////////////////////////////////////////// TRANSPOSE MATRIX //////////////////////////////////////////////////

		case CREATE_MATRIX_TRANSPOSE:
			return Object.assign(
					{}, 
					state, 
					{
						TransposeRows: action.payload[0],
						TransposeCols: action.payload[1],
						TransposeMatrixArray: createArray(action.payload[0], action.payload[1], "4"),
						solveTranspose: false
					}
				)

		case MODIFY_MATRIX_TRANSPOSE:
			return Object.assign(
					{}, 
					state, 
					{
						TransposeMatrixArray: modifyArray(action.payload[0], action.payload[1], state.TransposeMatrixArray), 
						solveTranspose: false
					}
				)
		
		case SOLVE_MATRIX_TRANSPOSE:
			return Object.assign(
					{}, 
					state, 
					{
						solveTranspose: true
					}
				)

		///////////////////////////////////////////////////////// MATRIX MULT //////////////////////////////////////////////////

		case CREATE_MATRIX_MULT:
			return Object.assign(
					{}, 
					state, 
					{
						MatMultRows1: action.payload[0],
						MatMultCols1Rows2: action.payload[1],
						MatMultCols2: action.payload[2],
						MatMultArray1: createArray(action.payload[0], action.payload[1], "5"),
						MatMultArray2: createArray(action.payload[1], action.payload[2], "6")
						solveMatMult: false
					}
				)

		case MODIFY_MATRIX_MULT_1:
			return Object.assign(
					{}, 
					state, 
					{
						MatMultArray1: modifyArray(action.payload[0], action.payload[1], state.MatMultArray1), 
						solveMatMult: false
					}
				)
		case MODIFY_MATRIX_MULT_2:
			return Object.assign(
					{}, 
					state, 
					{
						TransposeMatrixArray: modifyArray(action.payload[0], action.payload[1], state.MatMultArray2), 
						solveMatMult: false
					}
				)
		
		case SOLVE_MATRIX_MULT:
			return Object.assign(
					{}, 
					state, 
					{
						solveMatMult: true
					}
				)

		default: 
			return state
	}
}



// case RESET_ALL_PAGES: // this still has to be configured
// 	return Object.assign(
// 		{}, 
// 		state, 
// 		{
// 			row: 0, 
// 			col: 0, 
// 			matrixArray1: [],  
// 			matrixArray2: [], 
// 			addMatrix: false, 
// 			ScaMultRows: 0, 
// 			ScaMultCols: 0,
// 			ScaMultMatrixArray: []
// 		}
// 	)

