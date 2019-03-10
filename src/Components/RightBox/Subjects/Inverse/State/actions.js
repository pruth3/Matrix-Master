
import {
	 CREATE_MATRIX_INVERSE,
	 MODIFY_MATRIX_INVERSE,
	 SOLVE_MATRIX_INVERSE
} from './constants.js'

export const setCreateInverse = (rows) => {
	return {
		type: CREATE_MATRIX_INVERSE, 
		payload: rows
	}
} 

export const setModifyInverseMatrix = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_MATRIX_INVERSE, 
		payload: [subId, value]
	}
}

export const setSolveInverse = (value) => {
	return {
		type: SOLVE_MATRIX_INVERSE, 
		payload: true
	}
}  