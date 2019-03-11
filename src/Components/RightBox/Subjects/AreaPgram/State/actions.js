import {
	CREATE_PGRAM_MATRIX,
	MODIFY_PGRAM_VECTOR1,
	MODIFY_PGRAM_VECTOR2, 
	MODIFY_PGRAM_VECTOR3,
	SOLVE_PGRAM_MATRIX
} from './constants.js'

export const setCreatePgram = (rows) => {
	return {
		type: CREATE_PGRAM_MATRIX, 
		payload: rows
	}
} 

export const setModifyPgram1 = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_PGRAM_VECTOR1, 
		payload: [subId, value]
	}
}

export const setModifyPgram2 = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_PGRAM_VECTOR2, 
		payload: [subId, value]
	}
}

export const setModifyPgram3 = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_PGRAM_VECTOR3, 
		payload: [subId, value]
	}
}

export const setSolvePgram = (value) => {
	return {
		type: SOLVE_PGRAM_MATRIX, 
		payload: true 
	}
}