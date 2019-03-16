import React from 'react'; 
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './Transpose.css'
import Matrix from '../../Reusable/Matrix/Matrix';
import MatrixSelect from '../../Reusable/MatrixSelect/MatrixSelect';
import CalculateButton from '../../Reusable/CalculateButton/CalculateButton';
import MatrixTranspose from './MatrixTranspose/MatrixTranspose'
import { 
	setCreateTransposeMatrix, 
	setChangeTransposeMatrix, 
	setSolveTransposeMatrix
} from './State/actions'

const mapStateToProps = (state) => { 
	return {
		rows: state.createMatrix.TransposeRows,
		cols: state.createMatrix.TransposeCols,
		matrixArray: state.createMatrix.TransposeMatrixArray, 
		solve: state.createMatrix.solveTranspose
	}
}

const mapDispatchToProps = (dispatch) => { 
	return {
 		setCreate: (event) => dispatch(
 			setCreateTransposeMatrix(
 				document.getElementById("RowsTranspose").value, 
 				document.getElementById("ColsTranspose").value
 			)
 		),
 		
 		setChange: (event) => dispatch(
 			setChangeTransposeMatrix(
 				event.target.id, 
 				event.target.value
 			)
 		),
 		setSolve: () => dispatch(
 			setSolveTransposeMatrix()
 		)
	}
}

class Transpose extends React.Component {
	render() {
		const {
			rows, cols, matrixArray, solve, setCreate, setChange, setSolve
		} = this.props;
		return(
			<div className="bg-black p2">
				<h1 className="center">Transpose</h1>
				<div> 
					<MatrixSelect	setId={"RowsTranspose"}  onChangeFunction={setCreate} />
					<MatrixSelect	setId={"ColsTranspose"}  onChangeFunction={setCreate} />
				</div>
				{ 
					(cols) ?
						<div> 
							<Matrix assignID={'mat4'} rows={rows} cols={cols} onChangeFunction={setChange}/>
							<CalculateButton onClickFunction={setSolve} />
						</div>
					:  
						<p></p>
				}
				{
					(solve) ? 
						//console.log(matrixArray)
						<MatrixTranspose matrix={matrixArray}/>
					:(rows) ?
						<p>Click submit to compute</p>
					: 
						<p>Select the size of the matrices</p>
				}
			</div> 
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Transpose);