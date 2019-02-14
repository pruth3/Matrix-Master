import {

	CHANGE_PAGE, 
	CREATE_MATRIX

} from './constants.js'

const currentPage = {
	page: 'Home'
}

const newPage = (state={currentPage}, action={}) => {
	switch (action.type) {
		case CHANGE_PAGE: 
			return Object.assign({}, state, {page: action.payload});
		default: 
			return state
	}
}

export default newPage;

const currentMatrix = {
	dim: [0,0]
}

const matrix = (state={currentMatrix}, action={}) => {
	switch (action.type) {
		case 
	}
}