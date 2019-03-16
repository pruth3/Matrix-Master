 import {
	CREATE_CROSS_MATRIX, 
	MODIFY_CROSS_ARRAY1, 
	MODIFY_CROSS_ARRAY2,
	SOLVE_CROSS_ARRAY
} from './constants.js'

export const setCreateCross = () => {
	return {
		type: CREATE_CROSS_MATRIX
	}
} 

export const setModifyCrossMatrix1 = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_CROSS_ARRAY1, 
		payload: [subId, value]
	}
}

export const setModifyCrossMatrix2 = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_CROSS_ARRAY2, 
		payload: [subId, value]
	}
}

export const setSolveCross = (value) => {
	return {
		type: SOLVE_CROSS_ARRAY, 
		payload: true
	}
}