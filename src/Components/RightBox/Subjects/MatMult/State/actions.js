 import {
	CREATE_MATRIX_MULT, 
	MODIFY_MATRIX_MULT_1, 
	MODIFY_MATRIX_MULT_2, 
	SOLVE_MATRIX_MULT
} from './constants.js'

export const setCreateMatrixMult = (rows1, cols1rows2, cols2) => {
	return {
		type: CREATE_MATRIX_MULT, 
		payload: [rows1, cols1rows2, cols2]
	}
}

export const setModifyMatrix1 = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_MATRIX_MULT_1, 
		payload: [subId, value]
	}
}

export const setModifyMatrix2 = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_MATRIX_MULT_2, 
		payload: [subId, value]
	}
}

export const setSolveMatrixMult = () => {
	return {
		type: SOLVE_MATRIX_MULT, 
		value: true
	}
}