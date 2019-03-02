import {
	CREATE_MATRIX_SCA_MULT, 
	SCA_MULT_MATRIX
} from './constants'

export const setCreateSM = (rows, cols) => {
	return {
		type: CREATE_MATRIX_SCA_MULT, 
		payload: [rows, cols]
	}
} 

export const setScaMultMatrix = () => {
	return {
		type: SCA_MULT_MATRIX, 
		payload: true
	} 
} 