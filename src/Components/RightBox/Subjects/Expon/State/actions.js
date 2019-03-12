import {
	CREATE_EXPON_MATRIX,
	MODIFY_EXPON_ARRAY,
	SOLVE_EXPON_ARRAY
} from './constants.js'

export const setCreateExpon = (rows) => {
	return {
		type: CREATE_EXPON_MATRIX, 
		payload: rows
	}
} 

export const setModifyExponMatrix = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_EXPON_ARRAY, 
		payload: [subId, value]
	}
}

export const setSolveExpon = (value) => {
	return {
		type: SOLVE_EXPON_ARRAY, 
		payload: true
	}
}