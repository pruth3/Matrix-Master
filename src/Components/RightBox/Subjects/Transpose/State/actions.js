import {
	CREATE_MATRIX_TRANSPOSE,
	MODIFY_MATRIX_TRANSPOSE,
	SOLVE_MATRIX_TRANSPOSE
} from './constants.js'

export const setCreateTransposeMatrix = (rows, cols) => {
	return {
		type: CREATE_MATRIX_TRANSPOSE, 
		payload: [rows, cols]
	}
}

export const setChangeTransposeMatrix = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_MATRIX_TRANSPOSE, 
		payload: [subId, value]
	}
}

export const setSolveTransposeMatrix = (value) => {
	return {
		type: SOLVE_MATRIX_TRANSPOSE, 
		payload: value
	}
}