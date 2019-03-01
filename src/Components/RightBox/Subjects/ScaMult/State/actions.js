import {
	CREATE_MATRIX_SCA_MULT
} from './constants'

export const setCreateSM = (rows, cols) => {
	return {
		type: CREATE_MATRIX_SCA_MULT, 
		payload: [rows, cols]
	}
} 