import {

    CREATE_MATRIX, 
    MODIFY_MATRIX_1, 
    MODIFY_MATRIX_2, 
    ADD_MATRIX
 
} from './constants.js'

export const setCreateMatrix = (rows, cols, id, value) => {
	if (id==="rows" || id==="cols") {
		return {
			type: CREATE_MATRIX, 
			payload: [rows, cols]
		}
	}
	else if (Number(id.split("")[0]) === 1) {
		let IDarray = id.split("");
		IDarray.shift();
		const subID=IDarray.join("");
		return {
			type: MODIFY_MATRIX_1, 
			payload: [subID, value] 
		} 
	}
	else {
		let IDarray = id.split("");
		IDarray.shift();
		const subID=IDarray.join("");
		return {
			type: MODIFY_MATRIX_2, 
			payload: [subID, value]
		}
	}
}
 
export const setAddMatrix = () => {
	return {
		type: ADD_MATRIX, 
		payload: true
	}
}