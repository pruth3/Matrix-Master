import { 
    CHANGE_PAGE,
    //RESET_ALL_PAGES
} from './constants.js'

export const setNewPage = (text) => {
	let livePage = 'Home'; 
    switch(text) {
      case 'Home' :                     livePage='Home'; break;
      case 'Matrix Addition' :          livePage='MatAdd'; break;
      case 'Scalar Multiplication' :    livePage='ScaMult'; break;
      case 'Transpose' :                livePage='Transpose'; break;
      case 'Matrix Multiplication' :    livePage='MatMult'; break;
      case 'Solve Matrix' :             livePage='MatSolve'; break;
      case 'Linear Mapping' :           livePage='LinMap'; break;
      case 'Inverse' :                  livePage='Inverse'; break;
      case 'Determinant' :              livePage='Det'; break;
      case 'Area of Parallelogram' :    livePage='AreaPgram'; break;
      case 'Area of Parallelepiped' :   livePage='AreaPiped'; break;
      case 'Diogonalization' :          livePage='Diag'; break;
      case 'Exponential' :              livePage='Expon'; break;
      case 'Inner Products' :           livePage='InProd'; break;
      case 'Least Squares' :            livePage='LeastSq'; break;
      default: livePage='Home';
    }
	return {
		type: CHANGE_PAGE,
		payload: livePage 
	}
}
 
