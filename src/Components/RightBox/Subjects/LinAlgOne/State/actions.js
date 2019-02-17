import {

    CREATE_MATRIX, 
    MODIFY_MATRIX

} from './constants.js'

export const setCreateMatrix = (rows, cols, id, value) => {
	if (id==="rows" || id==="cols")
		return {
			type: CREATE_MATRIX, 
			payload: [rows, cols]
		}
	else {
		return {
			type: MODIFY_MATRIX, 
			payload: [id, value]
		}
	}
}
