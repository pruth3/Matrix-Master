import {
	CREATE_LINEAR_MAPPING, 
	MODIFY_LM_MATRIX, 
	MODIFY_LM_VECTOR, 
	SOLVE_LINEAR_MAPPING
} from './constants.js'

export const setCreateLinearMapping = (rows) => {
	return {
		type: CREATE_LINEAR_MAPPING, 
		payload: rows
	}
} 

export const setModifyLmMatrix = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_LM_MATRIX, 
		payload: [subId, value]
	}
}

export const setModifyLmVector = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_LM_VECTOR, 
		payload: [subId, value]
	}
}

export const setSolveLinearMapping = (value) => {
	return {
		type: SOLVE_LINEAR_MAPPING, 
		payload: true
	}
}  