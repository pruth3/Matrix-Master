import React from 'react';
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import Matrix from '../../Reusable/Matrix/Matrix';
import MatrixSelect from '../../Reusable/MatrixSelect/MatrixSelect';
import CalculateButton from '../../Reusable/CalculateButton/CalculateButton';
import MatrixPrint from '../../Reusable/MatrixPrint/MatrixPrint';
import math from 'mathjs';
import {
	setCreateMatrixMult,
	setModifyMatrix1, 
	setModifyMatrix2, 
	setSolveMatrixMult
} from './State/actions';

const mapStateToProps = (state) => { 
  	return {
  		rows1: state.createMatrix.MatMultRows1, 
  		cols1rows2: state.createMatrix.MatMultCols1Rows2, 
  		cols2: state.createMatrix.MatMultCols2, 
  		matrixArray1: state.createMatrix.MatMultArray1,
  		matrixArray2: state.createMatrix.MatMultArray2,
  		solve: state.createMatrix.solveMatMult, 
	}
} 

const mapDispatchToProps = (dispatch) => { 
 	return {
 		setCreate: (event) => dispatch(
 			setCreateMatrixMult(
 				document.getElementById('rows1MM').value, 
 				document.getElementById('cols1rows2MM').value, 
 				document.getElementById('cols2MM').value
 			)
 		),
 		setModify1: (event) => dispatch(
 			setModifyMatrix1(
 				event.target.id, 
 				event.target.value
 			)
 		), 
 		setModify2: (event) => dispatch(
 			setModifyMatrix2(
 				event.target.id, 
 				event.target.value
 			)
 		),
 		setSolve: () => dispatch(
 			setSolveMatrixMult()
 		)
	}
}

const solvedMatrix = (matrix1, matrix2) => math.multiply(matrix1, matrix2);

class MatMult extends React.Component {
	render() {
		const {rows1, cols1rows2, cols2, matrixArray1, matrixArray2, solve, setCreate, setModify1, setModify2, setSolve} = this.props;
		return(
			<div className="bg-black p2">
				<h1 className="center">Matrix Multiplication</h1>
				<div> 
					<MatrixSelect	setId={"rows1MM"}  onChangeFunction={setCreate} />
					<MatrixSelect	setId={"cols1rows2MM"}  onChangeFunction={setCreate} />
					<MatrixSelect	setId={"cols2MM"}  onChangeFunction={setCreate} />
				</div>
				{ 
					(cols2) ?
						<div> 
							<div>
								<Matrix assignID={'mat5'} rows={rows1} cols={cols1rows2} onChangeFunction={setModify1}/>
								<Matrix assignID={'mat6'} rows={cols1rows2} cols={cols2} onChangeFunction={setModify2}/>
							</div>
							<CalculateButton onClickFunction={setSolve} />
						</div>
					:  
						<p></p>
				}
				{
					(solve) ? 
						<MatrixPrint solvedMatrix={solvedMatrix(matrixArray1, matrixArray2)} />
					:(rows1) ?
						<p>Click submit to compute</p>
					: 
						<p>Select the size of the matrices</p>
				}
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MatMult);  
