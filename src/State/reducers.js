import {

	CHANGE_PAGE

} from './constants.js'

const currentPage = {
	page: 'Home'
}

export const newPage = (state={currentPage}, action={}) => {
	switch (action.type) {
		case CHANGE_PAGE: 
			return Object.assign({}, state, {page: action.payload});
		default: 
			return state
	}
}

