import {

	CREATE_MATRIX

} from './constants.js'

const currentMatrix = {
	dim: [0,0]
}

const createMatrix = (state={currentMatrix}, action={}) => {
	switch (action.type) {
		case CREATE_MATRIX: 
			return Object.assign({}, state, {dim: action.payload});
		default: 
			return state
	}
}

export default createMatrix;