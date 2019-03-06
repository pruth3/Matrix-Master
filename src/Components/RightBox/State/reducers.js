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

const currentMatrix = {
	row: 0, 
	col: 0, 
	matrixArray1: [],  
	matrixArray2: [], 
	addMatrix: false, 
	ScaMultRows: 0, 
	ScaMultCols: 0,
	ScaMultMatrixArray: [], 
	ScaMultMatrix: false, 
	ScaleValue: 1
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
	console.log(action.type)
	switch (action.type) {
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

		default: 
			return state
	}
}
