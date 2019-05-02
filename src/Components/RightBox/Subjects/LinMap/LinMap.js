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
	setCreateLinearMapping, 
	setModifyLmMatrix, 
	setModifyLmVector, 
	setSolveLinearMapping
} from './State/actions'; 

const mapStateToProps = (state) => { 
  	return {
  		rows: state.createMatrix.LinMapRows, 
  		matrixArray: state.createMatrix.LinMapArray,
  		vectorArray: state.createMatrix.LinMapVecor,
  		solve: state.createMatrix.solveLinMap, 
	}
} 

const mapDispatchToProps = (dispatch) => { 
 	return {
 		setCreate: (event) => dispatch(
 			setCreateLinearMapping(
 				document.getElementById('rowsLM').value, 
 			) 
 		),

 		setModify: (event) => dispatch(
 			setModifyLmMatrix(
 				event.target.id, 
 				event.target.value
 			)
 		), 
 		setModify2: (event) => dispatch(
 			setModifyLmVector(
 				event.target.id, 
 				event.target.value
 			)
 		), 
		setSolve: () => dispatch(
 			setSolveLinearMapping()
 		), 
	}
}

const solvedMatrix = (matrix1, matrix2) => math.multiply(matrix1, matrix2);

class LinMap extends React.Component {
	componentWillUnmount() {
		console.log('component has unmounted')
	}
	render() {
		const {rows, matrixArray, vectorArray,solve, setCreate, setModify, setModify2, setSolve} = this.props;
		return(
			<div className="bg-black p2">
				<h1 className="center">Linear Mapping</h1>
				<div> 
					<MatrixSelect	setId={"rowsLM"}  onChangeFunction={setCreate} />
				</div>
				{ 
					(rows) ?
						<div> 
							<div>
								<Matrix assignID={'mat9'} rows={rows} cols={rows} onChangeFunction={setModify}/>
								<Matrix assignID={'matA'} rows={rows} cols={1} onChangeFunction={setModify2}/>
							</div>
							<CalculateButton onClickFunction={setSolve} />
						</div>
					:  
						<p></p>
				}
				{
					(solve) ? 
						<MatrixPrint solvedMatrix={solvedMatrix(matrixArray, vectorArray)} />
					:(rows) ?
						<p>Click submit to compute</p>
					: 
						<p>Select the size of the matrices</p>
				}
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LinMap);  



