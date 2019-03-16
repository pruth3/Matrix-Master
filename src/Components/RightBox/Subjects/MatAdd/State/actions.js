import { 

    CREATE_MATRIX, 
    MODIFY_MATRIX_1, 
    MODIFY_MATRIX_2, 
    ADD_MATRIX
 
} from './constants.js'

export const setCreateMatrix = (rows, cols) => {
	return {
		type: CREATE_MATRIX, 
		payload: [rows, cols]
	}
}
 
export const setChangeMatrix = (id, value) => {
	let IDarray = id.split("")
	IDarray.shift();
	const subID = IDarray.join("");
	var type = MODIFY_MATRIX_2
	if (Number(id.split("")[0]) === 1) type = MODIFY_MATRIX_1
	return {
		type: type, 
		payload: [subID, value]
	}
}

export const setAddMatrix = () => {
	return {
		type: ADD_MATRIX, 
		payload: true
	} 
} 