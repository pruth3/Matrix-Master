import {

	CREATE_MATRIX, 
	MODIFY_MATRIX

} from './constants.js'

const currentMatrix = {
	row: 0, 
	col: 0, 
	matrixArray: []
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
	console.log(lst)
	return lst;
}

const modifyArray = (id, value, currArray) => {
	let idArr = id.split(""); 
	let i = Number(idArr[0]);
	let j = Number(idArr[1]);
	currArray[i][j] = Number(value);
	console.log(currArray);
	return currArray
}

const createMatrix = (state={currentMatrix}, action={}) => {
	// const currArray = state.matrixArray;
	// console.log(currArray);
	switch (action.type) {
		case CREATE_MATRIX:
			return Object.assign({}, state, {row: action.payload[0], 
											 col: action.payload[1],
											 matrixArray: createArray(action.payload[0], action.payload[1]) })
		case MODIFY_MATRIX: 
			return Object.assign({}, state, {matrixArray: modifyArray(action.payload[0], action.payload[1], state.matrixArray)})

		default: 
			return state
	}
}

export default createMatrix;