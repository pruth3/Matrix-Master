import {
	CREATE_MATRIX_SOLVE, 
	MODIFY_MATRIX_SOLVE,
	MODIFY_MATRIX_B_SOLVE, 
	SOLVE_MATRIX_SOLVE,
} from './constants.js'

export const setCreateMatrixSolve = (rows) => {
	return {
		type: CREATE_MATRIX_SOLVE, 
		payload: rows
	}
} 

export const setModifyMatrixSolve = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_MATRIX_SOLVE, 
		payload: [subId, value]
	}
}

export const setModifyMatrixBSolve = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_MATRIX_B_SOLVE, 
		payload: [subId, value]
	}
}

export const setSolveMatrixSolve = (value) => {
	return {
		type: SOLVE_MATRIX_SOLVE, 
		payload: true
	}
}