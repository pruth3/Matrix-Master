import {

    CHANGE_PAGE,
    CREATE_MATRIX

} from './constants.js'

export const setNewPage = (text) => {
	let livePage = 'Home'; 
    switch(text) {
      case 'Home' : livePage='Home'; break;
      case 'Linear Algebra 1' : livePage='LinAlgOne'; break;
      case 'Linear Algebra 2' : livePage='LinAlgTwo'; break;
      case 'Calculus 1' : livePage='CalcOne'; break;
      case 'Calculus 2' : livePage='CalcTwo'; break;
      case 'Calculus 3' : livePage='CalcThree'; break;
      case 'Calculus 4' : livePage='CalcFour'; break;
      case 'Statistics' : livePage='Stats'; break;
      case 'Mechanics' : livePage='Mechanics'; break;
      case 'Electricity' : livePage='Electricity'; break;
      case 'Modern Physics' : livePage='Modern'; break;
      case 'Programming' : livePage='Programming'; break;
      case 'About Us' : livePage='AboutUs'; break;
      case 'Contact Us' : livePage='Contact'; break;
      default: livePage='Home';
    }
	return {
		type: CHANGE_PAGE,
		payload: livePage
	}
}

export const createMatrix = (row, col) => {
  return {
    type: CREATE_MATRIX, 
    payload: [1, 2]
  }
}