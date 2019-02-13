import {CHANGE_PAGE} from './constants.js'

// the currentPage object will only be used at the start of the program, 
// it represents the inital state

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