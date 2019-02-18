import {

	CREATE_MATRIX, 
	MODIFY_MATRIX_1, 
	MODIFY_MATRIX_2, 
	ADD_MATRIX

} from './constants.js'

const currentMatrix = {
	row: 0, 
	col: 0, 
	matrixArray1: [], 
	matrixArray2: [], 
	addMatrix: false
}

const createArray = (row, col) => {
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

const createMatrix = (state={currentMatrix}, action={}) => {
	switch (action.type) {
		case CREATE_MATRIX:
			return Object.assign({}, state, {row: action.payload[0], 
											 col: action.payload[1],
											 matrixArray1: createArray(action.payload[0], action.payload[1]),
											 matrixArray2: createArray(action.payload[0], action.payload[1]),
											 addMatrix: false })
		case MODIFY_MATRIX_1: 
			return Object.assign({}, state, {matrixArray1: modifyArray(action.payload[0], action.payload[1], state.matrixArray1)})

		case MODIFY_MATRIX_2: 
			return Object.assign({}, state, {matrixArray2: modifyArray(action.payload[0], action.payload[1], state.matrixArray2)})

		case ADD_MATRIX: 
			return Object.assign({}, state, {addMatrix: true})

		default: 
			return state
	}
}

export default createMatrix;