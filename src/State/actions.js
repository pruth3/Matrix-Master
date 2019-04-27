import { 
    CHANGE_PAGE,
    //RESET_ALL_PAGES, 
    START_PAGE
} from './constants.js';

const PAGE_NAME = {
  'Home' : 'Home',
  'Dot Product' : 'Dot',
  'Matrix Addition' : 'MatAdd',
  'Scalar Multiplication' : 'ScaMult',
  'Transpose' : 'Transpose',
  'Matrix Multiplication' : 'MatMult',
  'Solve Matrix' : 'MatSolve',
  'Linear Mapping' : 'LinMap',
  'Inverse' : 'Inverse',
  'Determinant' : 'Det',
  'Area of Parallelogram' : 'AreaPgram',
  'Exponential' : 'Expon',
  'Trace' : 'Trace',
  'Cross Product' : 'Cross',
  'Contributors' : 'Contributors'
}

export const setNewPage = (text) => {
  const livePage = PAGE_NAME[text] || 'Home';
	return {
		type: CHANGE_PAGE,
		payload: livePage 
	}
}

export const setStartPage = () => {
  return {
    type: START_PAGE
  }
}