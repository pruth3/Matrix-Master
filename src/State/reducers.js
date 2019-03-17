import {
	CHANGE_PAGE, 
	START_PAGE
} from './constants.js'

const currentPage = {
	page: 'Home'
}

export const newPage = (state={currentPage}, action={}) => {
	switch (action.type) {
		case CHANGE_PAGE: 
			return Object.assign({}, state, {page: action.payload});
		case START_PAGE: 
			return Object.assign({}, state, currentPage); 
		default: 
			return state
	}
}

 