import {
	CREATE_DOT_MATRIX, 
	MODIFY_DOT_ARRAY1, 
	MODIFY_DOT_ARRAY2, 
	SOLVE_DOT_MATRIX
} from './constants.js'

export const setCreateDot = (rows) => {
	return {
		type: CREATE_DOT_MATRIX, 
		payload: rows
	}
} 

export const setModifyDotArray1 = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_DOT_ARRAY1, 
		payload: [subId, value]
	}
}

export const setModifyDotArray2 = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_DOT_ARRAY2, 
		payload: [subId, value]
	}
}

export const setSolveDot = (value) => {
	return {
		type: SOLVE_DOT_MATRIX, 
		payload: true
	}
}