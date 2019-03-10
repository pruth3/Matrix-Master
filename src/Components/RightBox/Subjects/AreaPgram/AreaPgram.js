import React from 'react';
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './AreaPgram.css'
import Matrix from '../../Reusable/Matrix/Matrix';
//import MatrixSelect from '../../Reusable/MatrixSelect/MatrixSelect';
import CalculateButton from '../../Reusable/CalculateButton/CalculateButton';
//import math from 'mathjs';
import {
	setCreatePgram, 
	setModifyPgram1, 
	setModifyPgram2, 
	setSolvePgram, 
} from './State/actions';

const mapStateToProps = (state) => { 
  	return {
  		rows: state.createMatrix.PgramRows,
  		matrixArray1: state.createMatrix.PgramVector1, 
  		matrixArray2: state.createMatrix.PgramVector2,
  		solve: state.createMatrix.solvePgram, 
	}
} 

const mapDispatchToProps = (dispatch) => { 
 	return {
 		setCreate: (event) => dispatch(
 			setCreatePgram('rowsPgram')
 		),

 		setModify: (event) => dispatch(
 			setModifyPgram1(
 				event.target.id, 
 				event.target.value
 			)
 		), 
 		setModify2: (event) => dispatch(
 			setModifyPgram2(
 				event.target.id, 
 				event.target.value
 			)
 		), 
		setSolve: () => dispatch(
 			setSolvePgram()
 		), 
	}
}

class AreaPgram extends React.Component {
	render() {
		const {matrixArray1, matrixArray2, solve, setCreate, setModify, setModify2, setSolve} = this.props;
		return(
			<div className="bg-black p2">
				<h1 className="center">Area of Parallelogram</h1>
				<select id="rowsPgram"
						className="matDim"
						onChange={setCreate}>
					<option value="0">Select</option>
				 	<option value="2">Parallelogram</option>
				 	<option value="3">Parallelopiped</option>

				</select>
				{
					(matrixArray1) ?
						<div> 
							<div>
								<Matrix assignID={'matD'} rows={2} cols={1} onChangeFunction={setModify}/>
								<Matrix assignID={'matE'} rows={2} cols={1} onChangeFunction={setModify2}/>
							</div>
							<CalculateButton onClickFunction={setSolve} />
						</div>
					:  
						<p></p>
				}
				{
					(solve) ? 
						<p>
							Hello
						</p>
					:(matrixArray2) ?
						<p>Click submit to compute</p>
					: 
						<p>Select the size of the matrices</p>
				}
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaPgram);  