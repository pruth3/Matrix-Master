import {
	CREATE_DET_MATRIX,
	MODIFY_DET_MATRIX,
	SOLVE_DET_MATRIX
} from './constants.js'

export const setCreateDet = (rows) => {
	return {
		type: CREATE_DET_MATRIX, 
		payload: rows
	}
} 

export const setModifyDetMatrix = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_DET_MATRIX, 
		payload: [subId, value]
	}
}

export const setSolveDet = (value) => {
	return {
		type: SOLVE_DET_MATRIX, 
		payload: true
	}
} 