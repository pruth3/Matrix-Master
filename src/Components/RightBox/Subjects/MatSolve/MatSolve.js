import React from 'react';
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './MatSolve.css'
import Matrix from '../../Reusable/Matrix/Matrix';
import MatrixSelect from '../../Reusable/MatrixSelect/MatrixSelect';
import CalculateButton from '../../Reusable/CalculateButton/CalculateButton';
import SolVector from './SolVector/SolVector';
import MatrixSolve from './MatrixSolve/MatrixSolve'
//import MatrixSM from './MatrixSM/MatrixSM'
import {
	setCreateMatrixSolve,
	setModifyMatrixSolve,
	setModifyMatrixBSolve,
	setSolveMatrixSolve
} from './State/actions';

const mapStateToProps = (state) => { 
  	return {
  		rows: state.createMatrix.MatSolveRows, 
  		matrixArray: state.createMatrix.MatSolveArray,
  		bArray: state.createMatrix.MatSolveBArray,
  		solve: state.createMatrix.solveMatSolve, 
	}
} 

const mapDispatchToProps = (dispatch) => { 
 	return {
 		setCreate: (event) => dispatch(
 			setCreateMatrixSolve(
 				document.getElementById('RowsColsSolve').value, 
 			)
 		),

 		setModify: (event) => dispatch(
 			setModifyMatrixSolve(
 				event.target.id, 
 				event.target.value
 			)
 		), 
 		setModify2: (event) => dispatch(
 			setModifyMatrixBSolve(
 				event.target.id, 
 				event.target.value
 			)
 		), 
		setSolve: () => dispatch(
 			setSolveMatrixSolve()
 		), 
	}
}

class MatSolve extends React.Component {
	render() {
		const {rows, matrixArray, solve, setCreate, setModify, setModify2, setSolve, bArray} = this.props;
		return(
			<div className="bg-black p2">
				<h1 className="center">Solving nxn Matrix for x</h1>
				<div> 
					<MatrixSelect	setId={"RowsColsSolve"}  onChangeFunction={setCreate} />
				</div>
				{ 
					(rows) ?
						<div> 
							<div>
								<Matrix assignID={'mat7'} rows={rows} cols={rows} onChangeFunction={setModify}/>
								<SolVector rows={rows}/>
								<Matrix assignID={'mat8'} rows={rows} cols={1} onChangeFunction={setModify2}/>

							</div>
							<CalculateButton onClickFunction={setSolve} />
						</div>
					:  
						<p></p>
				}
				{
					(solve) ? 
						// <div>
						// 	<p>{matrixArray}</p>
						// 	<p>{bArray}</p>
						// </div>
						<MatrixSolve matrix={matrixArray} vector={bArray}/>
					:(rows) ?
						<p>Click submit to compute</p>
					: 
						<p>Select the size of the matrices</p>
				}
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MatSolve);  








