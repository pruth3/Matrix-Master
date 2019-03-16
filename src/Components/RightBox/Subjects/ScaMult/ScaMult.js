import React from 'react';
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './ScaMult.css'
import Matrix from '../../Reusable/Matrix/Matrix';
import MatrixSelect from '../../Reusable/MatrixSelect/MatrixSelect';
import CalculateButton from '../../Reusable/CalculateButton/CalculateButton';
import MatrixSM from './MatrixSM/MatrixSM'
import {
	setCreateSM,
	setScaMultMatrix, 
	setChangeMatrixSM, 
	setScaleValue
} from './State/actions';

const mapStateToProps = (state) => { 
  	return {
  		rows: state.createMatrix.ScaMultRows, 
  		cols: state.createMatrix.ScaMultCols, 
  		matrixArray: state.createMatrix.ScaMultMatrixArray,
  		solve: state.createMatrix.ScaMultMatrix, 
  		scale: state.createMatrix.ScaleValue
	}
} 

const mapDispatchToProps = (dispatch) => { 
 	return {
 		setCreateSM: (event) => dispatch( 
 			setCreateSM(
 				document.getElementById('RowsSM').value, 
 				document.getElementById('ColsSM').value
 			)
 		),
 		setSolve: () => dispatch(
 			setScaMultMatrix()
 		), 
 		setChangeMatrixSM: (event) => dispatch(
 			setChangeMatrixSM(
 				event.target.id, 
 				event.target.value
 			)
 		), 
 		setScale: (event) => dispatch(
 			setScaleValue(
 				event.target.value
 			)
 		)
	}
}

class ScaMult extends React.Component {
	render() {
		const {rows, cols, setCreateSM, solve, setSolve, setChangeMatrixSM, setScale, matrixArray, scale} = this.props;
		return(
			<div className="bg-black p2">
				<h1 className="center">Scalar Multiplication</h1>
				<div> 
					<MatrixSelect	setId={"RowsSM"}  onChangeFunction={setCreateSM} />
					<MatrixSelect	setId={"ColsSM"}  onChangeFunction={setCreateSM} />
				</div>
				{ 
					(cols) ?
						<div> 
							<div>
								<input id="scaleInput" className="matBox" onChange={setScale}/>
								<Matrix assignID={'mat3'} rows={rows} cols={cols} onChangeFunction={setChangeMatrixSM}/>
							</div>
							<CalculateButton onClickFunction={setSolve} />
						</div>
					:  
						<p></p>
				}
				{
					(solve) ? 
						//console.log(scale, matrixArray)
						<MatrixSM scale={scale} matrix={matrixArray} />
					:(rows) ?
						<p>Click submit to compute</p>
					: 
						<p>Select the size of the matrices</p>
				}
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScaMult);  













