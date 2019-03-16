import { 
	CREATE_MATRIX_SCA_MULT, 
	SCA_MULT_MATRIX, 
	MODIFY_SM_MATRIX, 
	MODIFY_SCALE_VALUE
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

export const setChangeMatrixSM = (id, value) => {
	const subId = id.slice(1);
	return {
		type: MODIFY_SM_MATRIX, 
		payload: [subId, value]
	}
}

export const setScaleValue = (value) => {
	return {
		type: MODIFY_SCALE_VALUE, 
		payload: value
	}
}