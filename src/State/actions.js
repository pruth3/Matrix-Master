import { 
    CHANGE_PAGE,
    //RESET_ALL_PAGES, 
    START_PAGE
} from './constants.js'

export const setNewPage = (text) => {
	let livePage = 'Home'; 
    switch(text) {
      case 'Home' :                     livePage='Home'; break;
      case 'Dot Product' :              livePage='Dot'; break;
      case 'Matrix Addition' :          livePage='MatAdd'; break;
      case 'Scalar Multiplication' :    livePage='ScaMult'; break;
      case 'Transpose' :                livePage='Transpose'; break;
      case 'Matrix Multiplication' :    livePage='MatMult'; break;
      case 'Solve Matrix' :             livePage='MatSolve'; break;
      case 'Linear Mapping' :           livePage='LinMap'; break;
      case 'Inverse' :                  livePage='Inverse'; break;
      case 'Determinant' :              livePage='Det'; break;
      case 'Area of Parallelogram' :    livePage='AreaPgram'; break;
      case 'Exponential' :              livePage='Expon'; break;
      case 'Trace' :                    livePage='Trace'; break;
      case 'Cross Product' :            livePage='Cross'; break;
      default: livePage='Home';
    }
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