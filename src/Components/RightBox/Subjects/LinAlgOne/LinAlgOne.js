import React from 'react'; 
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
// eslint-disable-next-line 
import math from 'mathjs';
import './LinAlgOne.css';
//import {Bar} from 'react-chartjs-2';s
import Matrix from './Matrix/Matrix';
import AddMatrix from './AddMatrix/AddMatrix';
import MatrixSelect from './MatrixSelect/MatrixSelect';
import CalculateButton from './CalculateButton/CalculateButton';
import {
	setCreateMatrix, 
	setAddMatrix
} from './State/actions';

const mapStateToProps = (state) => {
  	return {
   		row: state.createMatrix.row, 
   		col: state.createMatrix.col,
   		matrixArray1: state.createMatrix.matrixArray1, 
   		matrixArray2: state.createMatrix.matrixArray2,
 		addMatrix: state.createMatrix.addMatrix
	}
}

const mapDispatchToProps = (dispatch) => {
 	return {
		setCreateMatrix: (event) => dispatch(setCreateMatrix(document.getElementById('rows').value, document.getElementById('cols').value, event.target.id, event.target.value)),
		setAddMatrix: () => dispatch(setAddMatrix())
	}
}

class LinAlgOne extends React.Component {
	render() {
		const {
			row, col, matrixArray1, matrixArray2, 
			addMatrix, setCreateMatrix, setAddMatrix
		} = this.props
		return(
				<div className="bg-black p2 matrixAddition">
					<h1 className="center">Matrix Addition </h1>
					<div>
						<MatrixSelect	setId={"rows"}	setCreateMatrix={setCreateMatrix} />
						<MatrixSelect	setId={"cols"}  setCreateMatrix={setCreateMatrix} />
					</div>
					{
						(col) ?
							<div>
								<div>
									<Matrix assignID={'mat1'} rows={row} cols={col} setCreateMatrix={setCreateMatrix} />
									<Matrix assignID={'mat2'} rows={row} cols={col} setCreateMatrix={setCreateMatrix} />
								</div>
								<CalculateButton setAddMatrix={setAddMatrix} />
							</div>
						: 
							<p></p>
					}
					{
						(addMatrix) ? 
							<AddMatrix matrix1={matrixArray1} matrix2={matrixArray2}
							/>
						:(col) ?
							<p>Click submit to compute</p>
						: 
							<p>Select the size of the matrices</p>
					}
				</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LinAlgOne); 




