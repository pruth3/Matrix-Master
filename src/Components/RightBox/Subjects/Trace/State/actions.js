import {
	CREATE_TRACE_MATRIX,
	MODIFY_TRACE_ARRAY,
	SOLVE_TRACE_ARRAY
} from './constants.js'

export const setCreateTrace = (rows) => {
	return {
		type: CREATE_TRACE_MATRIX, 
		payload: rows
	}
} 

export const setModifyTraceMatrix = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_TRACE_ARRAY, 
		payload: [subId, value]
	}
}

export const setSolveTrace = (value) => {
	return {
		type: SOLVE_TRACE_ARRAY, 
		payload: true
	}
}  